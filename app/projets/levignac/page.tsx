"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ProjectGallery from "@/components/ProjectGallery";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─── Data ────────────────────────────────────────────────────────────────────

const rooms = [
  { label: "Séjour / Cuisine", area: "71.49 m²" },
  { label: "Chambre 1",        area: "11.85 m²" },
  { label: "Chambre 2",        area: "11.07 m²" },
  { label: "Chambre 3",        area: "11.05 m²" },
  { label: "Chambre 4",        area: "11.20 m²" },
  { label: "Salle de bain",    area: "7.00 m²"  },
  { label: "Douche",           area: "4.57 m²"  },
  { label: "Dressing",         area: "6.51 m²"  },
  { label: "Dégagement",       area: "4.16 m²"  },
  { label: "WC",               area: "2.07 m²"  },
];

const annexes = [
  { label: "Garage",                          area: "21.74 m²"  },
  { label: "Terrasse plain-pied",             area: "46.00 m²"  },
  { label: "Aire porte d'entrée",             area: "2.20 m²"   },
  { label: "Chemin d'accès + stationnement",  area: "280.00 m²" },
];

const surfaces = [
  { label: "Surface habitable",   value: "140.97 m²"      },
  { label: "Surface de plancher", value: "144.42 m²"      },
  { label: "Emprise au sol",      value: "189.9 m²"       },
  { label: "Espace vert",         value: "1 332 m² (72 %)" },
];

const parcelles = [
  { ref: "C n°1394", area: "1 681 m²" },
  { ref: "C n°1427", area: "112 m²"   },
  { ref: "C n°1430", area: "55 m²"    },
];

const exteriorSpecs = [
  { label: "Enduit façade",    value: "Gratté blanc naturel" },
  { label: "Menuiseries",      value: "Aluminium — RAL 7016 Gris Anthracite" },
  { label: "Volets roulants",  value: "Intégrés — RAL 7016 (toutes ouvertures)" },
  { label: "Tuiles",           value: "Terre cuite DC12" },
  { label: "Pente toiture",    value: "16,7° — 30 %" },
  { label: "Stationnement",    value: "2 places extérieures + 1 garage (gravier)" },
  { label: "Accès parcelle",   value: "Chemin d'Encavit — pente modérée orientée nord-est" },
  { label: "Puisard",          value: "3 m³ — angle nord-ouest" },
  { label: "Arbres",           value: "Conservés côté nord et est — aucun abattu, aucun planté" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function LevignacPage() {
  const imgSouth = useRef<HTMLDivElement>(null);
  const imgNorth = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      [imgSouth, imgNorth].forEach((ref) => {
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

      {/* ── Hero — Vue Sud ───────────────────────────────────────────────── */}
      <section className="relative w-full h-[55dvh] md:h-[75dvh] overflow-hidden" ref={imgSouth}>
        <Image
          src="/projets/levignac/vuesud.png"
          alt="Villa Lévignac — Vue Sud"
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
            Lévignac
          </h1>
          <p className="text-[#8A8A8A] text-sm font-light mt-2 tracking-wide">
            Haute-Garonne — Zone UD
          </p>
        </div>
      </section>

      {/* ── Galerie 3D ──────────────────────────────────────────────────── */}
      <ProjectGallery project="levignac" compact />

      {/* ── Key figures ─────────────────────────────────────────────────── */}
      <div ref={statsRef} className="border-y border-[#1c1c1c] py-10 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1c1c1c]">
          {surfaces.map(({ label, value }) => (
            <div key={label} className="stat-item bg-[#000] px-6 py-7 flex flex-col gap-1">
              <span
                className="text-[#D4AF37] font-bold leading-none"
                style={{ fontSize: "clamp(1.3rem, 2.8vw, 2.2rem)", fontFamily: "var(--font-playfair)" }}
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
          <p className="text-[#F5F0E8]/80 text-sm font-light leading-[1.9] mb-6">
            Le terrain est situé en Haute-Garonne sur la commune de{" "}
            <strong className="text-[#F5F0E8] font-medium">Lévignac</strong>, zone UD. Il regroupe
            trois parcelles cadastrales (section C) pour une surface totale de{" "}
            <strong className="text-[#F5F0E8] font-medium">1 848 m²</strong>. Les réseaux sont
            disponibles dans le coin nord-ouest de la parcelle n°1394.
          </p>

          {/* Parcelles detail */}
          <div className="divide-y divide-[#1c1c1c]">
            {parcelles.map(({ ref, area }) => (
              <div key={ref} className="flex justify-between items-baseline py-3">
                <span className="text-[#8A8A8A] text-[10px] tracking-[0.25em] uppercase font-light">
                  Parcelle {ref}
                </span>
                <span className="text-[#D4AF37] text-sm font-medium tabular-nums">{area}</span>
              </div>
            ))}
            <div className="flex justify-between items-baseline py-3">
              <span className="text-[#F5F0E8]/60 text-[10px] tracking-[0.25em] uppercase font-light">
                Total
              </span>
              <span className="text-[#F5F0E8] text-sm font-semibold tabular-nums">1 848 m²</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-5 font-light">
            Programme
          </h2>
          <ul className="text-[#F5F0E8]/80 text-sm font-light leading-[1.9] space-y-1">
            <li><span className="text-[#8A8A8A]">Maison</span> — plain-pied, construction neuve</li>
            <li><span className="text-[#8A8A8A]">Surface habitable</span> — 140,97 m²</li>
            <li><span className="text-[#8A8A8A]">Garage</span> — 21,74 m²</li>
            <li><span className="text-[#8A8A8A]">Terrasse plain-pied</span> — 46 m²</li>
            <li><span className="text-[#8A8A8A]">Espace vert</span> — 1 332 m² (72 % de la parcelle)</li>
            <li><span className="text-[#8A8A8A]">Arbres</span> — conservés côté nord et est, aucun abattu</li>
          </ul>
        </div>
      </section>

      {/* ── Room list ───────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pb-20">
        <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-8 font-light">
          Pièces habitables — RDC
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-[#1c1c1c]">
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
            <div key={label} className="bg-[#000] px-5 py-4 flex justify-between items-baseline gap-4">
              <span className="text-[#F5F0E8]/70 text-xs font-light tracking-wide">{label}</span>
              <span className="text-[#D4AF37] text-sm font-medium tabular-nums shrink-0">{area}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Vue Nord ────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[50dvh] md:h-[65dvh] overflow-hidden" ref={imgNorth}>
        <Image
          src="/projets/levignac/vuenord.png"
          alt="Villa Lévignac — Vue Nord"
          fill
          sizes="100vw"
          className="object-cover" style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute bottom-8 right-8 md:right-16">
          <p className="text-[#F5F0E8]/40 text-[9px] tracking-[0.4em] uppercase font-light">
            Vue Nord
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

      {/* ── Réseaux ─────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pb-24">
        <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-5 font-light">
          Réseaux
        </h2>
        <p className="text-[#F5F0E8]/80 text-sm font-light leading-[1.9] max-w-2xl">
          Tous les réseaux (eau, électricité, télécommunications, assainissement et eaux pluviales)
          seront enfouis en tranchée sous le terrain vers les réseaux publics. Un{" "}
          <strong className="text-[#F5F0E8] font-medium">puisard de 3 m³</strong> sera créé dans
          l'angle nord-ouest du terrain pour la récupération des eaux pluviales.
        </p>
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
