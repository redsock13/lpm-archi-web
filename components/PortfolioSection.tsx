"use client";

import useSectionEffects from "./useSectionEffects";

/**
 * PortfolioSection — Film Strip horizontal (mobile + desktop)
 *
 * Un seul markup, défilement horizontal GSAP ScrollTrigger pin:true sur
 * tous les écrans. Sur mobile : cartes 88 vw, swipe vertical → défilement
 * horizontal via Lenis → GSAP. Sur desktop : cartes 55 vw.
 *
 * Extras :
 *  – Progress bar fine en bas (liée au scroll via onUpdate)
 *  – Touch parallax sur les photos (touchmove/touchend)
 *  – City names : fade + scale à l'entrée (containerAnimation)
 */

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

function CardOverlay({ label }: { label: string }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center
                 bg-[#060606]/0 group-hover:bg-[#060606]/55
                 transition-colors duration-500 pointer-events-none"
    >
      <div
        className="flex flex-col items-center gap-3 opacity-0 scale-95
                   group-hover:opacity-100 group-hover:scale-100
                   transition-all duration-400 ease-out"
      >
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
          <rect x="5" y="2" width="17" height="22" rx="1.5" stroke="#D4AF37" strokeWidth="1.4"/>
          <path d="M18 2v7h6" stroke="#D4AF37" strokeWidth="1.4" strokeLinejoin="round"/>
          <path d="M8 13h10M8 17h7M8 21h5" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        <span
          className="text-[#D4AF37] text-[9px] tracking-[0.35em] uppercase font-light
                     border border-[#D4AF37]/40 px-4 py-2.5
                     min-h-[44px] flex items-center justify-center whitespace-nowrap"
        >
          {label}
        </span>
      </div>
    </div>
  );
}

const projects = [
  { id: 1, city: "AGEN",          image: "/projets/agen/couverture.jpg",            href: "/projets/agen",          external: false, subtitle: "Maison individuelle · LPM Architecture" },
  { id: 2, city: "BOUILLAC",      image: "/projets/bouillac/couverture.jpg",        href: "/projets/bouillac",      external: false, subtitle: "Maison individuelle · LPM Architecture" },
  { id: 3, city: "FRONTON",       image: "/projets/fronton/couverture.jpg",         href: "/projets/fronton",       external: false, subtitle: "Maison individuelle · LPM Architecture" },
  { id: 4, city: "GRENADE",       image: "/projets/grenade/couverture.jpg",         href: "/projets/grenade",       external: false, subtitle: "Maison individuelle · LPM Architecture" },
  { id: 5, city: "LAUNAC",        image: "/projets/launac/couverture.png",          href: "/projets/launac",        external: false, subtitle: "Maison individuelle · LPM Architecture" },
  { id: 6, city: "LEVIGNAC",      image: "/projets/levignac/couverture.jpg",        href: "/projets/levignac",      external: false, subtitle: "Maison individuelle · LPM Architecture" },
  { id: 7, city: "SAINT-CÉZERT 1", image: "/projets/Saint Cezert 1/couverture.jpg", href: "/projets/saint-cezert-1", external: false, subtitle: "Maison individuelle · LPM Architecture" },
  { id: 8, city: "SAINT-CÉZERT 2", image: "/projets/Saint Cezert 2/couverture.jpg", href: "/projets/saint-cezert-2", external: false, subtitle: "Maison individuelle · LPM Architecture" },
];

export default function PortfolioSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const effectsReady = useSectionEffects(sectionRef);
  const headingRef   = useRef<HTMLDivElement>(null);
  const pinnedRef    = useRef<HTMLDivElement>(null);
  const trackRef     = useRef<HTMLDivElement>(null);
  const cardRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const cityRefs     = useRef<(HTMLSpanElement | null)[]>([]);
  const progressFill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!effectsReady) return;
    gsap.registerPlugin(ScrollTrigger);

    // ── Fix FOUC : figer l'opacité initiale des cartes avant animation ───────
    cardRefs.current.forEach((card) => {
      if (card) gsap.set(card, { opacity: 0.08, filter: "brightness(0.35) saturate(0.2)" });
    });

    // ── GSAP animations ─────────────────────────────────────────────────────
    const ctx = gsap.context(() => {

      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { y: 52, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 86%" },
        }
      );

      const track  = trackRef.current;
      const pinned = pinnedRef.current;
      if (!track || !pinned) return;

      // Desktop (≥768px) : pin + scroll-jack cinématique.
      // Mobile (<768px)  : scroll horizontal natif (.hs-pinned), le scroll
      // vertical de la page n'est jamais intercepté (cf. audit ergonomie).
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const getScrollDist = () => track.scrollWidth - pinned.offsetWidth;

        // Horizontal scroll + progress bar in sync
        const mainTween = gsap.to(track, {
          x: () => -getScrollDist(),
          ease: "none",
          scrollTrigger: {
            trigger: pinned,
            pin: true,
            start: "top top",
            end: () => `+=${getScrollDist()}`,
            scrub: 1.4,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              gsap.set(progressFill.current, { scaleX: self.progress });
            },
          },
        });

        // Per-card: cinematic fade in/out on horizontal pass
        cardRefs.current.forEach((card) => {
          if (!card) return;

          gsap.fromTo(
            card,
            { opacity: 0.08, filter: "brightness(0.35) saturate(0.2)" },
            {
              opacity: 1,
              filter: "brightness(1) saturate(1)",
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                containerAnimation: mainTween,
                start: "left 98%",
                end: "left 40%",
                scrub: true,
              },
            }
          );

          gsap.fromTo(
            card,
            { opacity: 1, filter: "brightness(1) saturate(1)" },
            {
              opacity: 0.1,
              filter: "brightness(0.3) saturate(0.15)",
              ease: "power2.in",
              scrollTrigger: {
                trigger: card,
                containerAnimation: mainTween,
                start: "right 55%",
                end: "right -5%",
                scrub: true,
              },
            }
          );
        });

        // City names: fade + scale entrance + x parallax
        cityRefs.current.forEach((span, i) => {
          if (!span) return;

          gsap.set(span, { opacity: 0, scale: 0.80 });

          gsap.to(span, {
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardRefs.current[i],
              containerAnimation: mainTween,
              start: "left 88%",
              end: "left 55%",
              toggleActions: "play none none none",
            },
          });

          gsap.fromTo(
            span,
            { x: 60 },
            {
              x: -60,
              ease: "none",
              scrollTrigger: {
                trigger: cardRefs.current[i],
                containerAnimation: mainTween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.set(cardRefs.current, { opacity: 1, filter: "brightness(1) saturate(1)" });
        gsap.set(cityRefs.current, { opacity: 1, scale: 1 });

        const onScroll = () => {
          const max = track.scrollWidth - track.clientWidth;
          gsap.set(progressFill.current, { scaleX: max > 0 ? track.scrollLeft / max : 0 });
        };
        track.addEventListener("scroll", onScroll, { passive: true });

        return () => track.removeEventListener("scroll", onScroll);
      });
    }, sectionRef);

    // ── Touch parallax (hors contexte GSAP pour cleanup DOM propre) ─────────
    const touchCleanups: (() => void)[] = [];

    cardRefs.current.forEach((card) => {
      if (!card) return;

      const onTouchMove = (e: TouchEvent) => {
        const t = e.touches[0];
        const r = card.getBoundingClientRect();
        const nx = ((t.clientX - r.left) / r.width - 0.5) * 2;
        const ny = ((t.clientY - r.top) / r.height - 0.5) * 2;
        const img = card.querySelector("img");
        if (img) {
          gsap.to(img, { x: nx * 10, y: ny * 6, duration: 0.5, ease: "power2.out" });
        }
      };

      const onTouchEnd = () => {
        const img = card.querySelector("img");
        if (img) {
          gsap.to(img, { x: 0, y: 0, duration: 0.9, ease: "power3.out" });
        }
      };

      card.addEventListener("touchmove", onTouchMove, { passive: true });
      card.addEventListener("touchend",  onTouchEnd,  { passive: true });

      touchCleanups.push(() => {
        card.removeEventListener("touchmove", onTouchMove);
        card.removeEventListener("touchend",  onTouchEnd);
      });
    });

    // ── ScrollTrigger.refresh après chargement des images ───────────────────
    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 600);

    return () => {
      window.clearTimeout(refreshTimer);
      ctx.revert();
      touchCleanups.forEach((fn) => fn());
    };
  }, [effectsReady]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative z-[1] bg-[#060606]"
    >
      {/* ── Heading ─────────────────────────────────────────────────── */}
      <div
        ref={headingRef}
        className="pt-36 pb-16 px-5 md:px-12 lg:px-20 max-w-7xl mx-auto
                   flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div>
          <p className="text-[#C9A84C] tracking-[0.45em] text-[10px] uppercase mb-5 font-light">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] leading-[1.1] tracking-tight">
            Nos{" "}
            <span className="italic font-light text-[#C9A84C]">Réalisations</span>
          </h2>
        </div>
        <p className="text-[#8A8A8A] text-sm max-w-xs font-light leading-[1.8] md:text-right">
          Des maisons bâties avec soin, de la fondation au faîtage — chacune
          portant l&apos;empreinte d&apos;une exécution sans compromis.
        </p>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          Film strip horizontal — universel mobile + desktop
      ════════════════════════════════════════════════════════════════ */}
      <div
        ref={pinnedRef}
        className="hs-pinned h-[100dvh] overflow-hidden relative bg-[#060606]"
      >
        {/* Track */}
        <div
          ref={trackRef}
          className="flex h-full md:will-change-transform"
          style={{ gap: "2px" }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="hs-card-snap flex-shrink-0 relative overflow-hidden
                         w-[88vw] md:w-[55vw]"
            >
              {/* Clickable link — covers the full card */}
              {project.href && (
                project.external ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir le dossier complet — ${project.city}`}
                    className="group absolute inset-0 z-20 cursor-pointer"
                  >
                    <CardOverlay label="Voir le dossier PDF" />
                  </a>
                ) : (
                  <Link
                    href={project.href}
                    aria-label={`Découvrir le projet — ${project.city}`}
                    className="group absolute inset-0 z-20 cursor-pointer"
                  >
                    <CardOverlay label="Découvrir le projet" />
                  </Link>
                )
              )}

              {/* Photo */}
              <Image
                src={project.image}
                alt={`Réalisation LPM — ${project.city}`}
                fill
                sizes="(max-width: 768px) 88vw, 55vw"
                className="object-cover"
                priority={i < 2}
              />

              {/* Gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/80 via-[#060606]/10 to-transparent pointer-events-none" />

              {/* Counter top-right */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-3 z-10">
                <span className="text-[#F5F0E8]/30 text-[10px] tracking-[0.4em] font-light">
                  {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
                <div className="w-4 h-px bg-[#C9A84C]/30" />
              </div>

              {/* Giant city name */}
              <span
                ref={(el) => { cityRefs.current[i] = el; }}
                aria-hidden
                className="absolute inset-x-0 bottom-20 text-center font-serif
                           leading-none tracking-tighter pointer-events-none select-none
                           text-transparent"
                style={{
                  fontSize: "clamp(5rem, 22vw, 22rem)",
                  WebkitTextStroke: "1px rgba(201,168,76,0.18)",
                } as React.CSSProperties}
              >
                {project.city}
              </span>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 z-10
                              px-6 md:px-10 pb-8 md:pb-10 pt-16
                              bg-gradient-to-t from-[#060606]/60 to-transparent
                              flex items-end justify-between">
                <div>
                  <p className="text-[#C9A84C] text-[9px] tracking-[0.4em] uppercase mb-2 font-light">
                    {project.subtitle}
                  </p>
                  <h3 className="text-[#F5F0E8] font-bold tracking-tight leading-none"
                      style={{ fontSize: "clamp(1.6rem, 4vw, 3.5rem)" }}>
                    {project.city}
                  </h3>
                </div>
                <div className="flex flex-col items-end gap-2 pb-1">
                  <div className="w-10 h-px bg-[#C9A84C]/50" />
                  <div className="w-4 h-px bg-[#C9A84C]/30" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1c1c1c] z-20">
          <div
            ref={progressFill}
            className="h-full bg-[#C9A84C] origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* Swipe hint — mobile uniquement */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20
                        flex items-center gap-2 md:hidden pointer-events-none">
          <span className="text-[#F5F0E8]/25 text-[8px] tracking-[0.35em] uppercase">
            Glissez
          </span>
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
            <path d="M0 4h14M11 1l3 3-3 3" stroke="rgba(245,240,232,0.25)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 flex justify-center">
        <a
          href="#contact"
          className="group flex items-center gap-3 text-xs tracking-[0.3em] uppercase
                     text-[#8A8A8A] hover:text-[#C9A84C] transition-colors duration-300"
        >
          <span>Discutons de votre projet</span>
          <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-14" />
        </a>
      </div>
    </section>
  );
}
