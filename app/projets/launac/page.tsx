import type { Metadata } from "next";
import LaunacClient from "./LaunacClient";

export const metadata: Metadata = {
  title: "Maison individuelle à Launac (31) | Réalisation LPM Maître d'Œuvre",
  description:
    "Réalisation LPM à Launac, en Haute-Garonne (31330) : maison individuelle sur-mesure, de la conception à la livraison.",
  alternates: { canonical: "/projets/launac" },
  openGraph: {
    title: "Maison individuelle à Launac (31) | Réalisation LPM Maître d'Œuvre",
    description:
      "Réalisation LPM à Launac, en Haute-Garonne : maison individuelle sur-mesure pilotée de bout en bout.",
    url: "https://lpmoe.com/projets/launac",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <LaunacClient />;
}
