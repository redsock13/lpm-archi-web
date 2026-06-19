"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HardHat, BarChart3, Lightbulb } from "lucide-react";
import Image from "next/image";

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: HardHat,
    title: "Gestion des travaux et permis de construire",
    description:
      "Direction et supervision complète de vos chantiers. Nous garantissons la conformité technique, le respect des normes et la qualité d'exécution à chaque étape de la réalisation.",
    number: "01",
    detail: "Direction de chantier · OPC · Réception des travaux",
    image: "/cadre01.webp",
    imageAlt: "Chantier maison individuelle LPM — maître d'œuvre Haute-Garonne, gestion des travaux",
  },
  {
    icon: BarChart3,
    title: "Maître d'œuvre bâtiment et suivi de chantier",
    description:
      "Coordination experte de tous les intervenants, optimisation des ressources et maîtrise rigoureuse des délais pour une livraison parfaite dans le respect du budget.",
    number: "02",
    detail: "Planning · Budget · Coordination",
    image: "/cadre02.jpg",
    imageAlt: "Suivi de chantier LPM — pilotage de projet de construction maison sur-mesure",
  },
  {
    icon: Lightbulb,
    title: "Artisans qualifiés et garanties décennales",
    description:
      "Réseau d'artisans certifiés RGE, couverture décennale complète. Nous sélectionnons et coordonnons les meilleurs professionnels pour chaque corps de métier.",
    number: "03",
    detail: "Audit · Faisabilité · Assistance à MOA",
    image: "/cadre03.jpg",
    imageAlt: "Artisans qualifiés LPM — garantie décennale construction maison Haute-Garonne",
  },
];

const stats = [
  { value: "200+",  label: "Projets réalisés"   },
  { value: "15 ans", label: "d'expertise"        },
  { value: "98%",   label: "Clients satisfaits"  },
  { value: "50M€+", label: "Travaux supervisés"  },
];

// ─── Magnetic tilt (desktop hover only) ─────────────────────────────────────

