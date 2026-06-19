"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";

interface Props {
  project: string;
  /** Place gallery right after hero: less top padding + earlier scroll trigger */
  compact?: boolean;
}

// ─── CoverFlow config ─────────────────────────────────────────────────────────

/** Cards visible on each side of center */
const SIDE_CARDS  = 3;
/** Drag px needed to trigger slide change */
const DRAG_THRESH = 40;

// Per-offset transforms
function getTransforms(offset: number, step: number) {
  const abs  = Math.abs(offset);
  const sign = offset < 0 ? -1 : 1;

  if (abs === 0) {
    return { x: 0, rotateY: 0, scale: 1.12, opacity: 1, blur: 0, zIndex: 100 };
  }
  // Spread factor: each successive card adds less x distance (convergence)
  const spreadFactor = abs === 1 ? 1 : abs === 2 ? 1.72 : 2.25;
  return {
    x:       sign * step * spreadFactor,
    rotateY: -sign * Math.min(abs * 40, 62),
    scale:   Math.max(0.62, 0.84 - (abs - 1) * 0.09),
    opacity: abs > SIDE_CARDS ? 0 : Math.max(0.18, 0.68 - (abs - 1) * 0.2),
    blur:    Math.min(abs * 2.8, 7),
    zIndex:  100 - abs * 12,
  };
}

// ─────────────────────────────────────────────────────────────────────────────

