import type { Metadata } from "next";
import BouillacClient from "./BouillacClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Construction Maison Individuelle à Bouillac (82) | LPM Maître d'Œuvre",
  description:
    "Construction de maison individuelle à Bouillac (Tarn-et-Garonne) : démolition, conception, permis et suivi de chantier assurés de bout en bout par LPM.",
  alternates: { canonical: "/projets/bouillac" },
  openGraph: {
    title: "Construction Maison Individuelle à Bouillac (82) | LPM Maître d'Œuvre",
    description:
      "Construction de maison individuelle à Bouillac, dans le Tarn-et-Garonne : pilotée de bout en bout par LPM.",
    url: "https://lpmoe.com/projets/bouillac",
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/projets/bouillac/couverture.jpg", width: 1200, height: 1600, alt: "Maison individuelle LPM à Bouillac" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Maison Individuelle à Bouillac (82) | LPM Maître d'Œuvre",
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
