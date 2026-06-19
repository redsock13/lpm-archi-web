"use client";

import { useState } from "react";
import Header            from "@/components/Header";
import HeroSection       from "@/components/HeroSection";
import EngagementSection from "@/components/EngagementSection";
import ManifestSection from "@/components/ManifestSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessusSection from "@/components/ProcessusSection";
import ChantierSection  from "@/components/ChantierSection";
import BlogSection     from "@/components/BlogSection";
import ContactSection  from "@/components/ContactSection";
import Footer          from "@/components/Footer";
import Preloader       from "@/components/Preloader";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && <Preloader onComplete={() => setReady(true)} />}

      <main>
        <Header />

        {/* 1. Première impression */}
        <HeroSection isReady={ready} />

        {/* 2. L'engagement LPM */}
        <EngagementSection />

        {/* 3. Qui est Loïc Petit */}
        <ManifestSection />

        {/* 4. Ce que LPM a bâti */}
        <PortfolioSection />

        {/* 5. Comment LPM travaille */}
        <ProcessusSection />

        {/* 6. Réalité terrain */}
        <ChantierSection />

        {/* 7. Conseils & Blog SEO */}
        <BlogSection />

        {/* 8. Prise de contact */}
        <ContactSection />

        <Footer />
      </main>
    </>
  );
}
