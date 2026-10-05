import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — LPM Maître d'Œuvre",
  description:
    "Politique de confidentialité de LPM, maître d'œuvre en Haute-Garonne. Informations sur la collecte et l'utilisation de vos données personnelles.",
  alternates: { canonical: "/politique-de-confidentialite" },
};

const sections = [
  {
    number: "01",
    title: "Collecte des données",
    content: (
      <>
        <p className="mb-4">
          Nous collectons des informations lorsque vous remplissez notre formulaire de contact :
        </p>
        <ul className="flex flex-col gap-2">
          {[
            "Nom et Prénom",
            "Adresse e-mail et Numéro de téléphone",
            "Ville du projet et Budget estimé",
            "Détails de votre projet de construction",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[6px] w-3.5 h-px bg-[#D4AF37]/50 shrink-0 inline-block" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: "02",
    title: "Utilisation des informations",
    content: (
      <>
        <p className="mb-4">
          Toutes les informations que nous recueillons auprès de vous sont utilisées uniquement pour :
        </p>
        <ul className="flex flex-col gap-2">
          {[
            "Vous recontacter suite à votre demande.",
            "Établir une étude de projet personnalisée et des devis de maîtrise d'œuvre.",
            "Améliorer l'expérience utilisateur sur notre site web.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[6px] w-3.5 h-px bg-[#D4AF37]/50 shrink-0 inline-block" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    number: "03",
    title: "Confidentialité et tiers",
    content: (
      <p>
        Nous sommes les seuls propriétaires des informations collectées sur ce site. Vos informations
        personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société,
        en dehors de ce qui est nécessaire pour répondre à votre demande{" "}
        <span className="text-[#F5F0E8]/50">
          (ex : bureau d&apos;études, artisans partenaires après votre accord)
        </span>
        .
      </p>
    ),
  },
  {
    number: "04",
    title: "Protection des informations",
    content: (
      <p>
        Nous mettons en œuvre des mesures de sécurité pour préserver la sécurité de vos informations
        personnelles. Seul le responsable de LPM —{" "}
        <strong className="text-[#F5F0E8] font-medium">Loïc Petit</strong> — a accès aux
        informations identifiables.
      </p>
    ),
  },
  {
    number: "05",
    title: "Droit d'accès et de suppression",
    content: (
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos
        données. Pour exercer ce droit, envoyez simplement un email à{" "}
        <a
          href="mailto:contact@lpmoe.com"
          className="text-[#D4AF37] hover:text-[#E8C97A] transition-colors duration-300 underline underline-offset-4 decoration-[#D4AF37]/30"
        >
          contact@lpmoe.com
        </a>
        .
      </p>
    ),
  },
  {
    number: "06",
    title: "Cookies",
    content: (
      <p>
        Nous utilisons des cookies pour améliorer l&apos;accès à notre site et identifier les
        visiteurs réguliers via Google Analytics (SEO). Cette utilisation des cookies n&apos;est
        en aucune façon liée à des informations personnelles identifiables sur notre site.
      </p>
    ),
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function PolitiqueDeConfidentialite() {
  return (
    <main className="bg-[#000000] text-[#F5F0E8] min-h-screen font-sans">

      {/* ── Back nav ─────────────────────────────────────────────────── */}
      <div className="fixed top-7 left-6 md:left-10 z-50">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-[10px] tracking-[0.35em] uppercase
                     text-[#8A8A8A] hover:text-[#D4AF37] transition-colors duration-300"
        >
          <svg width="20" height="8" viewBox="0 0 20 8" fill="none" aria-hidden>
            <path
              d="M20 4H2M5 1L2 4l3 3"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="hidden sm:inline">Accueil</span>
        </Link>
      </div>

      {/* ── Header ───────────────────────────────────────────────────── */}
      <header className="pt-32 pb-16 px-6 md:px-16 max-w-4xl mx-auto border-b border-[#1c1c1c]">
        <p className="text-[#D4AF37] text-[9px] tracking-[0.5em] uppercase font-light mb-5">
          LPM · Informations légales
        </p>
        <h1
          className="text-3xl md:text-5xl font-bold leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Politique de{" "}
          <span className="italic font-normal text-[#D4AF37]">Confidentialité</span>
        </h1>
        <p className="mt-5 text-[#8A8A8A] text-sm font-light leading-[1.9] max-w-2xl">
          Cette politique décrit comment LPM collecte, utilise et protège vos
          informations personnelles lorsque vous utilisez notre site ou nous contactez.
        </p>
      </header>

      {/* ── Sections ─────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-20 flex flex-col divide-y divide-[#1c1c1c]">
        {sections.map(({ number, title, content }) => (
          <div key={number} className="py-12 grid md:grid-cols-[160px_1fr] gap-8 md:gap-16">
            {/* Number + title */}
            <div className="flex md:flex-col gap-4 md:gap-3">
              <span
                className="text-[#D4AF37]/25 font-bold leading-none select-none"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
                aria-hidden
              >
                {number}
              </span>
              <h2
                className="text-[#D4AF37] text-[9px] tracking-[0.4em] uppercase font-light
                           self-center md:self-auto md:mt-1"
              >
                {title}
              </h2>
            </div>

            {/* Content */}
            <div className="text-[#F5F0E8]/70 text-sm font-light leading-[1.9]">
              {content}
            </div>
          </div>
        ))}
      </div>

      {/* ── Bottom ───────────────────────────────────────────────────── */}
      <div className="border-t border-[#1c1c1c] py-10 px-6 md:px-16 max-w-4xl mx-auto
                      flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#8A8A8A]/50 text-[10px] tracking-[0.2em] font-light">
          © {new Date().getFullYear()} LPM — Maître d&apos;Œuvre Haute-Garonne
        </p>
        <Link
          href="/"
          className="text-[#D4AF37]/60 text-[10px] tracking-[0.35em] uppercase font-light
                     hover:text-[#D4AF37] transition-colors duration-300"
        >
          Retour à l&apos;accueil
        </Link>
      </div>

    </main>
  );
}
