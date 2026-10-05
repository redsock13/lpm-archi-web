"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectGallery from "@/components/ProjectGallery";

// ─── Data ────────────────────────────────────────────────────────────────────

const rooms = [
  { label: "Séjour / Cuisine",  area: "54.93 m²" },
  { label: "Chambre 1",         area: "9.27 m²"  },
  { label: "Chambre 2",         area: "9.83 m²"  },
  { label: "Chambre 3",         area: "12.41 m²" },
  { label: "Chambre 4",         area: "12.35 m²" },
  { label: "Salle de bain 1",   area: "7.55 m²"  },
  { label: "Salle de bain 2",   area: "7.00 m²"  },
  { label: "Douche",            area: "4.53 m²"  },
  { label: "Couloir",           area: "6.20 m²"  },
  { label: "Dressing",          area: "6.82 m²"  },
  { label: "WC",                area: "2.11 m²"  },
];

const annexes = [
  { label: "Garage",                            area: "36.14 m²" },
  { label: "Terrasse plain-pied",               area: "40.00 m²" },
  { label: "Aire porte d'entrée",               area: "2.00 m²"  },
  { label: "Chemin d'accès + stationnement",    area: "177.00 m²"},
];

const surfaces = [
  { label: "Surface habitable",          value: "132.13 m²" },
  { label: "Surface de plancher",        value: "135.57 m²" },
  { label: "Emprise au sol",             value: "198.00 m²" },
  { label: "Espace vert",                value: "1 083 m² (72 %)" },
];

