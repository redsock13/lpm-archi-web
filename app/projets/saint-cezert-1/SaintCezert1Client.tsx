"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

const ProjectGallery = dynamic(() => import("@/components/ProjectGallery"), { ssr: false });

// ─── Data ────────────────────────────────────────────────────────────────────

const rooms = [
  { label: "Séjour / Cuisine",  area: "51.29 m²" },
  { label: "Chambre 1",         area: "13.12 m²" },
  { label: "Chambre 2",         area: "12.70 m²" },
  { label: "Salle de bain",     area: "6.61 m²"  },
  { label: "Salle d'eau",       area: "2.45 m²"  },
  { label: "Buanderie",         area: "4.54 m²"  },
  { label: "WC",                area: "2.05 m²"  },
];

const annexes = [
  { label: "Terrasse de plain-pied",        area: "25.70 m²"  },
  { label: "Chemin piéton",                 area: "21.70 ml"  },
  { label: "Aire d'accès et stationnement", area: "250.44 m²" },
];

const surfaces = [
  { label: "Surface habitable",   value: "92.76 m²"      },
  { label: "Surface de plancher", value: "94.95 m²"      },
  { label: "Emprise au sol",      value: "125.32 m²"     },
  { label: "Espace vert",         value: "925 m² (74 %)" },
];

