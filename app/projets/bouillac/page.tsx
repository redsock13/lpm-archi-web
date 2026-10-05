import type { Metadata } from "next";
import BouillacClient from "./BouillacClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Maison individuelle à Bouillac (82) | Réalisation LPM Maître d'Œuvre",
  description:
    "Réalisation LPM à Bouillac, dans le Tarn-et-Garonne (82600) : maison individuelle sur-mesure, de la conception à la réception des travaux.",
  alternates: { canonical: "/projets/bouillac" },
  openGraph: {
    title: "Maison individuelle à Bouillac (82) | Réalisation LPM Maître d'Œuvre",
    description:
      "Réalisation LPM à Bouillac, dans le Tarn-et-Garonne : maison individuelle sur-mesure pilotée de bout en bout.",
    url: "https://lpmoe.com/projets/bouillac",
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/projets/bouillac/couverture.jpg", width: 1200, height: 1600, alt: "Maison individuelle LPM à Bouillac" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison individuelle à Bouillac (82) | Réalisation LPM Maître d'Œuvre",
    images: ["/projets/bouillac/couverture.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Réalisations", path: "/#portfolio" },
          { name: "Bouillac", path: "/projets/bouillac" },
        ]}
      />
      <BouillacClient />
    </>
  );
}
