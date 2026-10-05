import type { Metadata } from "next";
import SaintCezert1Client from "./SaintCezert1Client";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Maison individuelle à Saint-Cézert (31) — Chemin d'Empiroulet | Réalisation LPM",
  description:
    "Réalisation LPM à Saint-Cézert, à une quinzaine de kilomètres au nord de Toulouse (Haute-Garonne) : maison individuelle sur-mesure, chemin d'Empiroulet.",
  alternates: { canonical: "/projets/saint-cezert-1" },
  openGraph: {
    title: "Maison individuelle à Saint-Cézert (31) — Chemin d'Empiroulet | Réalisation LPM",
    description:
      "Réalisation LPM à Saint-Cézert, en Haute-Garonne : maison individuelle sur-mesure pilotée de bout en bout.",
    url: "https://lpmoe.com/projets/saint-cezert-1",
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/projets/Saint Cezert 1/couverture.jpg", width: 2000, height: 924, alt: "Maison individuelle LPM à Saint-Cézert" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison individuelle à Saint-Cézert (31) — Chemin d'Empiroulet | Réalisation LPM",
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