export default function ProjectGallery({ project, compact = false }: Props) {
  const [images, setImages]   = useState<string[]>([]);
  const [active, setActive]   = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const glowRef    = useRef<HTMLDivElement>(null);
  const stageRef   = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Keep mutable refs so callbacks don't go stale
  const activeRef = useRef(0);
  const imagesRef = useRef<string[]>([]);
  const glowPulse = useRef<gsap.core.Tween | null>(null);

  // Drag state
  const pointerStartX = useRef(0);
  const isDragging    = useRef(false);
  const didDrag       = useRef(false);

  // ── Sync refs ──────────────────────────────────────────────────────────────

  useEffect(() => { imagesRef.current = images; }, [images]);
  useEffect(() => { activeRef.current = active; }, [active]);

  // ── Fetch ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    fetch(`/api/gallery/${project}`)
      .then(r => r.json())
      .then(d => setImages(d.images ?? []));
  }, [project]);

  // ── Section reveal ─────────────────────────────────────────────────────────

  useEffect(() => {
    if (!sectionRef.current || images.length === 0) return;
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".g-reveal"),
        { y: compact ? 20 : 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.09, duration: 0.95, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: compact ? "top 98%" : "top 80%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, [images]);

  // ── Animate all cards to reflect new center ────────────────────────────────

  const animateCards = useCallback((center: number) => {
    const card0 = cardRefs.current.find(Boolean);
    if (!card0) return;

    // Step = 60% of card width — responsive by nature
    const step = card0.offsetWidth * 0.60;

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const { x, rotateY, scale, opacity, blur, zIndex } =
        getTransforms(i - center, step);

      gsap.to(el, {
        x, rotateY, scale, opacity,
        filter:   `blur(${blur}px)`,
        zIndex,
        duration: 0.60,
        ease:     "power3.out",
        overwrite: true,
      });
    });

    // Gold glow: kill previous, start new pulse behind center card
    if (glowPulse.current) { glowPulse.current.kill(); glowPulse.current = null; }
    if (glowRef.current) {
      gsap.killTweensOf(glowRef.current);
      gsap.to(glowRef.current, {
        opacity: 0.7, duration: 0.5, ease: "power2.out",
        onComplete: () => {
          glowPulse.current = gsap.to(glowRef.current!, {
            opacity: 0.35, duration: 2.0, yoyo: true, repeat: -1,
            ease: "sine.inOut",
          });
        },
      });
    }
  }, []);

  // Run whenever active changes (or images load for the first time)
  useEffect(() => {
    if (images.length > 0) animateCards(active);
  }, [active, images, animateCards]);

  // ── Navigation ─────────────────────────────────────────────────────────────

  const goTo = useCallback((idx: number) => {
    const next = Math.max(0, Math.min(imagesRef.current.length - 1, idx));
    activeRef.current = next;
    setActive(next);
  }, []);

  // ── Drag / Swipe ───────────────────────────────────────────────────────────

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current   = true;
    didDrag.current      = false;
    pointerStartX.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    if (Math.abs(e.clientX - pointerStartX.current) > 6) didDrag.current = true;
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const delta = e.clientX - pointerStartX.current;
    if (Math.abs(delta) >= DRAG_THRESH) {
      goTo(activeRef.current + (delta < 0 ? 1 : -1));
    }
  }, [goTo]);

  // ── Lightbox keyboard ──────────────────────────────────────────────────────

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")      setLightbox(null);
      if (e.key === "ArrowRight")  setLightbox(i => i === null ? null : (i + 1) % imagesRef.current.length);
      if (e.key === "ArrowLeft")   setLightbox(i => i === null ? null : (i - 1 + imagesRef.current.length) % imagesRef.current.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  // ── Guard ──────────────────────────────────────────────────────────────────

  if (images.length === 0) return null;

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          GALLERY SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        ref={sectionRef}
        className={compact ? "pt-0 pb-20 select-none" : "py-24 select-none"}
      >
        {/* Separator line (compact only) */}
        {compact && (
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent mb-12" />
        )}

        {/* Header */}
        <div className="px-6 md:px-16 max-w-5xl mx-auto mb-14">
          <p className="g-reveal text-[#D4AF37] text-[9px] tracking-[0.55em] uppercase font-light mb-3">
            {compact ? "Explorer le Projet" : "Galerie Photos"}
          </p>
          <h2
            className="g-reveal leading-tight"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: compact ? "clamp(1.5rem, 2.8vw, 2.2rem)" : "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: compact ? 300 : 700,
              fontStyle: compact ? "italic" : "normal",
              color: compact ? "rgba(245,240,232,0.7)" : "#F5F0E8",
            }}
          >
            {compact ? "L\u2019avancement en images" : (
              <>L&apos;Avancement{" "}
                <span className="italic font-normal text-[#D4AF37]">en Images</span>
              </>
            )}
          </h2>
          <div className="g-reveal mt-5 h-px w-12 bg-[#D4AF37]/35" />
        </div>

        {/* ── 3D Stage ────────────────────────────────────────────────────── */}
        <div
          className="g-reveal relative w-full"
          style={{ height: "clamp(240px, 46vw, 380px)" }}
        >
          {/* Perspective container */}
          <div
            ref={stageRef}
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            style={{ perspective: "1400px", perspectiveOrigin: "50% 50%" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {/* Gold glow — sits behind center card */}
            <div
              ref={glowRef}
              aria-hidden
              style={{
                position:   "absolute",
                width:      "clamp(220px, 52vw, 400px)",
                height:     "clamp(160px, 38vw, 300px)",
                borderRadius: "4px",
                background: "radial-gradient(ellipse at center, rgba(212,175,55,0.55) 0%, transparent 72%)",
                filter:     "blur(22px)",
                opacity:    0,
                zIndex:     99,
                pointerEvents: "none",
              }}
            />

            {/* Cards */}
            {images.map((src, i) => (
              <div
                key={src}
                ref={el => { cardRefs.current[i] = el; }}
                onClick={() => {
                  if (didDrag.current) return;
                  if (i !== activeRef.current) {
                    goTo(i);
                  } else {
                    setLightbox(i);
                  }
                }}
                style={{
                  position:  "absolute",
                  width:     "clamp(220px, 52vw, 380px)",
                  height:    "clamp(160px, 37vw, 280px)",
                  borderRadius: "2px",
                  overflow:  "hidden",
                  cursor:    i === active ? "zoom-in" : "pointer",
                  willChange: "transform, opacity, filter",
                  transformOrigin: "center center",
                  // Start all invisible; GSAP sets real values after mount
                  opacity:   0,
                }}
              >
                <Image
                  src={src}
                  alt={`Photo chantier ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 52vw, 380px"
                  quality={75}
                  className="object-cover pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* ── Arrow buttons ───────────────────────────────────────────── */}
          <button
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-[200]
                       w-10 h-10 flex items-center justify-center
                       border border-[#D4AF37]/25 text-[#D4AF37]/70
                       hover:border-[#D4AF37]/60 hover:text-[#D4AF37]
                       bg-black/40 backdrop-blur-sm
                       transition-all duration-200 rounded-sm"
            onClick={() => goTo(activeRef.current - 1)}
            aria-label="Photo précédente"
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10l6 6" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-[200]
                       w-10 h-10 flex items-center justify-center
                       border border-[#D4AF37]/25 text-[#D4AF37]/70
                       hover:border-[#D4AF37]/60 hover:text-[#D4AF37]
                       bg-black/40 backdrop-blur-sm
                       transition-all duration-200 rounded-sm"
            onClick={() => goTo(activeRef.current + 1)}
            aria-label="Photo suivante"
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* ── Dots ────────────────────────────────────────────────────────── */}
        <div className="g-reveal flex justify-center items-center gap-2 mt-8">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Photo ${i + 1}`}
              style={{
                transition: "all 0.35s ease",
                borderRadius: "9999px",
                height: "5px",
                width:  i === active ? "22px" : "5px",
                background: i === active ? "#D4AF37" : "rgba(138,138,138,0.35)",
              }}
            />
          ))}
        </div>

        {/* Caption */}
        <p className="g-reveal text-center text-[#8A8A8A] text-[9px] tracking-[0.35em] uppercase font-light mt-5 px-6">
          Swipez ou cliquez pour naviguer · Cliquez sur la photo centrale pour agrandir
        </p>

      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          LIGHTBOX
      ══════════════════════════════════════════════════════════════════════ */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/96"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-[92vw] max-h-[88dvh]"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={images[lightbox]}
              alt={`Photo ${lightbox + 1}`}
              width={1600}
              height={1200}
              quality={90}
              sizes="92vw"
              className="object-contain max-w-[92vw] max-h-[88dvh] rounded-sm"
              priority
            />
            <p className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8
                          text-[#8A8A8A] text-[9px] tracking-[0.4em] uppercase whitespace-nowrap">
              {lightbox + 1} / {images.length}
            </p>
          </div>

          {/* Prev */}
          {images.length > 1 && (
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2
                         w-11 h-11 flex items-center justify-center
                         border border-[#D4AF37]/30 text-[#D4AF37]
                         hover:bg-[#D4AF37]/10 transition-colors duration-200"
              onClick={e => { e.stopPropagation(); setLightbox(i => (i! - 1 + images.length) % images.length); }}
              aria-label="Image précédente"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M13 4L7 10l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2
                         w-11 h-11 flex items-center justify-center
                         border border-[#D4AF37]/30 text-[#D4AF37]
                         hover:bg-[#D4AF37]/10 transition-colors duration-200"
              onClick={e => { e.stopPropagation(); setLightbox(i => (i! + 1) % images.length); }}
              aria-label="Image suivante"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}

          {/* Close */}
          <button
            className="absolute top-5 right-5 md:top-8 md:right-8
                       flex items-center gap-2 text-[#D4AF37]
                       text-[9px] tracking-[0.35em] uppercase font-light
                       border border-[#D4AF37]/40 px-4 py-2.5
                       hover:bg-[#D4AF37]/10 transition-colors duration-200"
            onClick={() => setLightbox(null)}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            Fermer
          </button>
        </div>
      )}
    </>
  );
}
