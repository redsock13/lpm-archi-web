"use client";

import useSectionEffects from "./useSectionEffects";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const articles = [
  {
    number: "01",
    category: "Choisir son interlocuteur",
    title: "Maître d'œuvre, architecte ou constructeur : lequel choisir ?",
    excerpt:
      "Constructeur, architecte ou maître d’œuvre : comparer les missions, les contrats et les prestations pour préparer votre projet.",
    readTime: "8 min",
    tag: "Maîtrise d'œuvre · Architecte · Constructeur",
    href: "/guides/maitre-oeuvre-architecte-constructeur",
  },
  {
    number: "02",
    category: "Guide Pratique",
    title: "Les 5 étapes clés d'une construction de maison individuelle réussie.",
    excerpt:
      "De l'esquisse à la remise des clés : programme, permis de construire, choix des artisans, suivi de chantier et réception des travaux. Le processus LPM détaillé.",
    readTime: "6 min",
    tag: "Maîtrise d'œuvre · Chantier · Processus",
    href: "/guides/etapes-construction-maison-individuelle",
  },
  {
    number: "03",
    category: "Réglementation",
    title: "Comprendre la norme RE2020 pour votre futur projet.",
    excerpt:
      "Besoins énergétiques, confort d’été, matériaux et ventilation : les décisions à étudier dès la conception de votre maison.",
    readTime: "5 min",
    tag: "RE2020 · Norme · Énergie",
    href: "/guides/norme-re2020-construction-maison",
  },
];

