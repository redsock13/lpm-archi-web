"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectGallery from "@/components/ProjectGallery";

// ─── Component ───────────────────────────────────────────────────────────────

export default function AgenPage() {
  const imgHero  = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero image reveal
      if (imgHero.current) {
        gsap.fromTo(
          imgHero.current.querySelector("img"),
          { scale: 1.08, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 1.4, ease: "power3.out",
            scrollTrigger: { trigger: imgHero.current, start: "top 85%" },
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
            <path d="M20 4H2M5 1L2 4l3 3" stroke="currentColor" strokeWidth="1"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="hidden sm:inline">Retour aux projets</span>
        </Link>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[55dvh] md:h-[75dvh] overflow-hidden" ref={imgHero}>
        <Image
          src="/projets/agen/couverture.jpg"
          alt="Villa Agen — LPM Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
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
            Agen
          </h1>
          <p className="text-[#8A8A8A] text-sm font-light mt-2 tracking-wide">
            Lot-et-Garonne — 47000
          </p>
        </div>
      </section>

      {/* ── Galerie 3D ──────────────────────────────────────────────────── */}
      <ProjectGallery project="agen" compact />

      {/* ── Fiche projet ────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-5 font-light">
            Situation
          </h2>
          <p className="text-[#F5F0E8]/80 text-sm font-light leading-[1.9]">
            Projet de construction de maison individuelle sur la commune d&apos;
            <strong className="text-[#F5F0E8] font-medium">Agen (47000)</strong>,
            Lot-et-Garonne. Maîtrise d&apos;œuvre complète assurée par LPM
            de la conception au suivi de chantier.
          </p>
        </div>

        <div>
          <h2 className="text-[#D4AF37] text-[10px] tracking-[0.45em] uppercase mb-5 font-light">
            Mission
          </h2>
          <ul className="text-[#F5F0E8]/80 text-sm font-light leading-[1.9] space-y-1">
            <li><span className="text-[#8A8A8A]">Conception</span> — Plans architecturaux sur-mesure</li>
            <li><span className="text-[#8A8A8A]">Dépôt de permis</span> — Permis de construire</li>
            <li><span className="text-[#8A8A8A]">Coordination</span> — Suivi et pilotage des entreprises</li>
            <li><span className="text-[#8A8A8A]">Réception</span> — Levée des réserves</li>
          </ul>
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
            <path d="M20 4H2M5 1L2 4l3 3" stroke="currentColor" strokeWidth="1"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Tous les projets
        </Link>

        <Link
          href="/#contact"
          className="group flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase
                     text-[#D4AF37] border border-[#D4AF37]/30 px-6 py-3
                     hover:bg-[#D4AF37]/10 transition-colors duration-300"
        >
          Démarrer votre projet
        </Link>
      </div>

    </main>
  );
}
