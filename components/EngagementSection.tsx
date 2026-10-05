"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Chunk = { text: string; bold?: boolean; gold?: boolean };
type Para  = Chunk[];

const paragraphs: Para[] = [
  [
    { text: "Envie de réaliser votre " },
    { text: "rêve de construction", bold: true, gold: true },
    { text: " et d'accès à la propriété, mais les coûts actuels vous en empêchent ?" },
  ],
  [
    { text: "LPM prend en charge votre réalisation " },
    { text: "du début à la fin", bold: true },
    { text: " avec des coûts " },
    { text: "maîtrisés", bold: true, gold: true },
    { text: ", tout en garantissant une qualité irréprochable — plain-pied ou à étage, traditionnelle ou contemporaine. Toutes nos réalisations respectent la norme " },
    { text: "RE2020", bold: true, gold: true },
    { text: "." },
  ],
  [
    { text: "Notre " },
    { text: "réseau d'artisans qualifiés", bold: true },
    { text: " et d'entreprises du BTP nous garantit une réponse précise à vos attentes. Pour rester " },
    { text: "disponible, performant et réactif", bold: true, gold: true },
    { text: ", LPM se limite volontairement à " },
    { text: "10 à 12 maisons par an", bold: true },
    { text: "." },
  ],
  [
    { text: "En moyenne, nos délais de livraison sont de " },
    { text: "10 mois", bold: true, gold: true },
    { text: ". La confiance que nous accordons à nos collaborateurs ne dispense pas du contrôle — c'est pourquoi LPM vous offre un " },
    { text: "accès libre à votre chantier", bold: true },
    { text: " pour suivre l'évolution de votre projet en temps réel." },
  ],
  [
    { text: "Nous pouvons également effectuer la " },
    { text: "recherche de terrain", bold: true, gold: true },
    { text: " selon vos critères, grâce à notre collaboration avec les partenaires immobiliers de la région." },
  ],
  [
    { text: "Vous avez déjà votre terrain ? Parfait. LPM conçoit votre " },
    { text: "projet sur-mesure", bold: true, gold: true },
    { text: " selon votre mode de vie, pour que chaque espace vous ressemble." },
  ],
  [
    { text: "Un rendez-vous, une prise de contact directe — " },
    { text: "n'hésitez pas à nous écrire", bold: true },
    { text: " pour discuter de votre projet à venir." },
  ],
];

