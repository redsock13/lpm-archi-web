import type { Metadata } from "next";
import LaunacClient from "./LaunacClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Construction Maison Individuelle à Launac (31) | LPM Maître d'Œuvre",
  description:
    "Construction de maison individuelle à Launac (Haute-Garonne, 31330) : de la conception à la livraison, par LPM maître d'œuvre.",
  alternates: { canonical: "/projets/launac" },
  openGraph: {
    title: "Construction Maison Individuelle à Launac (31) | LPM Maître d'Œuvre",
    description:
      "Construction de maison individuelle à Launac, en Haute-Garonne : pilotée de bout en bout par LPM.",
    url: "https://lpmoe.com/projets/launac",
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/projets/launac/couverture.png", width: 1536, height: 1024, alt: "Maison individuelle LPM à Launac" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Maison Individuelle à Launac (31) | LPM Maître d'Œuvre",
    images: ["/projets/launac/couverture.png"],
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Réalisations", path: "/#portfolio" },
          { name: "Launac", path: "/projets/launac" },
        ]}
      />
      <LaunacClient />
    </>
  );
}
