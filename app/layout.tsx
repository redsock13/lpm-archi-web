import type { Metadata, Viewport } from "next";
import { Sora, Playfair_Display, Dancing_Script } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  metadataBase: new URL("https://www.lpmoe.com"),
  title: "Maître d’œuvre à Grenade et en Haute-Garonne | LPM",
  description:
    "LPM, maître d’œuvre à Grenade : conception de maisons sur mesure, permis de construire, coordination et suivi de chantier en Haute-Garonne.",
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
    title: "Maître d’œuvre à Grenade et en Haute-Garonne | LPM",
    description:
      "Votre maison sur mesure avec LPM à Grenade : conception, permis de construire et suivi de chantier en Haute-Garonne.",
    url: "https://www.lpmoe.com",
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
    title: "Maître d’œuvre à Grenade et en Haute-Garonne | LPM",
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
              "@id": "https://www.lpmoe.com/#entreprise",
              "name": "LPM",
              "description": "Maître d'œuvre spécialisé en construction de maisons individuelles sur mesure en Haute-Garonne et Tarn-et-Garonne.",
              "url": "https://www.lpmoe.com",
              "image": "https://www.lpmoe.com/lpm-logo.png",
              "logo": "https://www.lpmoe.com/lpm-logo.png",
              "hasMap": "https://www.google.com/maps?cid=6594430834115657126",
              "telephone": "+33782922112",
              "email": "contact@lpmoe.com",
              "founder": { "@type": "Person", "name": "Loïc Petit" },
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00",
              }],
              "areaServed": [
                { "@type": "AdministrativeArea", "name": "Haute-Garonne" },
                { "@type": "AdministrativeArea", "name": "Tarn-et-Garonne" },
                { "@type": "City", "name": "Agen" },
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Missions de maîtrise d’œuvre",
                "itemListElement": [
                  "Conception de maisons individuelles sur mesure",
                  "Accompagnement au permis de construire",
                  "Coordination des entreprises et suivi de chantier",
                  "Assistance à la réception des travaux",
                ].map((name) => ({
                  "@type": "Offer",
                  "itemOffered": { "@type": "Service", name },
                })),
              },
              "knowsAbout": ["RE2020", "Maîtrise d'œuvre", "Construction maison neuve"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "7 rue des Églantiers",
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
      <GoogleAnalytics gaId="G-BKB4VQ6BC8" />
    </html>
  );
}
