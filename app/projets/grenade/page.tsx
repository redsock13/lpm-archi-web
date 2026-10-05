import type { Metadata } from "next";
import GrenadeClient from "./GrenadeClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

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
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/projets/grenade/couverture.jpg", width: 2048, height: 1536, alt: "Maison individuelle LPM à Grenade-sur-Garonne" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison individuelle à Grenade-sur-Garonne (31) | Réalisation LPM Maître d'Œuvre",
    images: ["/projets/grenade/couverture.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Réalisations", path: "/#portfolio" },
          { name: "Grenade-sur-Garonne", path: "/projets/grenade" },
        ]}
      />
      <GrenadeClient />
    </>
  );
}
