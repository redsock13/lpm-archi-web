import type { Metadata } from "next";
import FrontonClient from "./FrontonClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

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
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/projets/fronton/couverture.jpg", width: 4000, height: 1848, alt: "Maison individuelle LPM à Fronton" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison individuelle à Fronton (31) | Réalisation LPM Maître d'Œuvre",
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
