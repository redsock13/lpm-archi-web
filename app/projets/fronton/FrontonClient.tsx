"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ProjectGallery from "@/components/ProjectGallery";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─── Data ────────────────────────────────────────────────────────────────────

const roomsRDC = [
  { label: "Séjour / Cuisine", area: "43.64 m²" },
  { label: "Chambre 1",        area: "11.36 m²" },
  { label: "Bureau",           area: "8.09 m²"  },
  { label: "Douche",           area: "1.56 m²"  },
  { label: "Dressing",         area: "7.61 m²"  },
  { label: "Salle d'eau",      area: "3.90 m²"  },
  { label: "Entrée",           area: "8.56 m²"  },
  { label: "WC",               area: "1.83 m²"  },
];

const roomsEtage = [
  { label: "Chambre 2",        area: "12.23 m²" },
  { label: "Chambre 3",        area: "12.96 m²" },
  { label: "Salle de bain",    area: "7.21 m²"  },
  { label: "Couloir",          area: "4.29 m²"  },
  { label: "WC",               area: "1.72 m²"  },
];

const annexes = [
  { label: "Garage",                          area: "44.89 m²"  },
  { label: "Terrasse plain-pied",             area: "42.00 m²"  },
  { label: "Chemin d'accès + stationnement",  area: "125.70 m²" },
];

const surfaces = [
  { label: "Surface habitable",   value: "130.58 m²"      },
  { label: "Surface de plancher", value: "133.87 m²"      },
  { label: "Emprise au sol",      value: "182.13 m² (25 %)" },
  { label: "Espace vert",         value: "413 m² (57 %)"  },
];

