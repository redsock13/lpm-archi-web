"use client";

import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

/**
 * Bandeau de consentement cookies (conforme aux recommandations CNIL) :
 * - Google Analytics n'est chargé QU'APRÈS un clic sur « Tout accepter ».
 * - « Tout refuser » est aussi visible et aussi simple que « Tout accepter ».
 * - Le choix est conservé 6 mois, puis redemandé.
 * - Le visiteur peut changer d'avis à tout moment (lien « Gestion des cookies »
 *   dans le footer, qui appelle openCookieSettings()).
 */

const GA_ID = "G-BKB4VQ6BC8";
const CONSENT_COOKIE = "lpm_consent";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 182; // ~6 mois
const OPEN_EVENT = "lpm:open-cookie-settings";
const GA_COOKIE_EXPIRES = 60 * 60 * 24 * 395; // 13 mois max (recommandation CNIL)

type Consent = "granted" | "denied" | "unset" | "ssr";

// ── Petit store externe pour lire le cookie de consentement ───────────────────
const listeners = new Set<() => void>();
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}
function notify() {
  listeners.forEach((cb) => cb());
}

function readConsent(): Consent {
  try {
    const match = document.cookie.match(
      new RegExp(`(?:^|;\\s*)${CONSENT_COOKIE}=(granted|denied)`)
    );
    return match ? (match[1] as Consent) : "unset";
  } catch {
    return "unset";
  }
}

function writeConsent(value: "granted" | "denied") {
  try {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${CONSENT_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
  } catch {
    /* cookies bloqués : on n'enregistre rien, le bandeau sera redemandé */
  }
}

/** Supprime les cookies Google Analytics déjà déposés (_ga, _ga_XXXX, _gid…). */
function deleteAnalyticsCookies() {
  try {
    const names = document.cookie
      .split(";")
      .map((c) => c.split("=")[0].trim())
      .filter((n) => n === "_ga" || n.startsWith("_ga_") || n === "_gid" || n.startsWith("_gat"));

    const host = window.location.hostname;
    const parts = host.split(".");
    const domains = ["", host, `.${host}`];
    for (let i = 1; i < parts.length - 1; i++) {
      domains.push(`.${parts.slice(i).join(".")}`); // ex. ".lpmoe.com"
    }

    for (const name of names) {
      for (const domain of domains) {
        document.cookie = `${name}=; Max-Age=0; Path=/${domain ? `; Domain=${domain}` : ""}`;
      }
    }
  } catch {
    /* rien à faire */
  }
}

/**
 * Limite la durée de vie des cookies GA à 13 mois (par défaut GA = 2 ans).
 * Doit être poussé dans le dataLayer AVANT le `gtag('config')` de GoogleAnalytics.
 */
function setGaCookieExpiry() {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  // gtag attend un objet `arguments`, pas un tableau
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-rest-params
  function gtag(..._args: unknown[]) { w.dataLayer!.push(arguments); }
  gtag("set", { cookie_expires: GA_COOKIE_EXPIRES });
}

/** Rouvre le bandeau (à appeler depuis le lien « Gestion des cookies »). */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

// ─────────────────────────────────────────────────────────────────────────────

export default function CookieConsent() {
  const consent = useSyncExternalStore<Consent>(subscribe, readConsent, () => "ssr");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const gaPrepared = useRef(false);

  // useLayoutEffect du parent s'exécute avant l'injection du script GA (useEffect de l'enfant)
  useLayoutEffect(() => {
    if (consent === "granted" && !gaPrepared.current) {
      gaPrepared.current = true;
      setGaCookieExpiry();
    }
  }, [consent]);

  useEffect(() => {
    const open = () => setSettingsOpen(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const accept = () => {
    writeConsent("granted");
    setSettingsOpen(false);
    notify();
  };

  const refuse = () => {
    const wasGranted = consent === "granted";
    writeConsent("denied");
    deleteAnalyticsCookies();
    setSettingsOpen(false);
    notify();
    // Le script GA déjà chargé ne peut pas être « déchargé » : on recharge la page.
    if (wasGranted) window.location.reload();
  };

  const showBanner = consent === "unset" || (settingsOpen && consent !== "ssr");

  return (
    <>
      {consent === "granted" && <GoogleAnalytics gaId={GA_ID} />}

      {showBanner && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-desc"
          className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[9998]
                     bg-[#0b0b0b]/95 backdrop-blur border border-[#2a2a2a] rounded-sm
                     shadow-[0_10px_40px_rgba(0,0,0,0.6)] p-6 text-[#F5F0E8]"
        >
          <p
            id="cookie-title"
            className="text-[#C9A84C] text-[9px] tracking-[0.4em] uppercase font-light mb-3"
          >
            Cookies
          </p>
          <p id="cookie-desc" className="text-[#F5F0E8]/75 text-xs leading-[1.8] font-light">
            Avec votre accord, nous utilisons Google Analytics pour mesurer la fréquentation du
            site et l&apos;améliorer. Aucun cookie de mesure n&apos;est déposé si vous refusez.
            Vous pouvez changer d&apos;avis à tout moment via «&nbsp;Gestion des cookies&nbsp;»
            en bas de page.{" "}
            <Link
              href="/politique-de-confidentialite#cookies"
              className="text-[#C9A84C] underline underline-offset-2 hover:text-[#D4AF37]"
            >
              En savoir plus
            </Link>
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={refuse}
              className="py-3 px-4 text-[10px] tracking-[0.25em] uppercase font-medium
                         border border-[#C9A84C]/60 text-[#F5F0E8]
                         hover:bg-[#C9A84C] hover:text-[#060606] transition-colors duration-300"
            >
              Tout refuser
            </button>
            <button
              type="button"
              onClick={accept}
              className="py-3 px-4 text-[10px] tracking-[0.25em] uppercase font-medium
                         border border-[#C9A84C]/60 text-[#F5F0E8]
                         hover:bg-[#C9A84C] hover:text-[#060606] transition-colors duration-300"
            >
              Tout accepter
            </button>
          </div>
        </div>
      )}
    </>
  );
}
