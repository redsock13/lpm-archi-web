import type { Metadata } from "next";
import AgenClient from "./AgenClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

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
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/projets/agen/couverture.jpg", width: 2000, height: 1126, alt: "Maison individuelle LPM à Agen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison individuelle à Agen (47) | Réalisation LPM Maître d'Œuvre",
    images: ["/projets/agen/couverture.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Réalisations", path: "/#portfolio" },
          { name: "Agen", path: "/projets/agen" },
        ]}
      />
      <AgenClient />
    </>
  );
}
