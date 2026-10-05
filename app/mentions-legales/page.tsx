import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales — LPM Maître d'Œuvre",
  description:
    "Mentions légales du site lpmoe.com — LPM, maître d'œuvre en Haute-Garonne. Éditeur, hébergement, propriété intellectuelle et données personnelles.",
  alternates: { canonical: "/mentions-legales" },
};

const sections = [
  {
    number: "01",
    title: "Éditeur du site",
    content: (
      <div className="flex flex-col gap-2">
        <p>
          Le site <span className="text-[#F5F0E8]/90">lpmoe.com</span> est édité par :
        </p>
        <div className="mt-3 flex flex-col gap-1.5 pl-4 border-l border-[#D4AF37]/20">
          <p>
            <strong className="text-[#F5F0E8]/90 font-medium">Loïc Petit</strong> — Maître d&apos;œuvre (LPM)
          </p>
          <p>Entrepreneur Individuel</p>
          <p>Siège social : <span className="text-[#F5F0E8]/80">31330 GRENADE, France</span></p>
          <p>
            Téléphone :{" "}
            <a
              href="tel:+33782922112"
              className="text-[#D4AF37] hover:text-[#E8C97A] transition-colors duration-300"
            >
              07 82 92 21 12
            </a>
          </p>
          <p>
            Email :{" "}
            <a
              href="mailto:contact@lpmoe.com"
              className="text-[#D4AF37] hover:text-[#E8C97A] transition-colors duration-300 underline underline-offset-4 decoration-[#D4AF37]/30"
            >
              contact@lpmoe.com
            </a>
          </p>
          <p className="text-[#8A8A8A]">
            SIREN : <span className="text-[#F5F0E8]/80 tracking-widest">944 690 288</span>
          </p>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Directeur de la publication",
    content: (
      <p>
        Le directeur de la publication est{" "}
        <strong className="text-[#F5F0E8]/90 font-medium">Loïc Petit</strong>.
      </p>
    ),
  },
  {
    number: "03",
    title: "Hébergement du site",
    content: (
      <div className="flex flex-col gap-1.5 pl-4 border-l border-[#D4AF37]/20">
        <p>
          <strong className="text-[#F5F0E8]/90 font-medium">Vercel Inc.</strong>
        </p>
        <p>440 N Barranca Ave #4133</p>
        <p>Covina, CA 91723 — États-Unis</p>
        <p>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] hover:text-[#E8C97A] transition-colors duration-300"
          >
            vercel.com
          </a>
        </p>
      </div>
    ),
  },
  {
    number: "04",
    title: "Propriété intellectuelle",
    content: (
      <p>
        L&apos;ensemble de ce site — textes, logos, images et rendus 3D — relève de la
        législation française et internationale sur le droit d&apos;auteur et la propriété
        intellectuelle. Toute reproduction, même partielle, est{" "}
        <strong className="text-[#F5F0E8]/90 font-medium">interdite</strong> sans
        l&apos;accord préalable écrit de{" "}
        <strong className="text-[#F5F0E8]/90 font-medium">Loïc Petit</strong>.
      </p>
    ),
  },
  {
    number: "05",
    title: "Données personnelles (RGPD)",
    content: (
      <p>
        Les informations recueillies via le formulaire de contact (nom, email, téléphone,
        ville) sont destinées exclusivement à LPM pour la gestion de votre projet de
        construction. Elles ne sont jamais cédées à des tiers. Conformément à la loi
        «&nbsp;Informatique et Libertés&nbsp;», vous pouvez exercer votre droit
        d&apos;accès et de rectification aux données vous concernant en contactant :{" "}
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
    title: "Responsabilité",
    content: (
      <p>
        LPM s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur
        ce site. Toutefois, les prix mentionnés à titre indicatif ne sauraient engager la
        responsabilité de l&apos;entreprise sans un{" "}
        <strong className="text-[#F5F0E8]/90 font-medium">devis personnalisé</strong> établi
        suite à une visite de terrain.
      </p>
    ),
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function MentionsLegales() {
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
          Mentions{" "}
          <span className="italic font-normal text-[#D4AF37]">Légales</span>
        </h1>
        <p className="mt-5 text-[#8A8A8A] text-sm font-light leading-[1.9] max-w-2xl">
          Conformément aux articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004
          pour la Confiance dans l&apos;Économie Numérique (LCEN).
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
          href="/politique-de-confidentialite"
          className="text-[#8A8A8A]/40 text-[10px] tracking-[0.25em] uppercase font-light
                     hover:text-[#C9A84C] transition-colors duration-300"
        >
          Politique de confidentialité
        </Link>
      </div>

    </main>
  );
}
