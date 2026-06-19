"use client";

/**
 * ChantierSection — Mural Draggable "Vie de Chantier"
 *
 * Images depuis /public/viedechantier — shufflées côté client.
 * Layout masonry (colonne la plus courte en premier) absolu sur une toile géante.
 * GSAP Draggable + InertiaPlugin pour l'inertie beurre.
 */

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

// ── Toutes les photos disponibles ───────────────────────────────────────────
const ALL_IMAGES = [
  "20200616_164458.jpg",
  "20201210_174028.jpg",
  "20201212_155045.jpg",
  "20210117_172900.jpg",
  "20210117_173205.jpg",
  "20210120_141812.jpg",
  "20210120_142020.jpg",
  "20210203_175640.jpg",
  "20210203_175828.jpg",
  "20210211_181726.jpg",
  "20210218_174657.jpg",
  "20210218_174719.jpg",
  "20210220_172925.jpg",
  "20210224_171316.jpg",
  "20210224_171322.jpg",
  "20210301_173833.jpg",
  "20210301_173920.jpg",
  "20210301_173929.jpg",
  "20210301_173933.jpg",
  "20210301_180328.jpg",
  "20210320_172130.jpg",
  "20210406_194432.jpg",
  "20210408_171550.jpg",
  "20210501_195357.jpg",
  "20210502_192318.jpg",
  "20210502_192327.jpg",
  "20210502_192345.jpg",
  "20210502_192433.jpg",
  "20210505_212545.jpg",
  "20210508_195733.jpg",
  "20210531_204653.jpg",
  "20210721_210536.jpg",
  "20210905_122320.jpg",
  "20220517_210813.jpg",
  "20220530_210911.jpg",
  "20220710_221409.jpg",
  "20220710_221427.jpg",
  "20220713_193114.jpg",
  "20220803_195759.jpg",
  "20220806_205042.jpg",
  "20240518_081729.jpg",
  "20250624_192753.jpg",
  "20250727_110728.jpg",
  "20250830_135241.jpg",
  "20250903_111852.jpg",
  "20250903_111910.jpg",
  "20250903_111939.jpg",
  "20250903_111946.jpg",
  "20250903_111951.jpg",
  "20250903_112018.jpg",
  "20250903_112026.jpg",
  "20250903_112101.jpg",
  "20250903_112108.jpg",
  "20250903_112124.jpg",
  "image0000011(1).jpg",
  "image0000021(1).jpg",
  "received_276778584309184.jpeg",
  "received_280070200638843.jpeg",
  "received_349704913601360.jpeg",
  "received_412777640409164.jpeg",
  "received_573711434018032.jpeg",
];

// Hauteurs variées pour l'asymétrie du masonry
const HEIGHTS = [
  270, 350, 260, 380, 240, 310, 330, 250, 300, 360,
  280, 340, 220, 290, 370, 260, 320, 280, 350, 240,
  300, 380, 260, 310, 270,
];

const COL_COUNT = 5;
const COL_W     = 360;
const GAP       = 2;    // filet noir 2px — look "plan de travail d'architecte"
const N_PHOTOS  = 25;   // nombre de photos affichées par rendu

// ── Utils ────────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface PhotoItem { src: string; left: number; top: number; w: number; h: number }
interface Layout    { items: PhotoItem[]; totalW: number; totalH: number }

function buildLayout(images: string[]): Layout {
  const colHeights = Array<number>(COL_COUNT).fill(0);
  const items = images.map((src, i) => {
    // Colonne la plus courte → masonry équilibré
    const col  = colHeights.indexOf(Math.min(...colHeights));
    const left = col * (COL_W + GAP);
    const top  = colHeights[col];
    const h    = HEIGHTS[i % HEIGHTS.length];
    colHeights[col] += h + GAP;
    return { src, left, top, w: COL_W, h };
  });
  return {
    items,
    totalW: COL_COUNT * (COL_W + GAP) - GAP,
    totalH: Math.max(...colHeights),
  };
}

// ─────────────────────────────────────────────────────────────────────────────

