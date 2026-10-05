"use client";

/**
 * VideoHero — fond vidéo B-Roll plein écran
 *
 * <video> : autoPlay · muted · loop · playsInline (requis iOS Safari)
 * Overlay : voile noir 30 % pour lisibilité du texte
 *
 * Perf mobile : la vidéo (≈1,2 Mo en .mp4 compressé) n'est chargée qu'à
 * partir de 768px. Sur mobile, seule l'image statique (poster) est servie —
 * elle supprime l'essentiel du poids de la page d'accueil et du TBT relevés
 * par l'audit Lighthouse mobile.
 */

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function InteractiveHero({ isReady }: { isReady: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setShowVideo(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setShowVideo(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Force play au cas où l'autoplay navigateur aurait été mis en attente
  useEffect(() => {
    if (!showVideo) return;
    const vid = videoRef.current;
    if (!vid) return;
    const tryPlay = () => vid.play().catch(() => { /* autoplay bloqué */ });
    if (isReady) {
      tryPlay();
    } else {
      // Précharge silencieusement avant que le preloader se termine
      vid.load();
    }
  }, [isReady, showVideo]);

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">

      {/* ── Image statique — base, visible tant que la vidéo n'est pas prête (et seule sur mobile) ── */}
      <Image
        src="/hero-bg-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ── Vidéo B-Roll plein écran — desktop uniquement (≥768px) ─────── */}
      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-bg-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* ── Voile noir 30 % — lisibilité du texte ───────────────────── */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.35)" }}
      />

      {/* ── Vignette périphérique subtile (bords plus sombres) ──────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 80% at 50% 50%, transparent 45%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
