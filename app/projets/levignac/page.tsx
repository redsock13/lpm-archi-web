import type { Metadata } from "next";
import LevignacClient from "./LevignacClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Construction Maison Individuelle à Lévignac (31) | LPM Maître d'Œuvre",
  description:
    "Construction de maison individuelle à Lévignac (Haute-Garonne), sur trois parcelles réunies : de la conception à la livraison, par LPM.",
  alternates: { canonical: "/projets/levignac" },
  openGraph: {
    title: "Construction Maison Individuelle à Lévignac (31) | LPM Maître d'Œuvre",
    description:
      "Construction de maison individuelle à Lévignac, en Haute-Garonne : pilotée de bout en bout par LPM.",
    url: "https://lpmoe.com/projets/levignac",
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/projets/levignac/couverture.jpg", width: 2000, height: 1500, alt: "Maison individuelle LPM à Lévignac" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Maison Individuelle à Lévignac (31) | LPM Maître d'Œuvre",
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
