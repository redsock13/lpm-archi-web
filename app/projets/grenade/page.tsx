import type { Metadata } from "next";
import GrenadeClient from "./GrenadeClient";

export const metadata: Metadata = {
  title: "Maison individuelle à Grenade-sur-Garonne (31) | Réalisation LPM Maître d'Œuvre",
  description:
    "Réalisation LPM à Grenade-sur-Garonne, au nord de Toulouse (Haute-Garonne) : maison individuelle sur-mesure, de la conception au suivi de chantier.",
  alternates: { canonical: "/projets/grenade" },
  openGraph: {
    title: "Maison individuelle à Grenade-sur-Garonne (31) | Réalisation LPM Maître d'Œuvre",
    description:
      "Réalisation LPM à Grenade-sur-Garonne, en Haute-Garonne : maison individuelle sur-mesure pilotée de bout en bout.",
    url: "https://lpmoe.com/projets/grenade",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <GrenadeClient />;
}
