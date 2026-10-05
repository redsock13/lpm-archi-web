import type { Metadata } from "next";
import LevignacClient from "./LevignacClient";

export const metadata: Metadata = {
  title: "Maison individuelle à Lévignac (31) | Réalisation LPM Maître d'Œuvre",
  description:
    "Réalisation LPM à Lévignac, en Haute-Garonne : maison individuelle sur-mesure répartie sur trois parcelles, pilotée de la conception à la livraison.",
  alternates: { canonical: "/projets/levignac" },
  openGraph: {
    title: "Maison individuelle à Lévignac (31) | Réalisation LPM Maître d'Œuvre",
    description:
      "Réalisation LPM à Lévignac, en Haute-Garonne : maison individuelle sur-mesure pilotée de bout en bout.",
    url: "https://lpmoe.com/projets/levignac",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <LevignacClient />;
}
