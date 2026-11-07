"use client";

import { useState, useCallback } from "react";
import Header            from "@/components/Header";
import HeroSection       from "@/components/HeroSection";
import ExpertiseSection  from "@/components/ExpertiseSection";
import EngagementSection from "@/components/EngagementSection";
import ManifestSection from "@/components/ManifestSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessusSection from "@/components/ProcessusSection";
import ChantierSection  from "@/components/ChantierSection";
import BlogSection     from "@/components/BlogSection";
import ContactSection  from "@/components/ContactSection";
import Footer          from "@/components/Footer";
import Preloader       from "@/components/Preloader";
import ConstructionExperience from "@/components/ConstructionExperience";

export default function Home() {
  const [ready, setReady] = useState(false);
  const completeIntro = useCallback(() => setReady(true), []);

  return (
    <>
      {!ready && <Preloader onComplete={completeIntro} />}

      <main>
        <Header />

        {/* 1. Première impression */}
        <HeroSection isReady={ready} />

        <ConstructionExperience />

        {/* 2. Notre expertise */}
        <ExpertiseSection />

        {/* 3. L'engagement LPM */}
        <EngagementSection />

        {/* 4. Qui est Loïc Petit */}
        <ManifestSection />

        {/* 5. Ce que LPM a bâti */}
        <PortfolioSection />

        {/* 6. Comment LPM travaille */}
        <ProcessusSection />

        {/* 7. Réalité terrain */}
        <ChantierSection />

        {/* 8. Conseils & Blog SEO */}
        <BlogSection />

        {/* 9. Prise de contact */}
        <ContactSection />

        <Footer />
      </main>
    </>
  );
}
