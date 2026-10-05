import type { Metadata } from "next";
import AgenClient from "./AgenClient";

export const metadata: Metadata = {
  title: "Maison individuelle à Agen (47) | Réalisation LPM Maître d'Œuvre",
  description:
    "Découvrez cette maison individuelle construite à Agen, dans le Lot-et-Garonne (47000), par LPM : conception, permis de construire et suivi de chantier assurés de A à Z.",
  alternates: { canonical: "/projets/agen" },
  openGraph: {
    title: "Maison individuelle à Agen (47) | Réalisation LPM Maître d'Œuvre",
    description:
      "Réalisation LPM à Agen, dans le Lot-et-Garonne : maison individuelle sur-mesure, de la conception au suivi de chantier.",
    url: "https://lpmoe.com/projets/agen",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return <AgenClient />;
}
