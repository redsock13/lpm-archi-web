"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ProjectGallery from "@/components/ProjectGallery";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─── Data ────────────────────────────────────────────────────────────────────

const rooms = [
  { label: "Salon / Salle à manger / Cuisine", area: "42.18 m²" },
  { label: "Chambre 1",                        area: "10.01 m²" },
  { label: "Chambre 2",                        area: "10.02 m²" },
  { label: "Chambre 3",                        area: "10.00 m²" },
  { label: "Salle de bain",                    area: "5.94 m²"  },
  { label: "Dressing",                         area: "4.68 m²"  },
  { label: "Couloir",                          area: "7.08 m²"  },
  { label: "WC",                               area: "1.51 m²"  },
];

const annexes = [
  { label: "Garage accolé",                   area: "24.12 m²" },
  { label: "Terrasse",                         area: "35.50 m²" },
];

const surfaces = [
  { label: "Surface habitable",   value: "91.41 m²"       },
  { label: "Emprise au sol",      value: "173.5 m²"       },
  { label: "Espace vert",         value: "268.5 m² (60 %)" },
  { label: "Parcelle",            value: "442 m²"         },
];

const exteriorSpecs = [
  { label: "Enduit façade",    value: "Blanc cassé" },
  { label: "Toiture",         value: "4 pans — Tuiles terre cuite DC12" },
  { label: "Menuiseries",     value: "PVC / Aluminium — Gris Anthracite" },
  { label: "Volets roulants", value: "Intégrés — Gris Anthracite (toutes ouvertures)" },
  { label: "Stationnement",   value: "2 places — 1 garage + 1 extérieure" },
  { label: "Accès parcelle",  value: "Voie interne au lotissement — Rue des Églantiers" },
  { label: "Réseaux",         value: "Regroupés côté portail d'entrée — Rue des Églantiers" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function GrenadePage() {
  const imgEast  = useRef<HTMLDivElement>(null);
  const imgWest  = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      [imgEast, imgWest].forEach((ref) => {
        if (!ref.current) return;
        gsap.fromTo(
          ref.current.querySelector("img"),
          { scale: 1.08, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 85%" },
          }
        );
      });

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.querySelectorAll(".stat-item"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
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

      {/* ── Hero — Vue Est ───────────────────────────────────────────────── */}
      <section className="relative w-full h-[55dvh] md:h-[75dvh] overflow-hidden" ref={imgEast}>
        <Image
          src="/projets/grenade/vueest.png"
          alt="Villa Grenade — Vue Est"
          fill
          priority
          sizes="100vw"
          className="object-cover" style={{ objectPosition: "center 30%" }}
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
            Grenade
            <span className="sr-only">-sur-Garonne, Haute-Garonne</span>
          </h1>
          <p className="text-[#8A8A8A] text-sm font-light mt-2 tracking-wide">
            Grenade-sur-Garonne — Haute-Garonne
          </p>
        </div>
      </section>

      {/* ── Galerie 3D ──────────────────────────────────────────────────── */}
      <ProjectGallery project="grenade" compact />

      {/* ── Key figures ─────────────────────────────────────────────────── */}
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
            <strong className="text-[#F5F0E8] font-medium">Grenade-sur-Garonne</strong>, au nord
            de Toulouse. Il est réalisé sur le{" "}
            <strong className="text-[#F5F0E8] font-medium">lot n° 1</strong> (parcelle cadastrale
            F3340, division de la parcelle 2967), d'une contenance de{" "}
            <strong className="text-[#F5F0E8] font-medium">442 m²</strong>,{" "}
            rue des Églantiers.
          </p>
        </div>

        <div>
          <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-5 font-light">
            Programme
          </h2>
          <ul className="text-[#F5F0E8]/80 text-sm font-light leading-[1.9] space-y-1">
            <li><span className="text-[#8A8A8A]">Maison</span> — plain-pied, construction neuve</li>
            <li><span className="text-[#8A8A8A]">Surface habitable</span> — 91,41 m²</li>
            <li><span className="text-[#8A8A8A]">Garage accolé</span> — 24,12 m²</li>
            <li><span className="text-[#8A8A8A]">Terrasse</span> — 35,5 m²</li>
            <li><span className="text-[#8A8A8A]">Emprise au sol</span> — 173,5 m²</li>
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
          <span className="italic font-normal text-[#D4AF37]">Grenade-sur-Garonne</span>
        </h2>
        <p className="text-[#F5F0E8]/70 text-sm font-light leading-[1.9] max-w-3xl">
          Rue des Églantiers, sur la commune de Grenade-sur-Garonne au nord de
          Toulouse, LPM a conduit la construction de cette maison individuelle
          de plain-pied de 91,41 m² habitables, avec garage accolé et
          terrasse. Implantée sur une parcelle de 442 m² (lot n°1 du
          lotissement), la maison a été pensée pour optimiser l&apos;emprise
          au sol tout en préservant un espace vert généreux. LPM est intervenu
          de la conception à la réception des travaux, un accompagnement
          caractéristique des projets de construction de maison individuelle
          que LPM mène à Grenade-sur-Garonne et dans les communes voisines de
          Haute-Garonne.
        </p>
      </section>

      {/* ── Room list ───────────────────────────────────────────────────── */}
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

      {/* ── Vue Ouest ────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[50dvh] md:h-[65dvh] overflow-hidden" ref={imgWest}>
        <Image
          src="/projets/grenade/vueouest.png"
          alt="Villa Grenade — Vue Ouest"
          fill
          sizes="100vw"
          className="object-cover" style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute bottom-8 right-8 md:right-16">
          <p className="text-[#F5F0E8]/40 text-[9px] tracking-[0.4em] uppercase font-light">
            Vue Ouest
          </p>
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
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between
                         py-4 gap-1 sm:gap-8"
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

      {/* ── Footer CTA ──────────────────────────────────────────────────── */}
      <div
        className="border-t border-[#1c1c1c] py-12 flex flex-col sm:flex-row items-center
                   justify-between gap-6 px-6 md:px-16 max-w-5xl mx-auto"
      >
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
      </div>
    </main>
  );
}
