'use client';

import React, { useState, useEffect } from 'react';
import { CinematicEntryHero } from '@/components/hero/CinematicEntryHero';
import { Navbar } from '@/components/navigation/Navbar';
import { ArchitectureBookingModal } from '@/components/modals/ArchitectureBookingModal';
import { StudioDossierHeader } from '@/components/home/StudioDossierHeader';
import { MarketTelemetry } from '@/components/home/MarketTelemetry';
import { CodeUIMirror } from '@/components/home/CodeUIMirror';
import { TechStackTicker } from '@/components/home/TechStackTicker';
import { StudioDirectoryBento } from '@/components/home/StudioDirectoryBento';
import { DossierCTA } from '@/components/home/DossierCTA';
import { StudioFooter } from '@/components/sections/StudioFooter';
import { FadeInView } from '@/components/ui/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';

export default function Page() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    // Initial First Paint: Lock scroll on load to ensure pure cinematic experience
    if (typeof window !== 'undefined') {
      if (window.scrollY < 20 && !hasEntered) {
        document.body.style.overflow = 'hidden';
      } else {
        setHasEntered(true);
        document.body.style.overflow = 'auto';
      }
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [hasEntered]);

  const handleEnterStudio = () => {
    setHasEntered(true);
    document.body.style.overflow = 'auto';
    const el = document.getElementById('studio-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen text-primary">
      {/* 
        1. True First-Paint Experience: Full-Viewport Cinematic Entry Hero
        Measured, deliberate 12-second sequence with instant skip on scroll or keypress.
      */}
      <CinematicEntryHero
        onEnterStudio={handleEnterStudio}
        isCompleted={hasEntered}
      />

      {/* 
        2. Clean, Simple, Professional Sticky Top Navigation Bar
      */}
      <Navbar
        onBookCall={() => setIsBookingOpen(true)}
        isEntryCompleted={hasEntered}
      />

      {/* 
        3. Direct Technical Scoping Call Booking Modal
      */}
      <ArchitectureBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* 
        4. Main Studio Content (#studio-content)
        Focused, deliberate, editorial homepage with real engineering personality.
      */}
      <main id="studio-content" className="relative z-10 w-full">
        <div id="studio-dossier" className="relative z-10 border-t border-theme">
          
          {/* A. Editorial Studio Manifesto & Positioning Statement */}
          <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-11 border-b border-theme">
            <FadeInView direction="up" distance={10} blur={true}>
              <div className="text-xs font-mono tracking-widest text-teal-400 uppercase mb-2.5 font-semibold">
                INSTITUTIONAL ENGINEERING STUDIO · BENGALURU &amp; SAN FRANCISCO
              </div>

              <h1 className="heading-display text-3xl sm:text-5xl lg:text-6xl text-heading font-bold tracking-tight max-w-5xl leading-[1.08]">
                Software is built by prompting now. Most of it will rot before the year is out.
              </h1>
            </FadeInView>

            <StaggerContainer
              staggerDelay={0.08}
              delayStart={0.08}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 mt-5 pt-5 border-t border-theme text-secondary font-sans text-sm sm:text-base leading-relaxed"
            >
              <StaggerItem direction="up" distance={8}>
                <p>
                  Vibe-coding created a seductive illusion: that typing natural language into an LLM produces production software. In reality, it yields syntactically pleasing prototypes that lack boundary validation, leak API keys, and corrupt database state under real customer concurrency.
                </p>
              </StaggerItem>
              <StaggerItem direction="up" distance={8}>
                <p>
                  We are <strong className="text-heading">Project AIR</strong>. An engineering studio for founders who refuse to ship fragile software. We enforce static soundness, 100% mutation testing on core logic, and engine-level multi-tenant isolation. When software matters, you don&apos;t prompt it. You engineer it.
                </p>
              </StaggerItem>
            </StaggerContainer>
          </section>

          {/* B. Two-Track Tactical Architecture (Asymmetric: Greenfield vs Rescue) */}
          <StudioDossierHeader
            onOpenBooking={() => setIsBookingOpen(true)}
          />

          {/* C. Key Stats: 2026 Codebase Empirical Telemetry Strip */}
          <MarketTelemetry />

          {/* D. Verified Tech Stack Ticker (Quiet, Minimal glide) */}
          <TechStackTicker />

          {/* E. The Code-to-UI Interactive Mirror Demonstration */}
          <CodeUIMirror />

          {/* F. Studio Index (Clean Editorial Directory) */}
          <StudioDirectoryBento />

          {/* G. High-Conversion Dossier Call-To-Action */}
          <DossierCTA
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        </div>

        {/* Studio Institutional Footer */}
        <StudioFooter
          onOpenBooking={() => setIsBookingOpen(true)}
        />
      </main>
    </div>
  );
}
