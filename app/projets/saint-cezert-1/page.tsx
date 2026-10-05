import type { Metadata } from "next";
import SaintCezert1Client from "./SaintCezert1Client";

export const metadata: Metadata = {
  title: "Maison individuelle à Saint-Cézert (31) — Chemin d'Empiroulet | Réalisation LPM",
  description:
    "Réalisation LPM à Saint-Cézert, à une quinzaine de kilomètres au nord de Toulouse (Haute-Garonne) : maison individuelle sur-mesure, chemin d'Empiroulet.",
  alternates: { canonical: "/projets/saint-cezert-1" },
  openGraph: {
    title: "Maison individuelle à Saint-Cézert (31) — Chemin d'Empiroulet | Réalisation LPM",
    description:
      "Réalisation LPM à Saint-Cézert, en Haute-Garonne : maison individuelle sur-mesure pilotée de bout en bout.",
    url: "https://lpmoe.com/projets/saint-cezert-1",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <SaintCezert1Client />;
}
