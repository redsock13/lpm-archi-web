"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SERIF = "var(--font-playfair), Georgia, serif";

const STEPS = [
  {
    number: "01",
    title: "Immersion",
    subtitle: "Analyse & Esquisse",
    description:
      "Nous plongeons dans votre univers, vos besoins, votre terrain. L'écoute précède tout. L'esquisse naît de cette compréhension totale de votre vision.",
  },
  {
    number: "02",
    title: "Conception",
    subtitle: "Plans & Permis",
    description:
      "Plans techniques, dépôt du permis de construire, sélection des matériaux. Chaque détail pensé pour que votre projet soit viable, beau et pérenne.",
  },
  {
    number: "03",
    title: "Pilotage",
    subtitle: "Artisans & Chantier",
    description:
      "Nous coordonnons les corps de métier avec rigueur. Planning, contrôle qualité, suivi financier — un seul interlocuteur pour tout votre chantier.",
  },
  {
    number: "04",
    title: "Sérénité",
    subtitle: "Livraison & Clés",
    description:
      "Je vous assiste à la réception des travaux et au suivi des éventuelles réserves, dans le cadre de ma mission. Les étapes et les documents de fin de chantier sont préparés avec les intervenants.",
  },
] as const;

export default function ProcessusSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const headingRef   = useRef<HTMLDivElement>(null);
  const pinnedRef    = useRef<HTMLDivElement>(null);
  const trackRef     = useRef<HTMLDivElement>(null);
  const cardRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const progressFill = useRef<HTMLDivElement>(null);

  const eyebrowRef  = useRef<HTMLParagraphElement>(null);
  const wLe         = useRef<HTMLSpanElement>(null);
  const wProcessus  = useRef<HTMLSpanElement>(null);
  const wLpm        = useRef<HTMLSpanElement>(null);
  const subLine1    = useRef<HTMLSpanElement>(null);
  const subLine2    = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // FOUC prevention — cards start dark before GSAP runs
    cardRefs.current.forEach((c) => {
      if (c) gsap.set(c, { opacity: 0.06 });
    });

    const ctx = gsap.context(() => {

      // ── Heading animations ───────────────────────────────────────────────
      const headingTrigger = { trigger: headingRef.current, start: "top 82%" };

      gsap.fromTo(
        eyebrowRef.current,
        { opacity: 0, letterSpacing: "0.12em" },
        { opacity: 1, letterSpacing: "0.50em", duration: 1.1,
          ease: "power3.out", scrollTrigger: headingTrigger }
      );

      gsap.fromTo(
        [wLe.current, wProcessus.current, wLpm.current],
        { y: "110%" },
        { y: "0%", duration: 1.0, ease: "power4.out", stagger: 0.09,
          delay: 0.15, scrollTrigger: headingTrigger }
      );

      gsap.fromTo(
        [subLine1.current, subLine2.current],
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 0.85, ease: "power3.out",
          stagger: 0.18, delay: 0.45, scrollTrigger: headingTrigger }
      );

      // ── Film strip horizontal ─────────────────────────────────────────────
      // Desktop (≥768px) : pin + scroll-jack cinématique.
      // Mobile (<768px)  : scroll horizontal natif (.hs-pinned), le scroll
      // vertical de la page n'est jamais intercepté (cf. audit ergonomie).
      const track  = trackRef.current;
      const pinned = pinnedRef.current;
      if (!track || !pinned) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const getScrollDist = () => track.scrollWidth - pinned.offsetWidth;

        const mainTween = gsap.to(track, {
          x: () => -getScrollDist(),
          ease: "none",
          scrollTrigger: {
            trigger: pinned,
            pin: true,
            start: "top top",
            end: () => `+=${getScrollDist()}`,
            scrub: 1.4,
            pinSpacing: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => gsap.set(progressFill.current, { scaleX: self.progress }),
          },
        });

        cardRefs.current.forEach((card) => {
          if (!card) return;
          gsap.fromTo(card,
            { opacity: 0.06 },
            { opacity: 1, ease: "power2.out",
              scrollTrigger: { trigger: card, containerAnimation: mainTween,
                start: "left 95%", end: "left 40%", scrub: true } }
          );
          gsap.fromTo(card,
            { opacity: 1 },
            { opacity: 0.08, ease: "power2.in",
              scrollTrigger: { trigger: card, containerAnimation: mainTween,
                start: "right 55%", end: "right -5%", scrub: true } }
          );
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.set(cardRefs.current, { opacity: 1 });

        const onScroll = () => {
          const max = track.scrollWidth - track.clientWidth;
          gsap.set(progressFill.current, { scaleX: max > 0 ? track.scrollLeft / max : 0 });
        };
        track.addEventListener("scroll", onScroll, { passive: true });

        return () => track.removeEventListener("scroll", onScroll);
      });

    }, sectionRef);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 800);

    return () => {
      window.clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="processus"
      className="relative z-0 bg-[#0d0d0d]"
    >
      {/* ── En-tête ─────────────────────────────────────────────────────── */}
      <div
        ref={headingRef}
        className="pt-20 pb-0 md:pt-32 px-6 md:px-16 lg:px-24
                   flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6"
      >
        <div>
          <p
            ref={eyebrowRef}
            className="text-[#D4AF37] text-[10px] uppercase mb-5 font-light"
            style={{ opacity: 0, letterSpacing: "0.12em" }}
          >
            Notre méthode
          </p>

          <h2 className="sr-only">
            Maître d&apos;œuvre bâtiment et suivi de chantier — Le Processus LPM
          </h2>

          <div
            aria-hidden="true"
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.4rem, 5vw, 5.5rem)",
              fontWeight: 700,
              color: "#F5F0E8",
              lineHeight: 1.05,
              letterSpacing: "0.02em",
              display: "flex",
              flexWrap: "wrap",
              gap: "0 0.28em",
              overflow: "visible",
            }}
          >
            {(
              [
                { ref: wLe,        text: "Le",        style: {} },
                { ref: wProcessus, text: "Processus", style: {} },
                { ref: wLpm,       text: "LPM",       style: { fontStyle: "italic", fontWeight: 400 } },
              ] as { ref: React.RefObject<HTMLSpanElement | null>; text: string; style: React.CSSProperties }[]
            ).map(({ ref, text, style }) => (
              <span
                key={text}
                style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
              >
                <span
                  ref={ref}
                  style={{ display: "inline-block", transform: "translateY(110%)", ...style }}
                >
                  {text}
                </span>
              </span>
            ))}
          </div>
        </div>

        <p className="text-[#8A8A8A] text-sm font-light leading-[1.8] max-w-xs md:text-right md:pb-2">
          <span
            ref={subLine1}
            style={{ display: "block", clipPath: "inset(0 0 100% 0)" }}
          >
            Quatre étapes éprouvées, un seul objectif :
          </span>
          <span
            ref={subLine2}
            style={{ display: "block", clipPath: "inset(0 0 100% 0)" }}
          >
            votre maison livrée à la perfection.
          </span>
        </p>
      </div>

      {/* ── Film strip horizontal — universel ───────────────────────────── */}
      <div
        ref={pinnedRef}
        className="hs-pinned h-[100dvh] overflow-hidden relative bg-[#0d0d0d]
                   pt-[72px] pb-3 md:pt-[64px] md:pb-4"
      >
        {/* Track */}
        <div
          ref={trackRef}
          className="flex h-full md:will-change-transform"
        >
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="hs-card-snap flex-shrink-0 relative flex flex-col justify-center
                         px-8 md:px-16 xl:px-20
                         w-[88vw] md:w-[55vw]"
            >
              {/* Numéro géant — centré verticalement, très fantomatique */}
              <span
                aria-hidden="true"
                className="gold-outline-shine"
                style={{
                  position: "absolute",
                  fontFamily: SERIF,
                  fontSize: "clamp(10rem, 26vw, 30rem)",
                  fontWeight: 900,
                  lineHeight: 1,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -55%)",
                  userSelect: "none",
                  pointerEvents: "none",
                  zIndex: 0,
                  opacity: 0.06,
                  animationDelay: `${i * 0.75}s`,
                }}
              >
                {step.number}
              </span>

              {/* Contenu */}
              <div style={{ position: "relative", zIndex: 1, maxWidth: "520px" }}>
                {/* Indicateur étape */}
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <span
                    style={{
                      fontFamily: "var(--font-sora), system-ui, sans-serif",
                      fontSize: "0.60rem",
                      letterSpacing: "0.50em",
                      color: "#D4AF37",
                      textTransform: "uppercase",
                    }}
                  >
                    {step.number} / {String(STEPS.length).padStart(2, "0")}
                  </span>
                  <div style={{ flex: 1, height: "1px", background: "rgba(212,175,55,0.20)", maxWidth: "60px" }} />
                </div>

                {/* Titre */}
                <h3
                  style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(2.8rem, 7vw, 8rem)",
                    fontWeight: 700,
                    color: "#F5F0E8",
                    lineHeight: 0.9,
                    letterSpacing: "0.03em",
                    textTransform: "uppercase",
                    marginBottom: "0.6rem",
                  }}
                >
                  {step.title}
                </h3>

                {/* Sous-titre */}
                <p
                  style={{
                    fontSize: "0.60rem",
                    letterSpacing: "0.42em",
                    color: "#D4AF37",
                    textTransform: "uppercase",
                    fontWeight: 300,
                    marginBottom: "2rem",
                  }}
                >
                  {step.subtitle}
                </p>

                {/* Ligne or */}
                <div
                  style={{
                    width: "48px",
                    height: "1px",
                    background: "#D4AF37",
                    marginBottom: "1.8rem",
                    opacity: 0.6,
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    color: "rgba(245,240,232,0.50)",
                    fontSize: "clamp(0.76rem, 1.2vw, 1.05rem)",
                    lineHeight: 1.85,
                    fontWeight: 300,
                    maxWidth: "38ch",
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* Séparateur vertical droit */}
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "20%",
                    height: "60%",
                    width: "1px",
                    background:
                      "linear-gradient(to bottom, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1c1c1c] z-20">
          <div ref={progressFill} className="h-full bg-[#D4AF37] origin-left" style={{ transform: "scaleX(0)" }} />
        </div>

        {/* Swipe hint — mobile */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20
                        flex items-center gap-2 md:hidden pointer-events-none">
          <span className="text-[#F5F0E8]/25 text-[8px] tracking-[0.35em] uppercase">Glissez</span>
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden="true">
            <path d="M0 4h14M11 1l3 3-3 3" stroke="rgba(245,240,232,0.25)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
