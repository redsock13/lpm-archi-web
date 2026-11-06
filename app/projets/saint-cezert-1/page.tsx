import type { Metadata } from "next";
import SaintCezert1Client from "./SaintCezert1Client";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Construction Maison Individuelle à Saint-Cézert (31) | LPM",
  description:
    "Construction de maison individuelle à Saint-Cézert (Haute-Garonne), chemin d'Empiroulet : de la conception au suivi de chantier, par LPM.",
  alternates: { canonical: "/projets/saint-cezert-1" },
  openGraph: {
    title: "Construction Maison Individuelle à Saint-Cézert (31) | LPM",
    description:
      "Construction de maison individuelle à Saint-Cézert, en Haute-Garonne : pilotée de bout en bout par LPM.",
    url: "https://www.lpmoe.com/projets/saint-cezert-1",
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/projets/Saint Cezert 1/couverture.jpg", width: 2000, height: 924, alt: "Maison individuelle LPM à Saint-Cézert" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Maison Individuelle à Saint-Cézert (31) | LPM",
    images: ["/projets/Saint Cezert 1/couverture.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Réalisations", path: "/#portfolio" },
          { name: "Saint-Cézert — Chemin d'Empiroulet", path: "/projets/saint-cezert-1" },
        ]}
      />
      <SaintCezert1Client />
    </>
  );
}
