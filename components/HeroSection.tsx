"use client";

/**
 * HeroSection — Vidéo B-Roll + Phrase Monumentale
 *
 * Fond     : vidéo plein écran (InteractiveHero) + voile 30 %
 * Centre   : phrase Playfair Display monumentale + CTAs
 * Bas      : indicateur scroll + marquee discret + ligne or
 *
 * Le logo LPM en haut à gauche est géré par Header.tsx (fixed, z-50).
 */

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const InteractiveHero = dynamic(
  () => import("./InteractiveHero"),
  { ssr: false, loading: () => null }
);

const MARQUEE =
  "\u00A0\u00A0·\u00A0\u00A0MAÎTRE D'ŒUVRE\u00A0\u00A0·\u00A0\u00A0LPM\u00A0\u00A0·\u00A0\u00A0CONSTRUCTION HAUT DE GAMME\u00A0\u00A0·\u00A0\u00A0SUD-OUEST · AGEN · TOULOUSE\u00A0\u00A0·\u00A0\u00A0DEPUIS 2015\u00A0\u00A0";

interface Props { isReady: boolean }

// ── Variants Framer ────────────────────────────────────────────────────────
const fadeUp = (delay: number) => ({
  initial:    { opacity: 0, y: 22 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

// ─────────────────────────────────────────────────────────────────────────────

export default function HeroSection({ isReady }: Props) {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#050505] select-none">

      {/* ── Vidéo + overlays (gestion dans InteractiveHero) ─────────── */}
      <InteractiveHero isReady={isReady} />

      {/* ════════════════════════════════════════════════════════════════
          CONTENU CENTRAL — Phrase monumentale + CTAs
      ════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 z-[10] flex flex-col items-center justify-center
                   px-6 md:px-16 text-center pointer-events-none"
      >
        {/* H1 sémantique pour Google — visuellement masqué, lu par les crawlers */}
        <h1 className="sr-only">
          LPM : Maître d&apos;œuvre en construction de maisons individuelles sur-mesure en Haute-Garonne
        </h1>

        {/* Eyebrow */}
        {isReady && (
          <motion.p
            {...fadeUp(0.3)}
            className="mb-6 md:mb-8 text-[#D4AF37] tracking-[0.55em] uppercase font-light"
            style={{
              fontFamily: "var(--font-sora), system-ui, sans-serif",
              fontSize: "clamp(0.52rem, 0.9vw, 0.72rem)",
              letterSpacing: "0.55em",
            }}
          >
            LPM · Maîtrise d&apos;Œuvre
          </motion.p>
        )}

        {/* Phrase monumentale — visuelle uniquement (aria-hidden) */}
        {isReady && (
          <motion.div
            {...fadeUp(0.55)}
            aria-hidden="true"
            className="text-[#F5F0E8] uppercase"
            style={{
              fontFamily:
                'var(--font-playfair), "Playfair Display", Georgia, serif',
              fontSize: "clamp(1.6rem, 4.8vw, 6rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "0.08em",
              maxWidth: "22ch",
            }}
          >
            Conception de Maison<br />
            <span style={{ fontWeight: 300, fontStyle: "italic" }}>
              &amp; Maîtrise d&apos;Œuvre
            </span>
            <br />
            <span
              className="text-[#D4AF37]"
              style={{ fontSize: "clamp(1.1rem, 3.2vw, 3.8rem)", letterSpacing: "0.20em", fontWeight: 400 }}
            >
              Sur-Mesure
            </span>
          </motion.div>
        )}

        {/* Séparateur */}
        {isReady && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.05, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              marginTop: "clamp(24px, 3vw, 40px)",
              marginBottom: "clamp(24px, 3vw, 40px)",
              height: "1px",
              width: "clamp(50px, 7vw, 90px)",
              background:
                "linear-gradient(90deg, transparent, #D4AF37, transparent)",
              transformOrigin: "center",
            }}
          />
        )}

        {/* CTAs */}
        {isReady && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 1.0, delay: 1.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-3 items-center pointer-events-auto"
          >
            <a
              href="#expertise"
              className="px-9 py-3.5 bg-[#D4AF37] text-[#050505]
                         text-[9px] tracking-[0.35em] uppercase font-semibold
                         hover:bg-[#E8C97A] transition-colors duration-300 cursor-none"
            >
              Découvrir LPM
            </a>
            <a
              href="#portfolio"
              className="px-9 py-3.5 border border-white/25 text-white/65
                         text-[9px] tracking-[0.35em] uppercase font-light
                         hover:border-[#D4AF37]/60 hover:text-[#D4AF37]
                         transition-colors duration-300 cursor-none"
            >
              Nos Réalisations
            </a>
          </motion.div>
        )}
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────── */}
      {isReady && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 1.2 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-[10]
                     flex flex-col items-center gap-2 text-white/30
                     pointer-events-none"
        >
          <span className="text-[7px] tracking-[0.5em] uppercase font-light">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={11} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      )}

      {/* ── Marquee discret ──────────────────────────────────────────── */}
      <div
        className="absolute left-0 right-0 z-[10] overflow-hidden pointer-events-none"
        style={{ bottom: "2.6rem" }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 44s linear infinite" }}
        >
          {[0, 1].map((k) => (
            <span
              key={k}
              aria-hidden={k === 1}
              className="text-white/18 tracking-[0.55em] uppercase font-light"
              style={{ fontSize: "clamp(0.44rem, 0.52vw, 0.60rem)" }}
            >
              {MARQUEE.repeat(6)}
            </span>
          ))}
        </div>
      </div>

      {/* ── Ligne or bas ─────────────────────────────────────────────── */}
      {isReady && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute bottom-0 left-0 right-0 z-[10] h-px origin-left"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212,175,55,0.40), transparent)",
          }}
        />
      )}
    </section>
  );
}
