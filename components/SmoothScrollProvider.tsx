"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider() {
  const pathname = usePathname();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.3,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // Sync Lenis scroll events to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis via GSAP's ticker so both run on the same RAF loop
    const lenisTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(lenisTick);
    gsap.ticker.lagSmoothing(0);

    // Pinned sections change the document height after a cross-page anchor loads.
    // Align again after their refresh, until the visitor starts navigating.
    let pendingAnchor = Boolean(window.location.hash);
    let anchorTimer: ReturnType<typeof setTimeout>;
    const alignAnchor = () => {
      if (!pendingAnchor) return;
      clearTimeout(anchorTimer);
      anchorTimer = setTimeout(() => {
        const target = document.getElementById(window.location.hash.slice(1));
        if (target) lenis.scrollTo(target, { immediate: true, offset: -90 });
      }, 150);
    };
    const stopAnchorAlignment = () => {
      pendingAnchor = false;
      clearTimeout(anchorTimer);
    };
    ScrollTrigger.addEventListener("refresh", alignAnchor);
    window.addEventListener("wheel", stopAnchorAlignment, { passive: true });
    window.addEventListener("touchstart", stopAnchorAlignment, { passive: true });
    window.addEventListener("pointerdown", stopAnchorAlignment);
    window.addEventListener("keydown", stopAnchorAlignment);
    alignAnchor();
    void document.fonts.ready.then(() => {
      if (pendingAnchor) ScrollTrigger.refresh();
    });

    return () => {
      stopAnchorAlignment();
      ScrollTrigger.removeEventListener("refresh", alignAnchor);
      window.removeEventListener("wheel", stopAnchorAlignment);
      window.removeEventListener("touchstart", stopAnchorAlignment);
      window.removeEventListener("pointerdown", stopAnchorAlignment);
      window.removeEventListener("keydown", stopAnchorAlignment);
      lenis.destroy();
      gsap.ticker.remove(lenisTick);
    };
  }, [pathname]);

  return null;
}
