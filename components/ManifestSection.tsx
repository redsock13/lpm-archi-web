"use client";

/**
 * ManifestSection — Médaillon centré, design minimaliste luxueux
 *
 * Structure : fond noir pur, médaillon circulaire Loïc Petit avec aura or
 * pulsante (GSAP), staggered fade-in au scroll pour chaque élément.
 */

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SERIF = 'var(--font-sora), system-ui, sans-serif';

export default function ManifestSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const medallionRef = useRef<HTMLDivElement>(null);
  const auraRef      = useRef<HTMLDivElement>(null);
  const revealRefs   = useRef<(HTMLElement | null)[]>([]);

  const addReveal = (i: number) => (el: HTMLElement | null) => {
    revealRefs.current[i] = el;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // ── Aura pulsante (loop infini, démarre au scroll) ──────────────────
      const auraTween = gsap.fromTo(
        auraRef.current,
        { boxShadow: "0 0 20px 4px rgba(212,175,55,0.18)" },
        {
          boxShadow: "0 0 55px 18px rgba(212,175,55,0.42)",
          duration: 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          paused: true,
        }
      );

      // ── Médaillon + stagger éléments ─────────────────────────────────────
      const triggerEl = sectionRef.current;

      // Médaillon en premier
      gsap.fromTo(
        medallionRef.current,
        { opacity: 0, scale: 0.88, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 78%",
            onEnter: () => auraTween.play(),
          },
        }
      );

      // Éléments texte en cascade
      revealRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power3.out",
            delay: 0.15 + i * 0.13,
            scrollTrigger: {
              trigger: triggerEl,
              start: "top 78%",
            },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="manifeste"
      className="relative bg-[#000000] overflow-hidden"
      style={{ paddingTop: "150px", paddingBottom: "150px" }}
    >
      {/* Grain subtil doré en fond */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* ── Médaillon ───────────────────────────────────────────────────── */}
        <div ref={medallionRef} style={{ opacity: 0 }}>
          {/* Aura pulsante — halo doré derrière le cadre */}
          <div
            ref={auraRef}
            style={{
              borderRadius: "10px",
              boxShadow: "0 0 20px 4px rgba(212,175,55,0.18)",
            }}
          >
            {/* Cadre image rectangulaire arrondi */}
            <div
              style={{
                width: "min(clamp(300px, 68vw, 840px), 90vw)",
                aspectRatio: "1536 / 973",
                borderRadius: "10px",
                overflow: "hidden",
                border: "1.5px solid #D4AF37",
                position: "relative",
              }}
            >
              <Image
                src="/loicpetit2.jpg"
                alt="Loïc Petit, Maître d'Œuvre LPM"
                fill
                sizes="840px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>

        {/* H2 SEO — Accompagnement maître d'œuvre */}
        <h2 className="sr-only">
          Accompagnement et étude de projet RE2020 — Loïc Petit, maître d&apos;œuvre Haute-Garonne
        </h2>

        {/* ── Sous-titre ──────────────────────────────────────────────────── */}
        <p
          ref={addReveal(1)}
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(0.52rem, 1vw, 0.66rem)",
            fontWeight: 300,
            letterSpacing: "0.42em",
            color: "#D4AF37",
            textTransform: "uppercase",
            marginTop: "0.9rem",
            opacity: 0,
          }}
        >
          Votre Maître d&apos;Œuvre · Votre Partenaire de Confiance
        </p>

        {/* ── Ligne or ────────────────────────────────────────────────────── */}
        <div
          ref={addReveal(2)}
          style={{
            marginTop: "3rem",
            width: "52px",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            opacity: 0,
          }}
        />

        {/* ── Manifeste ───────────────────────────────────────────────────── */}
        <p
          ref={addReveal(3)}
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)",
            fontWeight: 300,
            lineHeight: 2.0,
            color: "rgba(245,240,232,0.58)",
            maxWidth: "52ch",
            marginTop: "2.4rem",
            opacity: 0,
          }}
        >
          Derrière chaque plan, chaque mur, chaque finition, il y a une vision.
          La nôtre est de bâtir des espaces qui vous ressemblent, avec
          l&apos;exigence absolue du détail et la rigueur d&apos;un artisan
          d&apos;art.
        </p>

        {/* ── Signature ───────────────────────────────────────────────────── */}
        <div
          ref={addReveal(4)}
          style={{
            marginTop: "3.2rem",
            opacity: 0,
          }}
        >
          <span
            style={{
              fontFamily:
                'var(--font-dancing), "Dancing Script", "Brush Script MT", cursive',
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              color: "#D4AF37",
              letterSpacing: "0.02em",
              display: "block",
              lineHeight: 1.1,
            }}
          >
            Loïc Petit
          </span>
          <span
            style={{
              display: "block",
              marginTop: "0.6rem",
              color: "rgba(245,240,232,0.22)",
              fontSize: "0.55rem",
              letterSpacing: "0.50em",
              textTransform: "uppercase",
              fontWeight: 300,
            }}
          >
            Fondateur &amp; Maître d&apos;Œuvre
          </span>
        </div>

      </div>
    </section>
  );
}
