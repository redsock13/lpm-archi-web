"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Global animated film-grain overlay.
 * Renders as a fixed, pointer-events-none layer above everything.
 * Grain shifts position every 3 GSAP ticks (~20fps) for a 35mm film feel.
 */
export default function GrainOverlay() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      frame++;
      if (frame % 3 === 0 && ref.current) {
        ref.current.style.backgroundPosition = `${Math.random() * 100}% ${Math.random() * 100}%`;
      }
    };
    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9990] mix-blend-overlay"
      style={{
        opacity: 0.055,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='512' height='512' filter='url(%23g)'/%3E%3C/svg%3E")`,
        backgroundSize: "220px 220px",
        backgroundRepeat: "repeat",
      }}
    />
  );
}