const exteriorSpecs = [
  { label: "Enduit façade",        value: "G00 Couleur Naturel" },
  { label: "Menuiseries",          value: "PVC / Alu — RAL 7016 Gris Anthracite" },
  { label: "Volets roulants",      value: "Intégrés — RAL 7016 (toutes ouvertures)" },
  { label: "Volets bois",          value: "Fenêtres 120 × 120 (hors cuisine)" },
  { label: "Zingueries",           value: "Demi-rond Alu — RAL 7016 Gris Anthracite" },
  { label: "Chevrons",             value: "Apparents" },
  { label: "Tuiles",               value: "Terre cuite DC12 — Aspect vieilli, dominante rouge panaché" },
  { label: "Pente toiture",        value: "16,7° — 30 %" },
  { label: "Accès parcelle",       value: "RD D55BIS — Chemin gravier" },
  { label: "Puisard",              value: "3 m³ — angle sud-ouest" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function BouillacPage() {
  const imgEast  = useRef<HTMLDivElement>(null);
  const imgWest  = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Scale reveal on images
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
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
            },
          }
        );
      });

      // Stats stagger
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
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 82%",
            },
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
          src="/projets/bouillac/vueest.png"
          alt="Villa Bouillac — Vue Est"
          fill
          priority
          sizes="100vw"
          className="object-cover" style={{ objectPosition: "center 30%" }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

        {/* Heading overlay */}
        <div className="absolute bottom-10 left-6 md:left-16 z-10">
          <p className="text-[#D4AF37] text-[9px] tracking-[0.45em] uppercase mb-3 font-light">
            Maison individuelle · LPM Architecture
          </p>
          <h1
            className="font-bold leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(3rem, 9vw, 7rem)",
            }}
          >
            <span className="sr-only">Construction Maison Individuelle à </span>
            Bouillac
            <span className="sr-only">, Tarn-et-Garonne</span>
          </h1>
          <p className="text-[#8A8A8A] text-sm font-light mt-2 tracking-wide">
            Tarn-et-Garonne — 82600
          </p>
        </div>
      </section>

      {/* ── Galerie 3D ──────────────────────────────────────────────────── */}
      <ProjectGallery project="bouillac" compact />

      {/* ── Key figures ─────────────────────────────────────────────────── */}
      <div ref={statsRef} className="border-y border-[#1c1c1c] py-10 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1c1c1c]">
          {surfaces.map(({ label, value }) => (
            <div key={label} className="stat-item bg-[#000] px-6 py-7 flex flex-col gap-1">
              <span
                className="text-[#D4AF37] font-bold leading-none"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontFamily: "var(--font-playfair)" }}
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

      {/* ── Situation & Projet ───────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-2 gap-16">
        <div>
          <h2
            className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-5 font-light"
          >
            Situation
          </h2>
          <p className="text-[#F5F0E8]/80 text-sm font-light leading-[1.9]">
            Le terrain est situé en Tarn-et-Garonne sur la commune de{" "}
            <strong className="text-[#F5F0E8] font-medium">Bouillac (82600)</strong>, zone OC,
            parcelle n° 1032 — superficie de{" "}
            <strong className="text-[#F5F0E8] font-medium">1 500 m²</strong>. Tous les réseaux
            (eau potable, électricité, télécommunications, assainissement, eaux pluviales) sont
            disponibles en limite de terrain.
          </p>
        </div>

        <div>
          <h2
            className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-5 font-light"
          >
            Programme
          </h2>
          <ul className="text-[#F5F0E8]/80 text-sm font-light leading-[1.9] space-y-1">
            <li>
              <span className="text-[#8A8A8A]">Démolition</span> — bâti existant d'environ 20 m²
            </li>
            <li>
              <span className="text-[#8A8A8A]">Construction</span> — maison individuelle de plain-pied
            </li>
            <li>
              <span className="text-[#8A8A8A]">Surface habitable</span> — 132,13 m²
            </li>
            <li>
              <span className="text-[#8A8A8A]">Garage attenant</span> — 36,14 m²
            </li>
            <li>
              <span className="text-[#8A8A8A]">Terrasse</span> — 40,40 m² plain-pied
            </li>
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
          <span className="italic font-normal text-[#D4AF37]">Bouillac</span>
        </h2>
        <p className="text-[#F5F0E8]/70 text-sm font-light leading-[1.9] max-w-3xl">
          À Bouillac, en Tarn-et-Garonne, ce projet de construction de maison
          individuelle a démarré par la démolition d&apos;un bâti existant
          d&apos;environ 20 m², avant la construction d&apos;une maison de
          plain-pied de 132,13 m² habitables sur une parcelle de 1 500 m².
          LPM a assuré la maîtrise d&apos;œuvre complète : conception,
          démolition, permis de construire et pilotage de chantier, jusqu&apos;à
          la livraison d&apos;une maison associant garage attenant (36,14 m²)
          et terrasse de plain-pied (40,40 m²). Un exemple représentatif des
          constructions neuves que LPM pilote en Tarn-et-Garonne comme en
          Haute-Garonne.
        </p>
      </section>

      {/* ── Room list ───────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pb-20">
        <h2
          className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-8 font-light"
        >
          Pièces habitables — RDC
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#1c1c1c]">
          {rooms.map(({ label, area }) => (
            <div key={label} className="bg-[#000] px-5 py-4 flex justify-between items-baseline">
              <span className="text-[#F5F0E8]/70 text-xs font-light tracking-wide">{label}</span>
              <span className="text-[#D4AF37] text-sm font-medium tabular-nums">{area}</span>
            </div>
          ))}
        </div>

        <h2
          className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-8 font-light mt-14"
        >
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
          src="/projets/bouillac/vueouest.png"
          alt="Villa Bouillac — Vue Ouest"
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

      {/* ── Accès & Réseaux ─────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pb-24 grid md:grid-cols-2 gap-16">
        <div>
          <h2
            className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-5 font-light"
          >
            Accès
          </h2>
          <p className="text-[#F5F0E8]/80 text-sm font-light leading-[1.9]">
            Le terrain est accessible depuis la route départementale{" "}
            <strong className="text-[#F5F0E8] font-medium">D55BIS</strong>. Le chemin d'accès et
            l'aire de stationnement (177 m²) seront réalisés en{" "}
            <strong className="text-[#F5F0E8] font-medium">gravier</strong>. Une place de
            stationnement supplémentaire est prévue devant le garage.
          </p>
        </div>

        <div>
          <h2
            className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-5 font-light"
          >
            Réseaux & Végétation
          </h2>
          <p className="text-[#F5F0E8]/80 text-sm font-light leading-[1.9]">
            Tous les réseaux (eau, électricité, télécommunications, assainissement, eaux pluviales)
            seront enfouis en tranchée. Un{" "}
            <strong className="text-[#F5F0E8] font-medium">puisard de 3 m³</strong> sera créé
            dans l'angle sud-ouest. L'espace vert restant représente environ{" "}
            <strong className="text-[#F5F0E8] font-medium">1 083 m² (72 %)</strong> de la
            parcelle — les arbres existants sont conservés.
          </p>
        </div>
      </section>

      {/* ── Footer CTA ──────────────────────────────────────────────────── */}
      <div className="border-t border-[#1c1c1c] py-12 flex flex-col sm:flex-row items-center justify-between
                      gap-6 px-6 md:px-16 max-w-5xl mx-auto">
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
