'use client';

import React from 'react';
import { KineticCounter } from '@/components/ui/KineticCounter';
import { navigateTo } from '@/src/navigation';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { FadeInView } from '@/components/ui/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';

interface MetricItem {
  id: string;
  value: number;
  displayValue?: string;
  prefix?: string;
  suffix?: string;
  accentClass: string;
  badge?: string;
  badgeClass?: string;
  label: string;
  subtext: string;
  citation: string;
  linkText: string;
  relatedRoute: string;
}

export const MarketTelemetry: React.FC = () => {
  // 1. Two Featured Primary Anchor Metrics (Audit Finding vs Verified Outcome)
  const heroMetrics: MetricItem[] = [
    {
      id: 'hero-01',
      value: 18,
      displayValue: '18 / 21',
      accentClass: 'text-orange-400',
      badge: 'FORENSIC AUDIT FINDING',
      badgeClass: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      label: 'Lacked Working Tests',
      subtext:
        'In 18 of 21 audited startup codebases, test suites were either completely absent or superficial happy-path checks that verified zero invariant business logic.',
      citation: 'Project AIR Forensic Triage (n=21)',
      linkText: 'Audit Evidence',
      relatedRoute: '/rigor#three-gates',
    },
    {
      id: 'hero-02',
      value: 0.02,
      displayValue: '< 0.02%',
      accentClass: 'text-emerald-400',
      badge: 'ENGINEERING BENCHMARK',
      badgeClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      label: 'Incident Rate Under Rigor',
      subtext:
        'Production crash rate across systems engineered under our 3-Gate Verification Framework, measured across 140,000+ live transactions with zero double-billing.',
      citation: 'Production SLA Audit Records',
      linkText: '3-Gate Methodology',
      relatedRoute: '/rigor#three-gates',
    },
  ];

  // 2. Four Supporting Telemetry Metrics (Industry Data & Triage Tally)
  const supportingMetrics: MetricItem[] = [
    {
      id: 'stat-01',
      value: 41,
      suffix: '%',
      accentClass: 'text-teal-400',
      label: 'AI-Generated Syntax',
      subtext: 'Share of new production code authored via LLMs without boundary contracts.',
      citation: 'GitClear 2026 Telemetry',
      linkText: 'Details',
      relatedRoute: '/rigor#structural-divide',
    },
    {
      id: 'stat-02',
      value: 39,
      prefix: '+',
      suffix: '%',
      accentClass: 'text-orange-400',
      label: 'Code Churn Surge',
      subtext: 'Year-over-year increase in rapid code deletions and logic regressions in prompted repos.',
      citation: 'Git Repository Benchmark',
      linkText: 'Details',
      relatedRoute: '/capabilities',
    },
    {
      id: 'stat-03',
      value: 17,
      displayValue: '17 / 21',
      accentClass: 'text-primary',
      label: 'Zero Structured Logging',
      subtext: 'Production backends operating with no structured error telemetry or context tracing.',
      citation: 'Forensic Triage (n=21)',
      linkText: 'Case Study',
      relatedRoute: '/teardowns#healthcare-portal',
    },
    {
      id: 'stat-04',
      value: 58,
      suffix: ' Exploits',
      accentClass: 'text-orange-400',
      label: 'Critical Exploits Fixed',
      subtext: 'Severe cross-tenant IDOR vectors, leaked secrets, and payment race conditions resolved.',
      citation: 'Remediation Log',
      linkText: 'Case Study',
      relatedRoute: '/teardowns#fintech-saas',
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-11 border-b border-theme space-y-5 sm:space-y-6">
      {/* Editorial Header */}
      <FadeInView direction="up" distance={8} blur={true}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono tracking-widest text-teal-400 uppercase font-semibold">
              EMPIRICAL RESEARCH · 2026 CODEBASE INTEGRITY TELEMETRY
            </div>
            <h2 className="heading-display text-2xl sm:text-3xl text-heading font-bold tracking-tight">
              The Mathematical Cost of Fragile Software
            </h2>
            <p className="font-sans text-xs sm:text-sm text-secondary max-w-2xl leading-relaxed">
              Data synthesized from 21 forensic startup codebase audits, GitClear longitudinal telemetry, and production deployment logs.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigateTo('/teardowns')}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-400 hover:text-teal-300 transition-colors cursor-pointer group"
            >
              <span>Read 3 Concrete Teardowns</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </FadeInView>

      {/* Layer 1: Two Prominent Hero Anchor Cards with Staggered Motion */}
      <StaggerContainer
        staggerDelay={0.08}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch"
      >
        {heroMetrics.map((hero) => (
          <StaggerItem key={hero.id} direction="up" distance={10} scale={true}>
            <div className="h-full p-6 sm:p-7 rounded-2xl surface-card border border-theme hover:border-teal-500/30 transition-all flex flex-col justify-between space-y-5 group">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  {hero.badge && (
                    <span
                      className={`font-mono text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-md border ${hero.badgeClass}`}
                    >
                      {hero.badge}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => navigateTo(hero.relatedRoute)}
                    className="text-muted hover:text-teal-400 transition-colors p-1"
                    aria-label={`Inspect ${hero.label} evidence`}
                    title="View related evidence"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <div className={`text-4xl sm:text-5xl font-mono font-bold tracking-tight ${hero.accentClass}`}>
                    {hero.displayValue ? (
                      <span>{hero.displayValue}</span>
                    ) : (
                      <KineticCounter
                        value={hero.value}
                        prefix={hero.prefix}
                        suffix={hero.suffix}
                        duration={1.8}
                      />
                    )}
                  </div>

                  <h3 className="heading-display text-lg sm:text-xl font-bold text-heading tracking-tight mt-2.5">
                    {hero.label}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-secondary mt-1.5 leading-relaxed">
                    {hero.subtext}
                  </p>
                </div>
              </div>

              <div className="pt-3.5 border-t border-theme flex items-center justify-between text-xs font-mono text-muted">
                <span className="text-[11px] text-muted">Ref: {hero.citation}</span>
                <button
                  type="button"
                  onClick={() => navigateTo(hero.relatedRoute)}
                  className="text-teal-400 hover:text-teal-300 font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>{hero.linkText}</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Layer 2: Four Supporting Metric Cards with Staggered Motion */}
      <StaggerContainer
        staggerDelay={0.06}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch"
      >
        {supportingMetrics.map((m) => (
          <StaggerItem key={m.id} direction="up" distance={10}>
            <div className="h-full p-4.5 sm:p-5 rounded-2xl surface-card border border-theme hover:border-theme-medium transition-all flex flex-col justify-between space-y-3.5 group">
              <div>
                <div className="flex items-baseline justify-between">
                  <div className={`text-2xl sm:text-3xl font-mono font-bold tracking-tight ${m.accentClass}`}>
                    {m.displayValue ? (
                      <span>{m.displayValue}</span>
                    ) : (
                      <KineticCounter
                        value={m.value}
                        prefix={m.prefix}
                        suffix={m.suffix}
                        duration={1.8}
                      />
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => navigateTo(m.relatedRoute)}
                    className="text-muted hover:text-teal-400 transition-colors p-1"
                    aria-label={`View ${m.label} details`}
                    title="View details"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h3 className="heading-display text-sm sm:text-base font-semibold text-heading tracking-tight mt-2">
                  {m.label}
                </h3>
                <p className="font-sans text-xs text-secondary mt-1 leading-relaxed">
                  {m.subtext}
                </p>
              </div>

              <div className="pt-2.5 border-t border-theme flex items-center justify-between text-[10px] font-mono text-muted">
                <span className="truncate max-w-[120px]">{m.citation}</span>
                <button
                  type="button"
                  onClick={() => navigateTo(m.relatedRoute)}
                  className="text-teal-400 hover:text-teal-300 font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>{m.linkText}</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Clean, Subtle Source Footnote */}
      <div className="pt-2 border-t border-theme flex flex-col sm:flex-row sm:items-center justify-between text-[10px] font-sans text-muted gap-3">
        <span>
          Synthesized from GitClear Longitudinal Telemetry, Project AIR Forensic Audits (n=21, Q1 2026), and Sentry Production SLA Records.
        </span>

        <div className="flex items-center gap-4 font-mono text-[11px] text-muted shrink-0">
          <button
            type="button"
            onClick={() => navigateTo('/rigor')}
            className="hover:text-heading transition-colors text-left cursor-pointer"
          >
            3-Gate Rigor Standard →
          </button>
          <span className="text-muted/40">|</span>
          <button
            type="button"
            onClick={() => navigateTo('/pricing')}
            className="hover:text-heading transition-colors text-left cursor-pointer"
          >
            Fixed-Price Audits ($249+) →
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarketTelemetry;