export default function ChantierSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const wallRef    = useRef<HTMLDivElement>(null);

  const [layout, setLayout] = useState<Layout | null>(null);

  // Shuffle + layout (client uniquement → pas d'hydration mismatch)
  useEffect(() => {
    setLayout(buildLayout(shuffle(ALL_IMAGES).slice(0, N_PHOTOS)));
  }, []);

  // GSAP : heading + intro + Draggable (déclenché après le layout)
  useEffect(() => {
    if (!layout) return;

    gsap.registerPlugin(ScrollTrigger, Draggable, InertiaPlugin);

    const wrapper = wrapperRef.current;
    const wall    = wallRef.current;
    if (!wrapper || !wall) return;

    const getBounds = () => ({
      maxX: 0,
      minX: -(layout.totalW - wrapper.offsetWidth),
      maxY: 0,
      minY: -(layout.totalH - wrapper.offsetHeight),
    });

    // Heading reveal
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 42, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.0, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 84%" },
        }
      );

      // Hint automatique : le mural glisse légèrement à l'arrivée
      gsap.timeline({
        scrollTrigger: { trigger: wrapper, start: "top 80%", once: true },
      })
        .fromTo(wall, { opacity: 0 }, { opacity: 1, duration: 0.85, ease: "power2.out" })
        .to(wall, { x: -100, duration: 1.6, ease: "power2.inOut" }, 0.35)
        .to(wall, { x: -40,  duration: 1.1, ease: "power3.out" });
    }, sectionRef);

    // Draggable
    const [drag] = Draggable.create(wall, {
      type: "x,y",
      inertia: true,
      edgeResistance: 0.82,
      cursor: "inherit",
      activeCursor: "inherit",
      bounds: getBounds(),
      onPress() { gsap.killTweensOf(wall); },
    });

    const onResize = () => drag.applyBounds(getBounds());
    window.addEventListener("resize", onResize);

    return () => {
      ctx.revert();
      drag.kill();
      window.removeEventListener("resize", onResize);
    };
  }, [layout]);

  return (
    <section
      ref={sectionRef}
      id="chantier"
      className="bg-[#000000] overflow-hidden"
    >

      {/* ── Titre minimaliste ─────────────────────────────────────────── */}
      <div
        ref={headingRef}
        className="pt-36 pb-14 px-6 text-center"
        style={{ opacity: 0 }}
      >
        <p className="text-[#D4AF37] tracking-[0.48em] text-[10px] uppercase mb-5 font-light">
          Vie de Chantier
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
            fontSize: "clamp(1.8rem, 4vw, 4.5rem)",
            fontWeight: 700,
            fontStyle: "italic",
            color: "#D4AF37",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          L&apos;Exigence du Terrain
        </h2>

        {/* Hint ↔ */}
        <div className="mt-7 flex items-center justify-center gap-3 pointer-events-none">
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path d="M18 5H2M5 1.5L1 5l4 3.5" stroke="rgba(245,240,232,0.20)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[#F5F0E8]/20 text-[8px] tracking-[0.45em] uppercase font-light">
            Glissez
          </span>
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path d="M0 5h16M13 1.5l4 3.5-4 3.5" stroke="rgba(245,240,232,0.20)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* ── Mural draggable ───────────────────────────────────────────── */}
      <div
        ref={wrapperRef}
        className="relative overflow-hidden select-none"
        style={{ height: "clamp(420px, 66vh, 800px)", touchAction: "none" }}
      >
        {layout && (
          <div
            ref={wallRef}
            style={{
              position: "absolute",
              width:  `${layout.totalW}px`,
              height: `${layout.totalH}px`,
              willChange: "transform",
              opacity: 0,
            }}
          >
            {layout.items.map((item, i) => (
              <div
                key={i}
                className="chantier-photo"
                style={{
                  position: "absolute",
                  left:     item.left,
                  top:      item.top,
                  width:    item.w,
                  height:   item.h,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={`/viedechantier/${item.src}`}
                  alt=""
                  fill
                  draggable={false}
                  className="object-cover pointer-events-none"
                  sizes="360px"
                />
              </div>
            ))}
          </div>
        )}

        {/* Fondus périphériques — immersion "pellicule flottante" */}
        <div className="pointer-events-none absolute inset-y-0 left-0  z-10 w-20"  style={{ background: "linear-gradient(to right, #000000, transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40"  style={{ background: "linear-gradient(to left,  #000000, transparent)" }} />
        <div className="pointer-events-none absolute inset-x-0 top-0   z-10 h-12"  style={{ background: "linear-gradient(to bottom, #000000, transparent)" }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20" style={{ background: "linear-gradient(to top,    #000000, transparent)" }} />
      </div>

      <div style={{ height: "88px" }} />
    </section>
  );
}
