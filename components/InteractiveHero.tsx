"use client";

/**
 * VideoHero — fond vidéo B-Roll plein écran
 *
 * <video> : autoPlay · muted · loop · playsInline (requis iOS Safari)
 * Overlay : voile noir 30 % pour lisibilité du texte
 *
 * Note format : .mov (QuickTime H.264) → natif Safari + Chrome/macOS.
 * Pour un déploiement multi-navigateurs, convertir en .mp4 (H.264) et
 * ajouter <source src="/hero-bg.mp4" type="video/mp4" /> en premier.
 */

import { useRef, useEffect } from "react";

export default function InteractiveHero({ isReady }: { isReady: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Force play au cas où l'autoplay navigateur aurait été mis en attente
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const tryPlay = () => vid.play().catch(() => { /* autoplay bloqué */ });
    if (isReady) {
      tryPlay();
    } else {
      // Précharge silencieusement avant que le preloader se termine
      vid.load();
    }
  }, [isReady]);

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">

      {/* ── Vidéo B-Roll plein écran ─────────────────────────────────── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* Pour compatibilité totale en production, ajouter un .mp4 en premier */}
        <source src="/hero-bg.mov" type="video/quicktime" />
        <source src="/hero-bg.mov" type="video/mp4" />
      </video>

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
