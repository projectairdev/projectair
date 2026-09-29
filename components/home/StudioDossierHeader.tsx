'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { navigateTo } from '@/src/navigation';
import { FadeInView } from '@/components/ui/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';

interface StudioDossierHeaderProps {
  onOpenBooking?: () => void;
}

export const StudioDossierHeader: React.FC<StudioDossierHeaderProps> = ({
  onOpenBooking,
}) => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-11 border-b border-theme">
      {/* 1. Asymmetric Section Intro */}
      <FadeInView direction="up" distance={8} blur={true}>
        <div className="mb-6 sm:mb-8 max-w-3xl">
          <div className="text-xs font-mono tracking-widest text-teal-400 uppercase mb-2 font-semibold">
            ENGAGEMENT DISCIPLINES · TWO PATHWAYS
          </div>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-heading font-bold tracking-tight leading-[1.12]">
            Build from foundation. Or rescue what is already broken.
          </h2>
          <p className="font-sans text-sm sm:text-base text-secondary mt-3 leading-relaxed">
            We operate across two distinct disciplines: engineering complete greenfield platforms to institutional standards, or conducting forensic audits to fix fragile AI-built codebases before they crash in production.
          </p>
        </div>
      </FadeInView>

      {/* 2. Asymmetric Two-Track Grid with Staggered Motion */}
      <StaggerContainer
        staggerDelay={0.1}
        className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch"
      >
        {/* TRACK 01: Full-Cycle Greenfield Engineering (7 Cols - Expansive) */}
        <StaggerItem direction="up" distance={10} scale={true} className="lg:col-span-7 flex flex-col">
          <div className="h-full rounded-3xl p-6 sm:p-8 surface-card border border-theme flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-theme">
                <span className="text-xs font-mono text-teal-400 font-semibold tracking-wider uppercase">
                  Track 01 · Greenfield
                </span>
                <span className="text-xs font-sans text-secondary">
                  Full-Cycle Systems Engineering
                </span>
              </div>

              <h3 className="heading-display text-xl sm:text-2xl text-heading font-bold tracking-tight">
                You have a vision. We engineer the complete system.
              </h3>

              <p className="font-sans text-xs sm:text-sm text-secondary leading-relaxed mt-3">
                From high-concurrency SaaS applications to autonomous AI agent state machines. We handle system architecture, relational database design, front-end development, and automated test suites. Zero junior engineers. Zero throwaway prototypes.
              </p>

              {/* Invariant Commitments */}
              <div className="my-6 space-y-2.5 pt-5 border-t border-theme">
                {[
                  { title: 'Production Web & Mobile Platforms', detail: 'Next.js App Router · TypeScript 5.7+ Strict' },
                  { title: 'Autonomous AI Agent State Machines', detail: 'LangGraph · Deterministic Loops · Cost Breakers' },
                  { title: 'Relational Database Architecture', detail: 'PostgreSQL · Strict Migration Locks · Redis Sentinel' },
                  { title: 'Continuous Verification CI/CD', detail: 'Playwright E2E · Stryker Mutation Suites' },
                ].map((spec, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs">
                    <span className="font-sans text-heading font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                      <span>{spec.title}</span>
                    </span>
                    <span className="font-mono text-muted text-[11px] sm:text-right">{spec.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-theme flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
              <button
                type="button"
                onClick={() => navigateTo('/capabilities')}
                className="font-sans text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Explore full capabilities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {onOpenBooking && (
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-full bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans text-xs font-semibold tracking-wider transition-all shadow-[0_0_16px_rgba(45,212,191,0.25)] cursor-pointer text-center"
                >
                  Schedule Scoping Call →
                </button>
              )}
            </div>
          </div>
        </StaggerItem>

        {/* TRACK 02: Codebase Rescue & Forensic Audit (5 Cols - Contrasting Amber Tone) */}
        <StaggerItem direction="up" distance={10} scale={true} className="lg:col-span-5 flex flex-col">
          <div className="h-full rounded-3xl p-6 sm:p-8 rescue-track-card border border-orange-500/20 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-orange-500/15">
                <span className="text-xs font-mono text-orange-400 font-semibold tracking-wider uppercase">
                  Track 02 · Forensic Rescue
                </span>
                <span className="text-xs font-mono text-orange-400/90 font-medium">
                  Fixed-Price Tiers
                </span>
              </div>

              <h3 className="heading-display text-xl sm:text-2xl text-heading font-bold tracking-tight">
                You built with AI or freelancers. We make it safe to scale.
              </h3>

              <p className="font-sans text-xs sm:text-sm text-secondary leading-relaxed mt-3">
                Vibe-coded prototypes and rushed agency code commonly leak API keys, mix up user data via IDOR, and fail under concurrency. We inspect your repository, identify critical vulnerabilities, and author direct production pull requests.
              </p>

              {/* Quick Pricing Summary */}
              <div className="my-5 p-4 rounded-2xl bg-orange-950/20 border border-orange-500/25 space-y-2.5">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-orange-500/20">
                  <span className="font-sans text-heading font-semibold">Diagnostic Quick Scan</span>
                  <span className="font-mono text-orange-400 font-bold">$249 / 48 hrs</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-sans text-heading font-semibold">Full Audit + Code Fix</span>
                  <span className="font-mono text-orange-400 font-bold">$899 – $1,499</span>
                </div>
                <p className="font-sans text-[11px] text-secondary pt-1 leading-relaxed">
                  Includes mutual NDA, multi-tenant IDOR audit, AST mutation score, and direct PR remediations.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-orange-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
              <button
                type="button"
                onClick={() => navigateTo('/pricing')}
                className="font-sans text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>View audit tiers &amp; deliverables</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {onOpenBooking && (
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="font-sans text-xs text-secondary hover:text-heading transition-colors cursor-pointer"
                >
                  Book triage call
                </button>
              )}
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
};

export default StudioDossierHeader;