const exteriorSpecs = [
  { label: "Enduit façade",    value: "T Grège 3010 Y2OR — Gratté" },
  { label: "Menuiseries",      value: "Aluminium — RAL 7016 Gris Anthracite" },
  { label: "Volets roulants",  value: "Intégrés — RAL 7016 (toutes ouvertures)" },
  { label: "Tuiles",           value: "Terre cuite DC12" },
  { label: "Pente toiture",    value: "16.7° — 30 %" },
  { label: "Accès parcelle",   value: "Chemin d'Empiroulet — côté sud-est" },
  { label: "Stationnement",    value: "Gravier — 2 places" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function SaintCezert1Page() {
  const heroRef   = useRef<HTMLDivElement>(null);
  const statsRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelector("img"),
          { scale: 1.08, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.6, ease: "power3.out", delay: 0.1 }
        );
      }

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.querySelectorAll(".stat-item"),
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: statsRef.current, start: "top 82%" },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#000000] text-[#F5F0E8] min-h-screen font-sans">

      {/* ── Back nav ─────────────────────────────────────────────────────── */}
      <div className="fixed top-7 left-6 md:left-10 z-50">
        <Link
          href="/#portfolio"
          className="group flex items-center gap-2.5 text-[10px] tracking-[0.35em] uppercase
                     text-[#8A8A8A] hover:text-[#D4AF37] transition-colors duration-300"
        >
          <svg width="20" height="8" viewBox="0 0 20 8" fill="none" aria-hidden>
            <path d="M20 4H2M5 1L2 4l3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="hidden sm:inline">Retour aux projets</span>
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative w-full h-[55dvh] md:h-[75dvh] overflow-hidden">
        <Image
          src="/projets/Saint Cezert 1/couverture.jpg"
          alt="Saint-Cézert Maison 1 — LPM Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

        <div className="absolute bottom-10 left-6 md:left-16 z-10">
          <p className="text-[#D4AF37] text-[9px] tracking-[0.45em] uppercase mb-3 font-light">
            Maison individuelle · LPM Architecture
          </p>
          <h1
            className="font-bold leading-none tracking-tight"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(3rem, 9vw, 7rem)" }}
          >
            <span className="sr-only">Construction Maison Individuelle à </span>
            Saint-Cézert
            <span className="sr-only">, Haute-Garonne</span>
          </h1>
          <p className="text-[#8A8A8A] text-sm font-light mt-2 tracking-wide">
            Chemin d'Empiroulet — Haute-Garonne
          </p>
        </div>
      </section>

      {/* ── Galerie ──────────────────────────────────────────────────────── */}
      <ProjectGallery project="saint-cezert-1" compact />

      {/* ── Key figures ──────────────────────────────────────────────────── */}
      <div ref={statsRef} className="border-y border-[#1c1c1c] py-10 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1c1c1c]">
          {surfaces.map(({ label, value }) => (
            <div key={label} className="stat-item bg-[#000] px-6 py-7 flex flex-col gap-1">
              <span
                className="text-[#D4AF37] font-bold leading-none"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)", fontFamily: "var(--font-playfair)" }}
              >
                {value}
              </span>
              <span className="text-[#8A8A8A] text-[9px] tracking-[0.35em] uppercase font-light mt-1">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Situation & Programme ────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-5 font-light">
            Situation
          </h2>
          <p className="text-[#F5F0E8]/80 text-sm font-light leading-[1.9]">
            Le projet est situé sur la commune de{" "}
            <strong className="text-[#F5F0E8] font-medium">Saint-Cézert</strong>, à une quinzaine
            de kilomètres au nord de Toulouse. La parcelle de{" "}
            <strong className="text-[#F5F0E8] font-medium">1 250 m²</strong> est accessible
            depuis le Chemin d'Empiroulet.
          </p>
        </div>

        <div>
          <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-5 font-light">
            Programme
          </h2>
          <ul className="text-[#F5F0E8]/80 text-sm font-light leading-[1.9] space-y-1">
            <li><span className="text-[#8A8A8A]">Maison</span> — plain-pied, construction neuve</li>
            <li><span className="text-[#8A8A8A]">Surface habitable</span> — 92,76 m²</li>
            <li><span className="text-[#8A8A8A]">Terrasse</span> — 25,70 m²</li>
            <li><span className="text-[#8A8A8A]">Stationnement</span> — 250,44 m² en gravier</li>
            <li><span className="text-[#8A8A8A]">Construction</span> — type traditionnel</li>
          </ul>
        </div>
      </section>

      {/* ── Construction maison individuelle — texte SEO ─────────────────── */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pb-20">
        <h2
          className="text-2xl md:text-3xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Construction maison individuelle à{" "}
          <span className="italic font-normal text-[#D4AF37]">Saint-Cézert</span>
        </h2>
        <p className="text-[#F5F0E8]/70 text-sm font-light leading-[1.9] max-w-3xl">
          Chemin d&apos;Empiroulet, à Saint-Cézert — à une quinzaine de
          kilomètres au nord de Toulouse — LPM a assuré la construction de
          cette maison individuelle de plain-pied de 92,76 m² habitables, de
          construction traditionnelle, sur une parcelle de 1 250 m². De la
          conception des plans au suivi de chantier, LPM a accompagné ce
          projet de construction de maison individuelle en Haute-Garonne
          jusqu&apos;à la réception des travaux, avec un espace de
          stationnement extérieur de 250 m² en gravier.
        </p>
      </section>

      {/* ── Room list ────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pb-20">
        <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-8 font-light">
          Pièces habitables — RDC
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#1c1c1c]">
          {rooms.map(({ label, area }) => (
            <div key={label} className="bg-[#000] px-5 py-4 flex justify-between items-baseline gap-4">
              <span className="text-[#F5F0E8]/70 text-xs font-light tracking-wide">{label}</span>
              <span className="text-[#D4AF37] text-sm font-medium tabular-nums shrink-0">{area}</span>
            </div>
          ))}
        </div>

        <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-8 font-light mt-12">
          Autres constructions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1c1c1c]">
          {annexes.map(({ label, area }) => (
            <div key={label} className="bg-[#000] px-5 py-4 flex justify-between items-baseline">
              <span className="text-[#F5F0E8]/70 text-xs font-light tracking-wide">{label}</span>
              <span className="text-[#D4AF37] text-sm font-medium tabular-nums">{area}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Spécifications Extérieures ───────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 py-20">
        <p className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-2 font-light">
          Détails
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold mb-12 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Spécifications{" "}
          <span className="italic font-normal text-[#D4AF37]">Extérieures</span>
        </h2>

        <div className="divide-y divide-[#1c1c1c]">
          {exteriorSpecs.map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-4 gap-1 sm:gap-8"
            >
              <span className="text-[#8A8A8A] text-[10px] tracking-[0.3em] uppercase font-light shrink-0">
                {label}
              </span>
              <span className="text-[#F5F0E8]/85 text-sm font-light text-right">
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer CTA ───────────────────────────────────────────────────── */}
      <div className="border-t border-[#1c1c1c] py-12 flex flex-col sm:flex-row items-center
                      justify-between gap-6 px-6 md:px-16 max-w-5xl mx-auto">
        <Link
          href="/#portfolio"
          className="group flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase
                     text-[#8A8A8A] hover:text-[#D4AF37] transition-colors duration-300"
        >
          <svg width="20" height="8" viewBox="0 0 20 8" fill="none" aria-hidden>
            <path d="M20 4H2M5 1L2 4l3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Tous les projets
        </Link>
        <Link
          href="/#contact"
          className="text-[10px] tracking-[0.35em] uppercase
                     text-[#8A8A8A] hover:text-[#D4AF37] transition-colors duration-300"
        >
          Discutons de votre projet
        </Link>
      </div>
    </main>
  );
}
