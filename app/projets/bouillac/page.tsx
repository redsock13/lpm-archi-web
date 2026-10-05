import type { Metadata } from "next";
import BouillacClient from "./BouillacClient";

export const metadata: Metadata = {
  title: "Maison individuelle à Bouillac (82) | Réalisation LPM Maître d'Œuvre",
  description:
    "Réalisation LPM à Bouillac, dans le Tarn-et-Garonne (82600) : maison individuelle sur-mesure, de la conception à la réception des travaux.",
  alternates: { canonical: "/projets/bouillac" },
  openGraph: {
    title: "Maison individuelle à Bouillac (82) | Réalisation LPM Maître d'Œuvre",
    description:
      "Réalisation LPM à Bouillac, dans le Tarn-et-Garonne : maison individuelle sur-mesure pilotée de bout en bout.",
    url: "https://lpmoe.com/projets/bouillac",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <BouillacClient />;
}