export default function BlogSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const effectsReady = useSectionEffects(sectionRef);
  const headingRef   = useRef<HTMLDivElement>(null);
  const pinnedRef    = useRef<HTMLDivElement>(null);
  const trackRef     = useRef<HTMLDivElement>(null);
  const cardRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs   = useRef<(HTMLSpanElement | null)[]>([]);
  const progressFill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!effectsReady) return;
    gsap.registerPlugin(ScrollTrigger);

    // FOUC
    cardRefs.current.forEach((c) => {
      if (c) gsap.set(c, { opacity: 0.06 });
    });
    numberRefs.current.forEach((n) => {
      if (n) gsap.set(n, { filter: "drop-shadow(0 0 0px rgba(212,175,55,0))" });
    });

    const ctx = gsap.context(() => {

      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { y: 48, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 86%" } }
      );

      const track  = trackRef.current;
      const pinned = pinnedRef.current;
      if (!track || !pinned) return;

      // Desktop (≥768px) : pin + scroll-jack cinématique avec snap.
      // Mobile (<768px)  : scroll horizontal natif (.hs-pinned), le scroll
      // vertical de la page n'est jamais intercepté (cf. audit ergonomie).
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const getScrollDist = () => track.scrollWidth - pinned.offsetWidth;

        // ── Film strip avec SNAP ─────────────────────────────────────────
        const mainTween = gsap.to(track, {
          x: () => -getScrollDist(),
          ease: "none",
          scrollTrigger: {
            trigger: pinned,
            pin: true,
            start: "top top",
            end: () => `+=${getScrollDist()}`,
            scrub: 1.2,
            snap: {
              snapTo: 1 / (articles.length - 1),
              duration: { min: 0.25, max: 0.5 },
              ease: "power2.inOut",
              delay: 0.05,
            },
            pinSpacing: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => gsap.set(progressFill.current, { scaleX: self.progress }),
          },
        });

        // ── Par carte : fade + glow or synchronisé ───────────────────────
        cardRefs.current.forEach((card, idx) => {
          if (!card) return;

          gsap.fromTo(card,
            { opacity: 0.06 },
            { opacity: 1, ease: "power2.out",
              scrollTrigger: { trigger: card, containerAnimation: mainTween,
                start: "left 95%", end: "left 35%", scrub: true } }
          );
          gsap.fromTo(card,
            { opacity: 1 },
            { opacity: 0.07, ease: "power2.in",
              scrollTrigger: { trigger: card, containerAnimation: mainTween,
                start: "right 52%", end: "right -5%", scrub: true } }
          );

          const numEl = numberRefs.current[idx];
          if (numEl) {
            gsap.fromTo(numEl,
              { filter: "drop-shadow(0 0 0px rgba(212,175,55,0))" },
              { filter: "drop-shadow(0 0 28px rgba(247,239,138,0.95)) drop-shadow(0 0 60px rgba(212,175,55,0.6))",
                ease: "power2.out",
                scrollTrigger: { trigger: card, containerAnimation: mainTween,
                  start: "left 65%", end: "left 20%", scrub: true } }
            );
            gsap.fromTo(numEl,
              { filter: "drop-shadow(0 0 28px rgba(247,239,138,0.95)) drop-shadow(0 0 60px rgba(212,175,55,0.6))" },
              { filter: "drop-shadow(0 0 0px rgba(212,175,55,0))",
                ease: "power2.in",
                scrollTrigger: { trigger: card, containerAnimation: mainTween,
                  start: "right 65%", end: "right 20%", scrub: true } }
            );
          }
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.set(cardRefs.current, { opacity: 1 });
        gsap.set(numberRefs.current, {
          filter: "drop-shadow(0 0 28px rgba(247,239,138,0.95)) drop-shadow(0 0 60px rgba(212,175,55,0.6))",
        });

        const onScroll = () => {
          const max = track.scrollWidth - track.clientWidth;
          gsap.set(progressFill.current, { scaleX: max > 0 ? track.scrollLeft / max : 0 });
        };
        track.addEventListener("scroll", onScroll, { passive: true });

        return () => track.removeEventListener("scroll", onScroll);
      });

    }, sectionRef);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 700);

    return () => {
      window.clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [effectsReady]);

  return (
    <section
      id="conseils"
      ref={sectionRef}
      className="relative bg-[#060606]"
      aria-labelledby="blog-heading"
    >
      {/* ── Heading ─────────────────────────────────────────────────────── */}
      <div
        ref={headingRef}
        className="pt-14 pb-8 md:pt-36 md:pb-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto
                   flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8"
      >
        <div>
          <p className="text-[#C9A84C] tracking-[0.45em] text-[10px] uppercase mb-4 font-light">
            Conseils &amp; Expertise
          </p>
          <h2
            id="blog-heading"
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] leading-[1.1] tracking-tight max-w-xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nos{" "}
            <span className="italic font-light text-[#C9A84C]">Guides</span>{" "}
            pour construire sereinement
          </h2>
          <div className="mt-6 w-12 h-px bg-[#C9A84C]" />
        </div>
        <p className="hidden md:block text-[#8A8A8A] text-sm font-light max-w-xs leading-[1.8] md:text-right">
          Informations pratiques sur la construction de maison individuelle
          en Haute-Garonne.
        </p>
      </div>

      {/* ── Film strip — plein écran ─────────────────────────────────────── */}
      <div
        ref={pinnedRef}
        className="hs-pinned h-[100dvh] overflow-hidden relative bg-[#060606]
                   pt-[72px] pb-3 md:pt-[64px] md:pb-4"
      >
        <div
          ref={trackRef}
          className="flex h-full md:will-change-transform"
          style={{ gap: "1px" }}
        >
          {articles.map((article, i) => (
            <article
              key={article.number}
              ref={(el) => { cardRefs.current[i] = el as HTMLDivElement | null; }}
              className="hs-card-snap flex-shrink-0 relative flex flex-col
                         w-[88vw] md:w-[55vw] bg-[#060606] border-r border-[#1c1c1c]
                         px-6 md:px-14 pt-5 md:pt-10 pb-5 md:pb-12 cursor-pointer group"
            >
              {/* Lien couvrant toute la carte */}
              <Link href={article.href} className="absolute inset-0 z-20" aria-label={`Lire : ${article.title}`} />
              {/* ── Counter row ── */}
              <div className="relative z-10 flex items-center justify-between mb-2">
                <span className="text-[#C9A84C]/60 text-[9px] tracking-[0.4em] uppercase font-light">
                  {article.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[#F5F0E8]/15 text-[9px] tracking-[0.35em] font-light">
                    {String(i + 1).padStart(2, "0")} / {String(articles.length).padStart(2, "0")}
                  </span>
                  <div className="w-4 h-px bg-[#C9A84C]/25" />
                </div>
              </div>

              {/* ── Numéro or — GSAP glow sync ── */}
              <span
                ref={(el) => { numberRefs.current[i] = el; }}
                aria-hidden="true"
                className="gold-number relative z-10 pointer-events-none select-none mt-2"
                style={{ fontSize: "clamp(3.5rem, 14vw, 10rem)" }}
              >
                {article.number}
              </span>

              {/* ── Contenu centré verticalement dans l'espace restant ── */}
              <div className="relative z-10 flex-1 flex flex-col justify-center gap-4 md:gap-6 mt-2">
                {/* Title */}
                <h3
                  className="text-[#F5F0E8] font-bold leading-[1.25] tracking-tight
                             group-hover:text-[#C9A84C] transition-colors duration-500"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(1.15rem, 3vw, 2.1rem)",
                  }}
                >
                  {article.title}
                </h3>

                {/* Gold line */}
                <div className="w-10 h-px bg-[#C9A84C]/50 group-hover:w-16 transition-all duration-500" />

                {/* Excerpt — visible sur mobile, 16px+ */}
                <p
                  className="text-[#9A9490] font-light"
                  style={{
                    fontSize: "clamp(1rem, 1.4vw, 1.05rem)",
                    lineHeight: 1.85,
                    maxWidth: "36ch",
                  }}
                >
                  {article.excerpt}
                </p>
              </div>

              {/* ── Footer ancré en bas ── */}
              <div className="relative z-10 pt-4 border-t border-[#1c1c1c] flex items-center justify-between">
                <p className="text-[#C9A84C]/60 text-[9px] tracking-[0.25em] uppercase font-light">
                  {article.tag}
                </p>
                <span className="text-[#F5F0E8]/25 text-[9px] font-light tracking-wide">
                  {article.readTime} de lecture
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1c1c1c] z-20">
          <div ref={progressFill} className="h-full bg-[#C9A84C] origin-left" style={{ transform: "scaleX(0)" }} />
        </div>

        {/* Swipe hint — mobile */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 md:hidden pointer-events-none">
          <span className="text-[#F5F0E8]/25 text-[8px] tracking-[0.35em] uppercase">Glissez</span>
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden="true">
            <path d="M0 4h14M11 1l3 3-3 3" stroke="rgba(245,240,232,0.25)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <p className="py-8 text-center text-[#8A8A8A]/40 text-[10px] tracking-[0.3em] uppercase font-light border-t border-[#1c1c1c]">
        Consultez nos guides pour préparer votre projet de construction
      </p>
    </section>
  );
}
