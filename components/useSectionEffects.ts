"use client";

import { useEffect, useState, useSyncExternalStore, type RefObject } from "react";

const desktopQuery = "(min-width: 768px)";
function subscribeDesktop(callback: () => void) {
  const media = window.matchMedia(desktopQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const desktopSnapshot = () => window.matchMedia(desktopQuery).matches;
const serverSnapshot = () => false;

// Keep the content in the server HTML. On mobile, prepare only the effects
// for the section the visitor is approaching, without changing its layout.
export default function useSectionEffects(ref: RefObject<HTMLElement | null>) {
  const desktop = useSyncExternalStore(subscribeDesktop, desktopSnapshot, serverSnapshot);
  const [nearby, setNearby] = useState(false);

  useEffect(() => {
    if (desktop || nearby || !ref.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setNearby(true);
        observer.disconnect();
      }
    }, { rootMargin: "600px 0px" });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [desktop, nearby, ref]);

  return desktop || nearby;
}
