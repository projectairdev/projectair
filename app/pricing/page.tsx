'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { ArchitectureBookingModal } from '@/components/modals/ArchitectureBookingModal';
import { StudioFooter } from '@/components/sections/StudioFooter';
import { FadeInView } from '@/components/ui/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { TiltCard } from '@/components/ui/TiltCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { navigateTo } from '@/src/navigation';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight,
  HelpCircle,
  FileCheck,
  Lock,
  GitBranch,
  Terminal,
  Database,
  AlertTriangle,
} from 'lucide-react';

export default function PricingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen text-primary">
      {/* 1. Global Navigation */}
      <Navbar onBookCall={() => setIsBookingOpen(true)} isEntryCompleted={true} />

      {/* 2. Scoping Modal */}
      <ArchitectureBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* 3. Hero Header & Philosophy */}
      <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <FadeInView direction="up" distance={10} blur={true}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span>TRANSPARENT ENGAGEMENT ARCHITECTURE · 2026 SPECIFICATION</span>
          </div>

          <h1 className="heading-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.06]">
            Fixed-Price Audits. Milestone Sprints. Zero Surprises.
          </h1>
        </FadeInView>

        <StaggerContainer
          staggerDelay={0.09}
          delayStart={0.06}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-6 pt-6 border-t border-white/5"
        >
          <StaggerItem direction="up" distance={10} className="lg:col-span-8 space-y-3.5">
            <p className="font-sans text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              Conventional software agencies play a predictable game: they quote artificially low estimates by omitting tests, security hardening, and error handling—and then charge endless hourly rates when production breaks.
            </p>
            <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
              We operate on an institutional standard. High test coverage, strict typing, and multi-tenant security isolation are our non-negotiable baseline. We offer guaranteed turnaround times, fixed diagnostic fees, and transparent milestone sprints.
            </p>
          </StaggerItem>

          <StaggerItem direction="up" distance={10} scale={true} className="lg:col-span-4 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div>
              <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2 font-semibold">
                Guaranteed Standards
              </div>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">Mutual NDA:</span>
                  <span className="text-emerald-400 font-bold">EXECUTED PRIOR</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">Diagnostic SLA:</span>
                  <span className="text-teal-300 font-bold">48 HOURS</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">Reviewers:</span>
                  <span className="text-teal-300 font-bold">PRINCIPAL ONLY</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-400">IP Ownership:</span>
                  <span className="text-emerald-400 font-bold">100% CLIENT IP</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5">
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="w-full py-2.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans text-xs font-semibold rounded-xl transition-colors cursor-pointer text-center"
              >
                Schedule Scoping Call →
              </button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* 4. The 3 Structured Tiers (High Hierarchy, Reduced Noise) */}
      <section className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/5">
        <FadeInView direction="up" distance={8} blur={true}>
          <div className="mb-7 sm:mb-8">
            <span className="font-mono text-xs font-bold tracking-wider text-teal-400 uppercase">
              ENGAGEMENT TIERS · TRANSPARENT PRICING
            </span>
            <h2 className="heading-display text-3xl sm:text-5xl text-white tracking-tight mt-2 max-w-3xl">
              Choose Your Engagement Model
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base max-w-2xl mt-2.5 leading-relaxed">
              From rapid 48-hour diagnostic scans to forensic code repairs and full greenfield platform engineering.
            </p>
          </div>
        </FadeInView>

        <StaggerContainer staggerDelay={0.09} className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* TIER 01: DIAGNOSTIC QUICK SCAN */}
          <StaggerItem direction="up" distance={10} scale={true} className="flex">
            <div className="w-full p-6 sm:p-8 rounded-3xl surface-card border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <span className="font-mono text-xs text-teal-400 font-semibold tracking-wider">
                    TIER 01 · TRIAGE
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full border border-white/20 text-slate-300 text-[10px] font-mono">
                    48-HR TURNAROUND
                  </span>
                </div>

                <h3 className="heading-display text-2xl text-white font-bold tracking-tight mt-5">
                  Diagnostic Quick Scan
                </h3>
                <p className="font-sans text-xs text-slate-400 mt-1 mb-6">
                  Forensic codebase health evaluation &amp; vulnerability triage.
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="heading-display text-4xl text-white font-bold tracking-tight">$249</span>
                    <span className="font-sans text-xs text-slate-400">flat fee</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 font-mono text-xs text-teal-300">
                    <Clock className="w-3.5 h-3.5 text-teal-400" />
                    <span>Delivered in 48 hours under Mutual NDA</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 font-semibold">
                  What You Receive:
                </div>
                <ul className="space-y-3 font-sans text-xs text-slate-300 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>10-Page Written Diagnostic Report</strong> with prioritized severity ranking</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>AST secret taint scan for leaked API keys, tokens &amp; credentials</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>TypeScript strictness score &amp; implicit &quot;any&quot; pollution percentage</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Database N+1 query identification &amp; indexing recommendations</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>30-minute debrief call</strong> directly with a Principal Systems Architect</span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full py-3 rounded-full surface-card border border-white/10 hover:border-teal-400 text-white font-sans text-xs font-semibold tracking-wider transition-colors cursor-pointer text-center"
                >
                  Book 48-Hour Quick Scan →
                </button>
              </div>
            </div>
          </StaggerItem>

          {/* TIER 02: FULL AUDIT + DIRECT CODE FIX (FEATURED) */}
          <StaggerItem direction="up" distance={10} scale={true} className="flex">
            <div className="w-full p-6 sm:p-8 rounded-3xl surface-card border-2 border-teal-500/50 ring-1 ring-teal-500/30 flex flex-col justify-between relative shadow-[0_0_40px_rgba(45,212,191,0.1)]">
              <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-teal-400 text-slate-950 font-mono text-[10px] font-bold tracking-wider uppercase">
                MOST POPULAR FOR STARTUPS
              </div>

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/5 pt-2">
                  <span className="font-mono text-xs text-teal-400 font-semibold tracking-wider">
                    TIER 02 · SURGICAL REPAIR
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full border border-teal-500/30 text-teal-300 text-[10px] font-mono bg-teal-500/10">
                    5–7 DAY TURNAROUND
                  </span>
                </div>

                <h3 className="heading-display text-2xl text-white font-bold tracking-tight mt-5">
                  Full Audit + Direct Code Fix
                </h3>
                <p className="font-sans text-xs text-slate-400 mt-1 mb-6">
                  Forensic audit with direct production remediation pull requests.
                </p>

                <div className="p-4 rounded-2xl bg-teal-950/20 border border-teal-500/25 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="heading-display text-4xl text-teal-300 font-bold tracking-tight">
                      $899 – $1,499
                    </span>
                    <span className="font-sans text-xs text-slate-400">flat fee (by repo size)</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 font-mono text-xs text-teal-300">
                    <Clock className="w-3.5 h-3.5 text-teal-400" />
                    <span>5–7 business days with direct git branch handoff</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 font-semibold">
                  Everything in Quick Scan, plus:
                </div>
                <ul className="space-y-3 font-sans text-xs text-slate-300 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>Up to 3 Production Pull Requests</strong> authored by our team resolving critical bugs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>PostgreSQL Row-Level Security (RLS) deep multi-tenant audit</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Stryker AST Mutation Test analysis on billing &amp; core state logic</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Zod runtime boundary validation backfilled on top vulnerable routes</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>Investor Due Diligence Sign-Off Dossier</strong> for fundraising review</span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full py-3.5 rounded-full bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans text-xs font-semibold tracking-wider transition-all cursor-pointer text-center shadow-[0_0_20px_rgba(45,212,191,0.25)]"
                >
                  Book Full Audit &amp; Code Fix →
                </button>
              </div>
            </div>
          </StaggerItem>

          {/* TIER 03: FULL-CYCLE GREENFIELD ARCHITECTURE */}
          <StaggerItem direction="up" distance={10} scale={true} className="flex">
            <div className="w-full p-6 sm:p-8 rounded-3xl surface-card border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <span className="font-mono text-xs text-teal-400 font-semibold tracking-wider">
                    TIER 03 · FULL ARCHITECTURE
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full border border-white/20 text-slate-300 text-[10px] font-mono">
                    MILESTONE SPRINTS
                  </span>
                </div>

                <h3 className="heading-display text-2xl text-white font-bold tracking-tight mt-5">
                  Full-Cycle Architecture
                </h3>
                <p className="font-sans text-xs text-slate-400 mt-1 mb-6">
                  End-to-end custom web platforms, AI pipelines &amp; cloud infra.
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="heading-display text-4xl text-white font-bold tracking-tight">
                      Custom Sprints
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 font-mono text-xs text-teal-300">
                    <Clock className="w-3.5 h-3.5 text-teal-400" />
                    <span>2-week fixed-deliverable sprint cycles</span>
                  </div>
                </div>

                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 font-semibold">
                  Complete Engineering Delivery:
                </div>
                <ul className="space-y-3 font-sans text-xs text-slate-300 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>End-to-end full-stack web application engineering (Next.js / PostgreSQL)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Autonomous AI agent state machines (LangGraph) with strict circuit breakers</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>3-Gate Rigor Standard enforced</strong> on every PR with 100% mutation testing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Direct engineering Slack/Discord channel with Senior Systems Architects</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>100% IP Ownership</strong> transferred immediately with 30-day warranty</span>
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full py-3 rounded-full surface-card border border-white/10 hover:border-teal-400 text-white font-sans text-xs font-semibold tracking-wider transition-colors cursor-pointer text-center"
                >
                  Schedule Architecture Scoping →
                </button>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </section>

      {/* 5. Institutional Manifesto: Why Quality is Never an Upsell */}
      <section className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/5">
        <FadeInView direction="up" distance={10} scale={true}>
          <div className="p-6 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10">
            <div className="max-w-3xl mb-7">
              <span className="font-mono text-xs text-teal-400 font-bold uppercase tracking-wider">
                OUR ANTI-AGENCY POLICY
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl text-white font-bold tracking-tight mt-2">
                Why Testing &amp; Audits Are Standard, Never Upsells
              </h2>
              <p className="font-sans text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                When you hire traditional development agencies or offshore dev shops, you encounter a line-item called &quot;QA Testing (Optional) — $4,000&quot; or &quot;Security Hardening — +20%.&quot;
              </p>
            </div>

            <StaggerContainer staggerDelay={0.07} className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <StaggerItem direction="up" distance={8}>
                <div className="h-full p-5 sm:p-6 rounded-2xl surface-card border border-white/5 space-y-2.5">
                  <div className="font-mono text-xs text-teal-400 font-bold">01 · NO OPTIONAL QUALITY</div>
                  <h4 className="heading-display text-base text-white font-semibold">
                    Zero Technical Short-Cuts
                  </h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    We refuse to ship software without type soundness, Zod boundary checks, and mutation test verification. High engineering quality is our fundamental deliverable, not a paid add-on.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem direction="up" distance={8}>
                <div className="h-full p-5 sm:p-6 rounded-2xl surface-card border border-white/5 space-y-2.5">
                  <div className="font-mono text-xs text-teal-400 font-bold">02 · FIXED PRICING COMMITMENT</div>
                  <h4 className="heading-display text-base text-white font-semibold">
                    Zero Hourly Billable Padding
                  </h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    We don&apos;t charge by unpredictable junior hourly timesheets. Our $249 and $899 audits are fixed price. You know the exact cost and timeline before code review begins.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem direction="up" distance={8}>
                <div className="h-full p-5 sm:p-6 rounded-2xl surface-card border border-white/5 space-y-2.5">
                  <div className="font-mono text-xs text-teal-400 font-bold">03 · DIRECT ARCHITECT ACCESS</div>
                  <h4 className="heading-display text-base text-white font-semibold">
                    Zero Non-Technical Middlemen
                  </h4>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    You never speak with junior account coordinators or commission-driven sales representatives. Every consultation is with the Principal Architect personally reviewing your code.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </FadeInView>
      </section>

      {/* 6. Technical Deliverables Comparison Matrix */}
      <section className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/5">
        <FadeInView direction="up" distance={10}>
          <div className="mb-7 sm:mb-8">
            <span className="font-mono text-xs font-bold tracking-wider text-teal-400 uppercase">
              DELIVERABLE SPECIFICATIONS · COMPARISON MATRIX
            </span>
            <h2 className="heading-display text-3xl sm:text-4xl text-white tracking-tight mt-2">
              Deliverables by Engagement Model
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-4 pr-6 font-semibold">Deliverable / Standard</th>
                  <th className="py-4 px-6 font-semibold text-slate-200">Quick Scan ($249)</th>
                  <th className="py-4 px-6 font-semibold text-teal-300">Audit + Fix ($899–$1.5k)</th>
                  <th className="py-4 pl-6 font-semibold text-slate-200">Full-Cycle Sprint</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="py-4 pr-6 font-medium text-white">Mutual NDA Execution Prior to Review</td>
                  <td className="py-4 px-6 text-teal-400 font-bold">✓ Included</td>
                  <td className="py-4 px-6 text-teal-400 font-bold">✓ Included</td>
                  <td className="py-4 pl-6 text-teal-400 font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-white">Turnaround Delivery SLA</td>
                  <td className="py-4 px-6 font-mono text-slate-300">48 Hours</td>
                  <td className="py-4 px-6 font-mono text-teal-300">5–7 Business Days</td>
                  <td className="py-4 pl-6 font-mono text-slate-300">2-Week Sprints</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-white">AST Secret &amp; Credential Exposure Scan</td>
                  <td className="py-4 px-6 text-teal-400 font-bold">✓ Full Scan</td>
                  <td className="py-4 px-6 text-teal-400 font-bold">✓ Full Scan</td>
                  <td className="py-4 pl-6 text-teal-400 font-bold">✓ Continuous CI</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-white">TypeScript Strictness &amp; Invariant Triage</td>
                  <td className="py-4 px-6 text-teal-400 font-bold">✓ Percentage Report</td>
                  <td className="py-4 px-6 text-teal-400 font-bold">✓ Direct Remediation</td>
                  <td className="py-4 pl-6 text-teal-400 font-bold">✓ Strict Enforcement</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-white">PostgreSQL RLS Multi-Tenant Deep Audit</td>
                  <td className="py-4 px-6 text-slate-600">Surface Review</td>
                  <td className="py-4 px-6 text-teal-400 font-bold">✓ Deep Audit + Policy</td>
                  <td className="py-4 pl-6 text-teal-400 font-bold">✓ Engine-Tier RLS</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-white">Stryker AST Mutation Test Analysis</td>
                  <td className="py-4 px-6 text-slate-600">—</td>
                  <td className="py-4 px-6 text-teal-400 font-bold">✓ Full Mutation Report</td>
                  <td className="py-4 pl-6 text-teal-400 font-bold">✓ 100% Kill Score</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-white">Production Pull Requests Authored</td>
                  <td className="py-4 px-6 text-slate-600">Report Only</td>
                  <td className="py-4 px-6 text-teal-400 font-bold">✓ Up to 3 Critical PRs</td>
                  <td className="py-4 pl-6 text-teal-400 font-bold">✓ Complete Repo Delivery</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-white">Direct Principal Architect Consultation</td>
                  <td className="py-4 px-6 font-mono text-slate-300">30-Min Debrief</td>
                  <td className="py-4 px-6 font-mono text-teal-300">45-Min Walkthrough</td>
                  <td className="py-4 pl-6 font-mono text-slate-300">Daily Slack Channel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeInView>
      </section>

      {/* 7. Clear FAQ Section */}
      <section className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/5">
        <FadeInView direction="up" distance={8} blur={true}>
          <div className="mb-7 sm:mb-8 max-w-3xl">
            <span className="font-mono text-xs font-bold tracking-wider text-teal-400 uppercase">
              COMMONLY ASKED QUESTIONS
            </span>
            <h2 className="heading-display text-3xl sm:text-4xl text-white tracking-tight mt-2">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeInView>

        <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                q: 'How do you access our repository securely?',
                a: 'Under our bilateral Mutual NDA, you can provide read-only GitHub/GitLab collaborator access or send an encrypted ZIP archive. We never clone client code into persistent environments; audits run in ephemeral sandboxes destroyed immediately following review.',
              },
              {
                q: 'Can you fix the bugs you find in our codebase?',
                a: 'Yes. In our Full Audit + Code Fix tier ($899–$1,499), our principal engineers author up to 3 production pull requests resolving the highest-severity vulnerabilities, tested against our 3-Gate Rigor Standard.',
              },
              {
                q: 'What if we need ongoing feature engineering after the audit?',
                a: 'Clients frequently transition from a diagnostic audit into a bi-weekly milestone sprint. We provide fixed-deliverable sprint cycles where we engineer features, harden architecture, and maintain zero-downtime CI/CD.',
              },
              {
                q: 'Do you train AI models on our proprietary code?',
                a: 'Never. All analysis is strictly conducted under enterprise zero-data-retention agreements. Your proprietary intellectual property remains 100% yours.',
              },
            ].map((faq, idx) => (
              <StaggerItem key={idx} direction="up" distance={8}>
                <div className="h-full p-5 sm:p-6 rounded-2xl surface-card border border-white/5 space-y-2">
                  <div className="font-sans text-sm font-semibold text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <p className="font-sans text-xs text-slate-300 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
        </StaggerContainer>
      </section>

      {/* 8. Conversion Hero Banner */}
      <section className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <FadeInView direction="up" distance={10} scale={true}>
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl surface-card border border-teal-500/30 relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-teal-400 uppercase tracking-widest">
                START YOUR AUDIT
              </span>
              <h2 className="heading-display text-3xl sm:text-5xl text-white font-bold tracking-tight mt-2.5">
                Have a codebase that needs rigorous verification?
              </h2>
              <p className="font-sans text-base sm:text-lg text-slate-300 mt-3.5 leading-relaxed">
                Book a 30-minute technical diagnostic or submit your repository brief for an immediate 48-hour proposal under bilateral Mutual NDA.
              </p>

              <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <MagneticButton
                  variant="primary"
                  className="!px-6 !py-3.5 text-sm font-semibold"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <span>Schedule Architecture Diagnostic →</span>
                </MagneticButton>

                <button
                  type="button"
                  onClick={() => navigateTo('/intake')}
                  className="px-6 py-3.5 rounded-full surface-card border border-white/10 hover:border-teal-400/40 text-slate-200 hover:text-white font-sans text-xs font-medium tracking-wider transition-colors cursor-pointer text-center"
                >
                  Submit Intake Brief Directly
                </button>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* 9. Studio Footer */}
      <StudioFooter onOpenBooking={() => setIsBookingOpen(true)} />
    </div>
  );
}
