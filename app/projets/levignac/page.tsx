import type { Metadata } from "next";
import LevignacClient from "./LevignacClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

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
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/projets/levignac/couverture.jpg", width: 2000, height: 1500, alt: "Maison individuelle LPM à Lévignac" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison individuelle à Lévignac (31) | Réalisation LPM Maître d'Œuvre",
    images: ["/projets/levignac/couverture.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Réalisations", path: "/#portfolio" },
          { name: "Lévignac", path: "/projets/levignac" },
        ]}
      />
      <LevignacClient />
    </>
  );
}
