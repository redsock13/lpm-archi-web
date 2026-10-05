import type { Metadata, Viewport } from "next";
import { Sora, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import GrainOverlay from "@/components/GrainOverlay";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // dynamic island / notch iPhone
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lpmoe.com"),
  title: "LPM Maître d'Œuvre Haute-Garonne | Maisons Sur-Mesure",
  description:
    "LPM, votre maître d'œuvre en Haute-Garonne. Construction de maison sur mesure, norme RE2020, coûts maîtrisés et artisans qualifiés. De la conception aux clés.",
  alternates: { canonical: "/" },
  keywords: [
    "maître d'œuvre Haute-Garonne",
    "construction maison individuelle",
    "maison sur mesure Toulouse",
    "maître d'œuvre Tarn-et-Garonne",
    "construction RE2020",
    "pilotage chantier",
    "permis de construire",
  ],
  openGraph: {
    title: "LPM Maître d'Œuvre Haute-Garonne | Maisons Sur-Mesure",
    description:
      "Construction de maison sur mesure en Haute-Garonne. Maîtrise d'œuvre complète, norme RE2020, artisans qualifiés. Devis gratuit.",
    url: "https://lpmoe.com",
    siteName: "LPM — Maître d'Œuvre Haute-Garonne",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/hero-bg-poster.jpg",
        width: 1280,
        height: 720,
        alt: "LPM — Maître d'œuvre, construction de maison individuelle sur-mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LPM Maître d'Œuvre Haute-Garonne | Maisons Sur-Mesure",
    description:
      "Construction de maison sur mesure en Haute-Garonne. Maîtrise d'œuvre complète, norme RE2020, artisans qualifiés.",
    images: ["/hero-bg-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "LPM",
              "description": "Maître d'œuvre spécialisé en construction de maisons individuelles sur mesure en Haute-Garonne et Tarn-et-Garonne.",
              "url": "https://lpmoe.com",
              "image": "https://lpmoe.com/lpm-logo.png",
              "telephone": "+33782922112",
              "email": "contact@lpmoe.com",
              "founder": { "@type": "Person", "name": "Loïc Petit" },
              "areaServed": [
                { "@type": "AdministrativeArea", "name": "Haute-Garonne" },
                { "@type": "AdministrativeArea", "name": "Tarn-et-Garonne" },
              ],
              "serviceType": [
                "Construction de maison individuelle",
                "Maîtrise d'œuvre",
                "Pilotage de chantier",
                "Dépôt permis de construire",
              ],
              "knowsAbout": ["RE2020", "Maîtrise d'œuvre", "Construction maison neuve"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Grenade",
                "postalCode": "31330",
                "addressRegion": "Haute-Garonne",
                "addressCountry": "FR",
              },
            }),
          }}
        />
      </head>
      <body className={`${sora.variable} ${playfair.variable} ${dancing.variable} font-sans antialiased`}>
        <SmoothScrollProvider />
        <GrainOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