export default function EngagementSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const headingRef   = useRef<HTMLDivElement>(null);
  const btnRef       = useRef<HTMLButtonElement>(null);
  const modalRef     = useRef<HTMLDivElement>(null);
  const modalInnerRef = useRef<HTMLDivElement>(null);
  const shimmerRef   = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<HTMLParagraphElement>(null);

  // ── Heading scroll reveal ────────────────────────────────────────────────
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Modal starts off-screen (no layout impact)
    gsap.set(modalRef.current, { yPercent: 100 });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 48, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 86%" } }
      );

      // Button pulse
      gsap.to(btnRef.current, {
        boxShadow: "0 0 0 6px rgba(212,175,55,0.12), 0 0 0 12px rgba(212,175,55,0.05)",
        duration: 1.4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Open modal — POSITION FIXED, hors du flux ────────────────────────────
  function openModal() {
    const modal = modalRef.current;
    const inner = modalInnerRef.current;
    if (!modal || !inner) return;

    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Slide up from bottom
    gsap.to(modal, { yPercent: 0, duration: 0.65, ease: "power4.out" });

    // Stagger paragraphs
    const paras = inner.querySelectorAll(".engage-para");
    gsap.fromTo(paras,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1, delay: 0.4 }
    );

    // Shimmer sweep
    if (shimmerRef.current) {
      gsap.fromTo(shimmerRef.current,
        { x: "-100%", opacity: 1 },
        { x: "100%", opacity: 1, duration: 1.2, ease: "power2.inOut", delay: 0.3 }
      );
    }

    // Signature
    if (signatureRef.current) {
      gsap.fromTo(signatureRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out",
          delay: 0.4 + paras.length * 0.1 + 0.3 }
      );
    }

    // ScrollTrigger n'est PAS affecté (position fixed = hors du flux)
    // Refresh quand même pour sécurité
    window.setTimeout(() => ScrollTrigger.refresh(), 100);
  }

  // ── Close modal ──────────────────────────────────────────────────────────
  function closeModal() {
    gsap.to(modalRef.current, {
      yPercent: 100,
      duration: 0.45,
      ease: "power3.in",
      onComplete: () => {
        document.body.style.overflow = "";
        ScrollTrigger.refresh();
      },
    });
  }

  return (
    <section
      id="engagement"
      ref={sectionRef}
      className="bg-[#000000] py-28 md:py-36 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">

        {/* ── Heading ─────────────────────────────────────────────────── */}
        <div ref={headingRef} className="mb-14 md:mb-18">
          <p className="text-[#D4AF37] tracking-[0.45em] text-[10px] uppercase mb-5 font-light">
            Notre philosophie
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#D4AF37] leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            L&rsquo;Engagement{" "}
            <span className="italic font-normal text-[#F5F0E8]">LPM</span>
          </h2>
          <p className="text-[#8A8A8A] text-base md:text-lg font-light leading-[1.7] max-w-xl">
            Une vision humaine de la construction haute performance.
          </p>
        </div>

        {/* ── CTA Button ──────────────────────────────────────────────── */}
        <button
          ref={btnRef}
          onClick={openModal}
          className="flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase
                     text-[#D4AF37] border border-[#D4AF37]/50 px-8 py-4
                     hover:bg-[#D4AF37]/8 transition-colors duration-300 cursor-pointer"
        >
          <span>Découvrir notre philosophie</span>
          <svg width="18" height="8" viewBox="0 0 18 8" fill="none" aria-hidden="true">
            <path d="M0 4h16M13 1l3 3-3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* ── MODALE PLEIN ÉCRAN — position:fixed, hors du flux ───────────────
          Le yPercent:100 initial la garde hors écran sans toucher au layout.
          Aucun reflow du document quand elle s'ouvre ou se ferme.
      ─────────────────────────────────────────────────────────────────────── */}
      <div
        ref={modalRef}
        className="fixed inset-0 z-[9998] bg-[#000000] flex flex-col"
        style={{ willChange: "transform" }}
        aria-modal="true"
        role="dialog"
        aria-label="L'Engagement LPM — Notre philosophie"
      >
        {/* Header modal */}
        <div className="flex items-center justify-between px-6 md:px-16 py-6 border-b border-[#1c1c1c] flex-shrink-0">
          <div>
            <p className="text-[#D4AF37] tracking-[0.4em] text-[9px] uppercase font-light">
              Notre philosophie
            </p>
            <p
              className="text-[#F5F0E8] text-xl md:text-2xl font-bold mt-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              L&rsquo;Engagement LPM
            </p>
          </div>
          <button
            onClick={closeModal}
            className="w-10 h-10 border border-[#D4AF37]/40 flex items-center justify-center
                       text-[#D4AF37] hover:bg-[#D4AF37]/10
                       transition-colors duration-300 cursor-pointer"
            aria-label="Fermer"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Corps — scrollable */}
        <div
          ref={modalInnerRef}
          className="flex-1 overflow-y-auto px-6 md:px-16 py-10 md:py-14 relative"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* Shimmer sweep */}
          <div
            ref={shimmerRef}
            aria-hidden="true"
            className="absolute inset-y-0 w-48 pointer-events-none z-10"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.1) 50%, transparent 100%)",
              left: 0,
            }}
          />

          {/* Paragraphes */}
          <div className="space-y-8 max-w-3xl mx-auto">
            {paragraphs.map((para, pi) => (
              <p
                key={pi}
                className="engage-para text-[#F5F0E8]/80 text-base md:text-lg font-light leading-[1.9]"
                style={{ opacity: 0 }}
              >
                {para.map((chunk, ci) =>
                  chunk.bold || chunk.gold ? (
                    <strong
                      key={ci}
                      className={`font-semibold ${chunk.gold ? "text-[#D4AF37]" : "text-[#F5F0E8]"}`}
                    >
                      {chunk.text}
                    </strong>
                  ) : (
                    <span key={ci}>{chunk.text}</span>
                  )
                )}
              </p>
            ))}
          </div>

          {/* Divider + Signature */}
          <div className="max-w-3xl mx-auto mt-14 flex items-center gap-4">
            <div className="w-12 h-px bg-[#D4AF37]/40" />
            <div className="w-4 h-px bg-[#D4AF37]/20" />
          </div>
          <p
            ref={signatureRef}
            className="max-w-3xl mx-auto mt-6 text-right text-xl md:text-2xl text-[#D4AF37]"
            style={{ fontFamily: "var(--font-dancing)", opacity: 0 }}
          >
            À bientôt… Loïc Petit
          </p>

          {/* Bouton fermer bas */}
          <div className="max-w-3xl mx-auto mt-14 mb-4 flex justify-center">
            <button
              onClick={closeModal}
              className="flex items-center gap-3 text-[9px] tracking-[0.4em] uppercase
                         text-[#D4AF37]/70 border border-[#D4AF37]/30 px-6 py-3
                         hover:text-[#D4AF37] hover:border-[#D4AF37]/60
                         transition-colors duration-300 cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <span>Fermer</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
