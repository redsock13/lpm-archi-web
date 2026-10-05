import type { Metadata } from "next";
import SaintCezert2Client from "./SaintCezert2Client";

export const metadata: Metadata = {
  title: "Maison individuelle à Saint-Cézert (31) — Parcelle 238 | Réalisation LPM",
  description:
    "Seconde réalisation LPM à Saint-Cézert, en Haute-Garonne : maison individuelle sur-mesure, parcelle 238, pilotée de la conception à la livraison.",
  alternates: { canonical: "/projets/saint-cezert-2" },
  openGraph: {
    title: "Maison individuelle à Saint-Cézert (31) — Parcelle 238 | Réalisation LPM",
    description:
      "Réalisation LPM à Saint-Cézert, en Haute-Garonne : maison individuelle sur-mesure pilotée de bout en bout.",
    url: "https://lpmoe.com/projets/saint-cezert-2",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <SaintCezert2Client />;
}
