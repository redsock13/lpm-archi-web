import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideBody from "@/components/GuideBody";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "5 Étapes Construction Maison Individuelle | Guide LPM Haute-Garonne",
  description:
    "De l'esquisse aux clés : découvrez les 5 étapes incontournables pour construire votre maison individuelle en Haute-Garonne. Programme, permis, chantier, réception.",
  alternates: { canonical: "/guides/etapes-construction-maison-individuelle" },
  keywords: [
    "étapes construction maison individuelle",
    "processus construction maison neuve",
    "permis de construire Haute-Garonne",
    "maîtrise d'œuvre étapes",
    "chantier maison neuve",
  ],
  openGraph: {
    title:
      "5 Étapes Construction Maison Individuelle | Guide LPM Haute-Garonne",
    description:
      "De l'esquisse aux clés : découvrez les 5 étapes incontournables pour construire votre maison individuelle en Haute-Garonne.",
    url: "https://www.lpmoe.com/guides/etapes-construction-maison-individuelle",
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "article",
    images: [{ url: "/hero-bg-poster.jpg", width: 1280, height: 720, alt: "LPM — Maître d'œuvre Haute-Garonne" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Étapes Construction Maison Individuelle | Guide LPM Haute-Garonne",
    images: ["/hero-bg-poster.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Les 5 Étapes Clés d'une Construction de Maison Individuelle Réussie",
  description:
    "De l'esquisse aux clés : découvrez les 5 étapes incontournables pour construire votre maison individuelle en Haute-Garonne.",
  author: {
    "@type": "Person",
    name: "Loïc Petit — LPM",
  },
  publisher: {
    "@type": "Organization",
    name: "LPM — Maître d'Œuvre",
    url: "https://www.lpmoe.com",
  },
  datePublished: "2025-09-01",
  dateModified: "2026-11-07",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.lpmoe.com/guides/etapes-construction-maison-individuelle",
  },
};

export default function ArticleEtapesConstruction() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Guides", path: "/#conseils" },
          { name: "Étapes Construction Maison Individuelle", path: "/guides/etapes-construction-maison-individuelle" },
        ]}
      />
      <main className="bg-[#080808] text-[#F5F0E8] min-h-screen">
        {/* Hero article */}
        <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            className="flex items-center gap-2 text-[#8A8A8A] text-[10px] tracking-[0.2em] uppercase mb-10"
          >
            <Link
              href="/"
              className="hover:text-[#C9A84C] transition-colors"
            >
              Accueil
            </Link>
            <span>/</span>
            <Link
              href="/#conseils"
              className="hover:text-[#C9A84C] transition-colors"
            >
              Guides
            </Link>
            <span>/</span>
            <span className="text-[#C9A84C]">
              Étapes Construction Maison Individuelle
            </span>
          </nav>

          {/* Category */}
          <p className="text-[#C9A84C] text-[10px] tracking-[0.45em] uppercase font-light mb-4">
            Guide Pratique
          </p>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Les 5 Étapes Clés d’une Construction de Maison Individuelle Réussie
          </h1>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[#8A8A8A] text-xs font-light mb-12">
            <span>Par Loïc Petit — LPM</span>
            <span className="hidden md:inline">·</span>
            <span>6 min de lecture</span>
            <span className="hidden md:inline">·</span>
            <span>Mis à jour le 7 novembre 2026</span>
          </div>

          <div className="w-16 h-px bg-[#C9A84C] mb-16" />
        </section>

        {/* Article body */}
        <article className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto pb-24">
          <GuideBody kind="etapes" />
        </article>

        {/* CTA section */}
        <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#1c1c1c] bg-[#060606]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#C9A84C] tracking-[0.4em] text-[10px] uppercase mb-4">
              Votre projet
            </p>
            <h2
              style={{ fontFamily: "var(--font-playfair)" }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Prêt à lancer votre construction ?
            </h2>
            <p className="text-[#8A8A8A] mb-10 max-w-lg mx-auto leading-relaxed">
              LPM vous accompagne à chaque étape, de la faisabilité à la remise
              des clés. Premier rendez-vous sans engagement pour analyser votre
              projet et vous donner une vision claire du budget et du planning.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-4 gold-btn-shine px-10 py-4 text-xs tracking-[0.3em] uppercase font-bold"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </section>

        {/* Related guides */}
        <section className="px-6 md:px-12 lg:px-20 py-16 border-t border-[#1c1c1c]">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#8A8A8A] text-[10px] tracking-[0.4em] uppercase mb-8">
              À lire aussi
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/guides/maitre-oeuvre-architecte-constructeur"
                className="group border border-[#1c1c1c] p-6 bg-[#0d0d0d] hover:border-[#C9A84C] transition-colors rounded"
              >
                <p className="text-[#C9A84C] text-[9px] tracking-[0.4em] uppercase mb-3">
                  Guide Pratique
                </p>
                <h3 className="text-[#F5F0E8] font-semibold leading-snug group-hover:text-[#C9A84C] transition-colors">
                  Maître d’Œuvre, Architecte ou Constructeur : Lequel Choisir
                  Pour Votre Projet ?
                </h3>
                <p className="text-[#8A8A8A] text-xs mt-3">7 min de lecture →</p>
              </Link>
              <Link
                href="/guides/norme-re2020-construction-maison"
                className="group border border-[#1c1c1c] p-6 bg-[#0d0d0d] hover:border-[#C9A84C] transition-colors rounded"
              >
                <p className="text-[#C9A84C] text-[9px] tracking-[0.4em] uppercase mb-3">
                  Réglementation
                </p>
                <h3 className="text-[#F5F0E8] font-semibold leading-snug group-hover:text-[#C9A84C] transition-colors">
                  Norme RE2020 : Ce Qu’Elle Change Pour Votre Construction de
                  Maison
                </h3>
                <p className="text-[#8A8A8A] text-xs mt-3">5 min de lecture →</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
