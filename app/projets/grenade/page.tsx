import type { Metadata } from "next";
import GrenadeClient from "./GrenadeClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Construction Maison Individuelle à Grenade-sur-Garonne | LPM",
  description:
    "Construction de maison individuelle à Grenade-sur-Garonne (Haute-Garonne), au nord de Toulouse : de la conception au suivi de chantier, par LPM.",
  alternates: { canonical: "/projets/grenade" },
  openGraph: {
    title: "Construction Maison Individuelle à Grenade-sur-Garonne | LPM",
    description:
      "Construction de maison individuelle à Grenade-sur-Garonne, en Haute-Garonne : pilotée de bout en bout par LPM.",
    url: "https://lpmoe.com/projets/grenade",
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/projets/grenade/couverture.jpg", width: 2048, height: 1536, alt: "Maison individuelle LPM à Grenade-sur-Garonne" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Maison Individuelle à Grenade-sur-Garonne | LPM",
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
