"use client";

/**
 * Preloader Prestige
 *
 * Timeline GSAP (~1,4s au total — raccourcie suite à l'audit perf mobile,
 * le Preloader étant l'élément de LCP dominant) :
 *   1. Logo blanc apparaît (fade-in + légère montée)
 *   2. Halo doré pulse autour du logo
 *   3. Halo + logo disparaissent
 *   4. Écran noir entier remonte vers le haut (slide-up, expo.inOut)
 *   5. onComplete() → site révélé
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoWrapRef  = useRef<HTMLDivElement>(null);
  const glowRef      = useRef<HTMLDivElement>(null);
  const lineRef      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { overwrite: "auto" } });

    // ── État initial ──────────────────────────────────────────────────────
    gsap.set(logoWrapRef.current, { opacity: 0, y: 12 });
    gsap.set(glowRef.current,     { opacity: 0, scale: 0.85 });
    gsap.set(lineRef.current,     { scaleX: 0, opacity: 0 });

    // ── 1. Logo entre ─────────────────────────────────────────────────────
    tl.to(logoWrapRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      ease: "power3.out",
      delay: 0.08,
    });

    // ── 2. Ligne or se déploie ────────────────────────────────────────────
    tl.to(lineRef.current, {
      scaleX: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    }, "-=0.15");

    // ── 3. Halo doré pulse ────────────────────────────────────────────────
    tl.to(glowRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    }, "-=0.2");

    // ── 4. Halo décroît ───────────────────────────────────────────────────
    tl.to(glowRef.current, {
      opacity: 0,
      scale: 1.15,
      duration: 0.25,
      ease: "power2.in",
    });

    // ── 5. Logo + ligne s'effacent ────────────────────────────────────────
    tl.to([logoWrapRef.current, lineRef.current], {
      opacity: 0,
      y: -8,
      duration: 0.18,
      ease: "power2.in",
    }, "-=0.12");

    // ── 6. Écran noir remonte — révèle le site ───────────────────────────
    tl.to(containerRef.current, {
      y: "-100%",
      duration: 0.45,
      ease: "expo.inOut",
    }, "+=0.02");

    // ── 7. Signal parent ──────────────────────────────────────────────────
    tl.call(onComplete);

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9995] bg-[#000000] flex flex-col items-center justify-center"
      aria-hidden="true"
    >
      {/* Halo doré derrière le logo */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          width: "clamp(320px, 50vw, 700px)",
          height: "clamp(160px, 25vw, 350px)",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.55) 0%, rgba(212,175,55,0.18) 45%, transparent 72%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Logo LPM blanc */}
      <div ref={logoWrapRef} className="relative z-10 flex flex-col items-center gap-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/lpm-logo.png"
          alt=""
          draggable={false}
          style={{
            width: "clamp(160px, 26vw, 340px)",
            height: "auto",
            filter: "brightness(0) invert(1)",
            userSelect: "none",
            display: "block",
          }}
        />

        {/* Ligne or sous le logo */}
        <div
          ref={lineRef}
          style={{
            marginTop: "clamp(20px, 2.5vw, 32px)",
            height: "1px",
            width: "clamp(60px, 8vw, 100px)",
            background:
              "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            transformOrigin: "center",
          }}
        />
      </div>

      {/* Label discret bas-gauche */}
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
        <span className="font-light text-[#F5F0E8]/20 text-[8px] tracking-[0.55em] uppercase">
          Maître d&apos;Œuvre · Haut de Gamme
        </span>
      </div>
    </div>
  );
}
