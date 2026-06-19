"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);
  const mouseX = useRef(-200);
  const mouseY = useRef(-200);
  const ringX = useRef(-200);
  const ringY = useRef(-200);

  useEffect(() => {
    // Ne rien afficher sur les appareils tactiles
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const onMouseEnter = () => {
      isHoveringRef.current = true;
    };
    const onMouseLeave = () => {
      isHoveringRef.current = false;
    };

    const loop = () => {
      ringX.current = lerp(ringX.current, mouseX.current, 0.1);
      ringY.current = lerp(ringY.current, mouseY.current, 0.1);

      const ring = ringRef.current;
      if (ring) {
        const size = isHoveringRef.current ? 64 : 40;
        ring.style.width = size + "px";
        ring.style.height = size + "px";
        ring.style.transform = `translate(${ringX.current - size / 2}px, ${ringY.current - size / 2}px)`;
        ring.style.borderColor = isHoveringRef.current
          ? "rgba(201,168,76,0.9)"
          : "rgba(201,168,76,0.5)";
      }

      rafId = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(loop);

    const addListeners = () => {
      const els = document.querySelectorAll(
        "a, button, [data-cursor-hover], input, textarea, select"
      );
      els.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C9A84C] z-[9999] pointer-events-none mix-blend-difference hidden [@media(pointer:fine)]:block"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border z-[9998] pointer-events-none transition-[width,height,border-color] duration-300 hidden [@media(pointer:fine)]:block"
        style={{ willChange: "transform", width: 40, height: 40 }}
      />
    </>
  );
}