const exteriorSpecs = [
  { label: "Enduit façade",    value: "Gratté blanc naturel" },
  { label: "Menuiseries",      value: "Aluminium — RAL 7016 Gris Anthracite" },
  { label: "Volets roulants",  value: "Intégrés — RAL 7016 (toutes ouvertures)" },
  { label: "Tuiles",           value: "Terre cuite DC12" },
  { label: "Pente toiture",    value: "16,7° — 30 %" },
  { label: "Stationnement",    value: "3 places — 1 garage + 2 extérieures (gravier)" },
  { label: "Accès parcelle",   value: "Chemin du Moulin — côté nord-est (gravier)" },
  { label: "Puisard",          value: "3 m³ — angle nord-est (récupération eaux toiture)" },
  { label: "Assainissement",   value: "Microstation 4 000 L — 6 EH — partie sud-ouest" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function FrontonPage() {
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
          src="/projets/fronton/vueest.png"
          alt="Villa Fronton — Vue Est"
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
            Fronton
            <span className="sr-only">, Haute-Garonne</span>
          </h1>
          <p className="text-[#8A8A8A] text-sm font-light mt-2 tracking-wide">
            Haute-Garonne — 31620
          </p>
        </div>
      </section>

      {/* ── Galerie 3D ──────────────────────────────────────────────────── */}
      <ProjectGallery project="fronton" compact />

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
            Le terrain, d'une superficie de{" "}
            <strong className="text-[#F5F0E8] font-medium">723 m²</strong>, est situé{" "}
            <strong className="text-[#F5F0E8] font-medium">chemin du Moulin, 31620 Fronton</strong>.
            Le terrain est viabilisé — réseaux d'eau potable, d'électricité et de
            télécommunications disponibles, ainsi que les eaux pluviales. Les eaux usées seront
            traitées par une{" "}
            <strong className="text-[#F5F0E8] font-medium">microstation</strong> installée dans la
            partie sud-ouest.
          </p>
        </div>

        <div>
          <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-5 font-light">
            Programme
          </h2>
          <ul className="text-[#F5F0E8]/80 text-sm font-light leading-[1.9] space-y-1">
            <li><span className="text-[#8A8A8A]">Maison</span> — R+1, construction neuve</li>
            <li><span className="text-[#8A8A8A]">Surface habitable</span> — 130,58 m²</li>
            <li><span className="text-[#8A8A8A]">Garage</span> — 44,89 m²</li>
            <li><span className="text-[#8A8A8A]">Terrasse plain-pied</span> — 42 m²</li>
            <li><span className="text-[#8A8A8A]">Emprise au sol</span> — 25 % de la parcelle</li>
            <li><span className="text-[#8A8A8A]">Arbres</span> — 3 nouveaux plantés, aucun abattu</li>
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
          <span className="italic font-normal text-[#D4AF37]">Fronton</span>
        </h2>
        <p className="text-[#F5F0E8]/70 text-sm font-light leading-[1.9] max-w-3xl">
          Sur la commune de Fronton (31620), chemin du Moulin, LPM a piloté la
          construction de cette maison individuelle à étage (R+1) de 130,58 m²
          habitables, sur un terrain viabilisé de 723 m². Le programme intègre
          un garage de 44,89 m², une terrasse de plain-pied de 42 m² et une
          microstation d&apos;épuration individuelle. De la conception des
          plans au dépôt du permis de construire, puis à la coordination des
          artisans jusqu&apos;à la réception des travaux, LPM a assuré la
          maîtrise d&apos;œuvre de bout en bout pour cette construction de
          maison individuelle en Haute-Garonne.
        </p>
      </section>

      {/* ── Room list ───────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pb-20">

        {/* RDC */}
        <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-8 font-light">
          Pièces habitables — Rez-de-chaussée
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#1c1c1c]">
          {roomsRDC.map(({ label, area }) => (
            <div key={label} className="bg-[#000] px-5 py-4 flex justify-between items-baseline">
              <span className="text-[#F5F0E8]/70 text-xs font-light tracking-wide">{label}</span>
              <span className="text-[#D4AF37] text-sm font-medium tabular-nums">{area}</span>
            </div>
          ))}
        </div>

        {/* Étage */}
        <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-8 font-light mt-12">
          Pièces habitables — Étage
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#1c1c1c]">
          {roomsEtage.map(({ label, area }) => (
            <div key={label} className="bg-[#000] px-5 py-4 flex justify-between items-baseline">
              <span className="text-[#F5F0E8]/70 text-xs font-light tracking-wide">{label}</span>
              <span className="text-[#D4AF37] text-sm font-medium tabular-nums">{area}</span>
            </div>
          ))}
        </div>

        {/* Autres constructions */}
        <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-8 font-light mt-12">
          Autres constructions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1c1c1c]">
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
          src="/projets/fronton/vueouest.png"
          alt="Villa Fronton — Vue Ouest"
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

      {/* ── Réseaux & Espace vert ────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pb-24 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-5 font-light">
            Réseaux
          </h2>
          <p className="text-[#F5F0E8]/80 text-sm font-light leading-[1.9]">
            Tous les réseaux (eau, électricité, télécommunications) seront enfouis en tranchée
            vers les réseaux publics situés{" "}
            <strong className="text-[#F5F0E8] font-medium">route des Minorquins</strong> (côté est).
            Un <strong className="text-[#F5F0E8] font-medium">puisard de 3 m³</strong> en angle
            nord-est recueillera les eaux pluviales des toitures à des fins de jardinage. Le
            traitement des eaux usées sera assuré par une{" "}
            <strong className="text-[#F5F0E8] font-medium">
              microstation 4 000 L — 6 équivalents habitants
            </strong>{" "}
            dans la partie sud-ouest.
          </p>
        </div>

        <div>
          <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-5 font-light">
            Espace vert
          </h2>
          <p className="text-[#F5F0E8]/80 text-sm font-light leading-[1.9]">
            L'espace vert restant représente{" "}
            <strong className="text-[#F5F0E8] font-medium">413 m² — 57 %</strong> de la parcelle.
            Aucun arbre ne sera abattu et{" "}
            <strong className="text-[#F5F0E8] font-medium">trois nouveaux arbres</strong> seront
            plantés.
          </p>
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