function MagneticContent({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 220, damping: 26 });
  const springY = useSpring(mouseY, { stiffness: 220, damping: 26 });
  const rotateX = useTransform(springY, [-80, 80], [3, -3]);
  const rotateY = useTransform(springX, [-80, 80], [-3, 3]);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mouseX.set((e.clientX - r.left - r.width / 2) * 0.1);
        mouseY.set((e.clientY - r.top  - r.height / 2) * 0.1);
      }}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
    >
      {children}
    </motion.div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function ExpertiseSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const headingRef   = useRef<HTMLDivElement>(null);
  const pinnedRef    = useRef<HTMLDivElement>(null);
  const trackRef     = useRef<HTMLDivElement>(null);
  const cardRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs   = useRef<(HTMLSpanElement | null)[]>([]);
  const progressFill = useRef<HTMLDivElement>(null);
  const statsRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // FOUC — cartes sombres + grayscale avant animation
    cardRefs.current.forEach((c) => {
      if (c) gsap.set(c, { opacity: 0.07, filter: "brightness(0.25) saturate(0) grayscale(1)" });
    });
    // Nombres sans glow au départ
    numberRefs.current.forEach((n) => {
      if (n) gsap.set(n, { filter: "drop-shadow(0 0 0px rgba(212,175,55,0))" });
    });

    const ctx = gsap.context(() => {

      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { y: 52, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 86%" } }
      );

      const track  = trackRef.current;
      const pinned = pinnedRef.current;
      if (!track || !pinned) return;

      const getScrollDist = () => track.scrollWidth - pinned.offsetWidth;

      // ── Film strip principal avec SNAP ────────────────────────────────
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
            snapTo: 1 / (services.length - 1),
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

      // ── Par carte : reveal cinématique grayscale → couleurs ───────────
      cardRefs.current.forEach((card, idx) => {
        if (!card) return;

        // Entrée : noir/blanc → couleurs
        gsap.fromTo(card,
          { opacity: 0.07, filter: "brightness(0.25) saturate(0) grayscale(1)" },
          { opacity: 1,    filter: "brightness(1) saturate(1) grayscale(0)", ease: "power2.out",
            scrollTrigger: { trigger: card, containerAnimation: mainTween,
              start: "left 95%", end: "left 35%", scrub: true } }
        );

        // Sortie : retour noir/blanc
        gsap.fromTo(card,
          { opacity: 1,   filter: "brightness(1) saturate(1) grayscale(0)" },
          { opacity: 0.1, filter: "brightness(0.25) saturate(0) grayscale(1)", ease: "power2.in",
            scrollTrigger: { trigger: card, containerAnimation: mainTween,
              start: "right 52%", end: "right -5%", scrub: true } }
        );

        // ── Glow or : s'illumine quand la carte est au centre ───────────
        const numEl = numberRefs.current[idx];
        if (numEl) {
          // Montée du glow (carte arrive au centre)
          gsap.fromTo(numEl,
            { filter: "drop-shadow(0 0 0px rgba(212,175,55,0))" },
            { filter: "drop-shadow(0 0 28px rgba(247,239,138,0.95)) drop-shadow(0 0 60px rgba(212,175,55,0.6))",
              ease: "power2.out",
              scrollTrigger: { trigger: card, containerAnimation: mainTween,
                start: "left 65%", end: "left 20%", scrub: true } }
          );
          // Descente du glow (carte quitte le centre)
          gsap.fromTo(numEl,
            { filter: "drop-shadow(0 0 28px rgba(247,239,138,0.95)) drop-shadow(0 0 60px rgba(212,175,55,0.6))" },
            { filter: "drop-shadow(0 0 0px rgba(212,175,55,0))",
              ease: "power2.in",
              scrollTrigger: { trigger: card, containerAnimation: mainTween,
                start: "right 65%", end: "right 20%", scrub: true } }
          );
        }
      });

      // Stats reveal
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.querySelectorAll(".stat-item"),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out",
            scrollTrigger: { trigger: statsRef.current, start: "top 85%" } }
        );
      }
    }, sectionRef);

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 600);

    return () => {
      window.clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="relative z-[2] bg-[#080808]"
    >
      {/* ── Heading ───────────────────────────────────────────────────── */}
      <div
        ref={headingRef}
        className="pt-14 pb-8 md:pt-36 md:pb-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto
                   flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8"
      >
        <div>
          <p className="text-[#C9A84C] tracking-[0.45em] text-[10px] uppercase mb-4 font-light">
            Notre Expertise
          </p>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] max-w-3xl leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Votre projet de construction de{" "}
            <span className="italic font-light text-[#C9A84C]">maison clé en main</span>
          </h2>
          <div className="mt-6 w-12 h-px bg-[#C9A84C]" />
        </div>
        <p className="hidden md:block text-[#8A8A8A] text-sm max-w-xs font-light leading-[1.8] md:text-right">
          Trois piliers, une seule promesse : votre maison livrée parfaite,
          dans les délais et le budget convenus.
        </p>
      </div>

      {/* ── Film strip — plein écran ───────────────────────────────────── */}
      <div
        ref={pinnedRef}
        className="h-[100dvh] overflow-hidden relative bg-[#080808]
                   pt-[72px] pb-3 md:pt-[64px] md:pb-4"
      >
        <div
          ref={trackRef}
          className="flex h-full will-change-transform"
          style={{ gap: "1px" }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="flex-shrink-0 relative overflow-hidden w-[88vw] md:w-[55vw]
                           flex flex-col px-6 md:px-12 pt-5 md:pt-10 pb-5 md:pb-12"
              >
                {/* Background image */}
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 88vw, 55vw"
                  className="object-cover"
                  priority={i === 0}
                />
                {/* Gradient — très fort en bas pour lisibilité du texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/99 via-[#080808]/65 to-[#080808]/10 pointer-events-none" />

                {/* ── Counter row ── */}
                <div className="relative z-10 flex items-center justify-between mb-2">
                  <span className="text-[#C9A84C]/60 text-[9px] tracking-[0.45em] font-light uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#F5F0E8]/20 text-[9px] tracking-[0.3em] font-light">
                    / {String(services.length).padStart(2, "0")}
                  </span>
                </div>

                {/* ── Numéro or — GSAP glow sync ── */}
                <span
                  ref={(el) => { numberRefs.current[i] = el; }}
                  aria-hidden="true"
                  className="gold-number relative z-10 pointer-events-none select-none mt-2"
                  style={{ fontSize: "clamp(3.5rem, 14vw, 10rem)" }}
                >
                  {service.number}
                </span>

                {/* ── Contenu centré verticalement dans l'espace restant ── */}
                <div className="relative z-10 flex-1 flex flex-col justify-center gap-4 md:gap-6 mt-2">
                  {/* Icon */}
                  <div className="w-9 h-9 md:w-11 md:h-11 border border-[#C9A84C]/35 flex items-center justify-center">
                    <Icon className="text-[#C9A84C]" size={16} strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  {/* Title */}
                  <MagneticContent>
                    <h3
                      className="text-[#F5F0E8] font-bold tracking-tight"
                      style={{
                        fontSize: "clamp(1.15rem, 3vw, 2.2rem)",
                        lineHeight: 1.25,
                      }}
                    >
                      {service.title}
                    </h3>
                  </MagneticContent>

                  {/* Description — visible sur mobile, 16px min */}
                  <p
                    className="text-[#C0B9AE] font-light"
                    style={{
                      fontSize: "clamp(1rem, 1.4vw, 1.05rem)",
                      lineHeight: 1.85,
                      maxWidth: "38ch",
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* ── Footer ancré en bas ── */}
                <div className="relative z-10 pt-4 border-t border-[#C9A84C]/20 flex items-center justify-between">
                  <p className="text-[#C9A84C]/70 text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-light">
                    {service.detail}
                  </p>
                  <div className="flex flex-col items-end gap-1.5">
                    <div className="w-8 h-px bg-[#C9A84C]/50" />
                    <div className="w-4 h-px bg-[#C9A84C]/25" />
                  </div>
                </div>
              </div>
            );
          })}
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

      {/* ── Stats — hors pin ─────────────────────────────────────────── */}
      <div
        ref={statsRef}
        className="px-6 md:px-12 lg:px-20 py-16 md:py-20 border-t border-[#1c1c1c]
                   grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto"
      >
        {stats.map((stat, i) => (
          <div key={i} className="stat-item">
            <div className="text-3xl md:text-4xl font-bold text-[#C9A84C] tracking-tight mb-2">
              {stat.value}
            </div>
            <div className="text-[#8A8A8A] text-xs tracking-[0.1em] font-light uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
