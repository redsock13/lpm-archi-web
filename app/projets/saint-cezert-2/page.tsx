import type { Metadata } from "next";
import SaintCezert2Client from "./SaintCezert2Client";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Construction Maison Individuelle à Saint-Cézert (31) — Parcelle 238 | LPM",
  description:
    "Construction de maison individuelle à Saint-Cézert (Haute-Garonne), parcelle 238 : de la conception à la livraison, par LPM maître d'œuvre.",
  alternates: { canonical: "/projets/saint-cezert-2" },
  openGraph: {
    title: "Construction Maison Individuelle à Saint-Cézert (31) — Parcelle 238 | LPM",
    description:
      "Construction de maison individuelle à Saint-Cézert, en Haute-Garonne : pilotée de bout en bout par LPM.",
    url: "https://www.lpmoe.com/projets/saint-cezert-2",
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/projets/Saint Cezert 2/couverture.jpg", width: 2958, height: 2052, alt: "Maison individuelle LPM à Saint-Cézert, parcelle 238" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Maison Individuelle à Saint-Cézert (31) — Parcelle 238 | LPM",
    images: ["/projets/Saint Cezert 2/couverture.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Réalisations", path: "/#portfolio" },
          { name: "Saint-Cézert — Parcelle 238", path: "/projets/saint-cezert-2" },
        ]}
      />
      <SaintCezert2Client />
    </>
  );
}
