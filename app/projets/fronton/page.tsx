import type { Metadata } from "next";
import FrontonClient from "./FrontonClient";

export const metadata: Metadata = {
  title: "Maison individuelle à Fronton (31) | Réalisation LPM Maître d'Œuvre",
  description:
    "Réalisation LPM à Fronton, en Haute-Garonne (31620) : maison individuelle sur-mesure pilotée de la conception à la réception des travaux.",
  alternates: { canonical: "/projets/fronton" },
  openGraph: {
    title: "Maison individuelle à Fronton (31) | Réalisation LPM Maître d'Œuvre",
    description:
      "Réalisation LPM à Fronton, en Haute-Garonne : maison individuelle sur-mesure, de la conception au suivi de chantier.",
    url: "https://lpmoe.com/projets/fronton",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <FrontonClient />;
}
