import type { Metadata } from "next";
import FrontonClient from "./FrontonClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Construction Maison Individuelle à Fronton (31) | LPM Maître d'Œuvre",
  description:
    "Construction de maison individuelle à Fronton (Haute-Garonne, 31620) : pilotée de la conception à la réception des travaux par LPM.",
  alternates: { canonical: "/projets/fronton" },
  openGraph: {
    title: "Construction Maison Individuelle à Fronton (31) | LPM Maître d'Œuvre",
    description:
      "Construction de maison individuelle à Fronton, en Haute-Garonne : de la conception au suivi de chantier.",
    url: "https://lpmoe.com/projets/fronton",
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/projets/fronton/couverture.jpg", width: 4000, height: 1848, alt: "Maison individuelle LPM à Fronton" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Maison Individuelle à Fronton (31) | LPM Maître d'Œuvre",
    images: ["/projets/fronton/couverture.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Réalisations", path: "/#portfolio" },
          { name: "Fronton", path: "/projets/fronton" },
        ]}
      />
      <FrontonClient />
    </>
  );
}
