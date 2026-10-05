import type { Metadata } from "next";
import AgenClient from "./AgenClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Construction Maison Individuelle à Agen (47) | LPM Maître d'Œuvre",
  description:
    "Construction de maison individuelle à Agen (Lot-et-Garonne) : conception, permis de construire et suivi de chantier assurés de A à Z par LPM, maître d'œuvre.",
  alternates: { canonical: "/projets/agen" },
  openGraph: {
    title: "Construction Maison Individuelle à Agen (47) | LPM Maître d'Œuvre",
    description:
      "Construction de maison individuelle à Agen, dans le Lot-et-Garonne : de la conception au suivi de chantier, par LPM.",
    url: "https://lpmoe.com/projets/agen",
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/projets/agen/couverture.jpg", width: 2000, height: 1126, alt: "Maison individuelle LPM à Agen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Maison Individuelle à Agen (47) | LPM Maître d'Œuvre",
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
