'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { ArchitectureBookingModal } from '@/components/modals/ArchitectureBookingModal';
import { StudioFooter } from '@/components/sections/StudioFooter';
import { FadeInView } from '@/components/ui/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { TiltCard } from '@/components/ui/TiltCard';
import { MagneticButton } from '@/components/ui/MagneticButton';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Lock,
  ArrowRight,
  FileCode,
  Calendar,
  Send,
  Zap,
  HelpCircle,
  FileText,
  UserCheck,
  Server,
} from 'lucide-react';

export default function IntakePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Founder / Executive',
    codebaseStatus: 'Active Production under Scale',
    workload: 'SaaS / High-Concurrency Web',
    stack: 'TypeScript / Next.js / PostgreSQL',
    repoUrl: '',
    targetTimeline: 'Immediate (Within 2 Weeks)',
    notes: '',
    ndaRequested: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="relative w-full min-h-screen text-primary">
      {/* 1. Global Navigation */}
      <Navbar onBookCall={() => setIsBookingOpen(true)} isEntryCompleted={true} />

      {/* 2. Scoping Modal */}
      <ArchitectureBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* 3. Hero Header & Trust Stance */}
      <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-theme">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <FadeInView blur>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span>BILATERAL NDA · 48-HOUR ARCHITECTURAL PROPOSAL SLA</span>
          </div>

          <h1 className="heading-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-heading max-w-5xl leading-[1.06]">
            Start Your Engineering Engagement.
          </h1>
        </FadeInView>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-6 pt-6 border-t border-theme">
          <StaggerItem direction="up" distance={10} className="lg:col-span-8 space-y-3.5">
            <p className="font-sans text-lg sm:text-xl text-primary leading-relaxed font-normal">
              No junior sales representatives. No endless pitch decks. Submit your technical parameters for a direct written architectural diagnostic and fixed-price milestone proposal within 48 hours.
            </p>
            <p className="font-sans text-sm sm:text-base text-secondary leading-relaxed">
              All submissions are held in strict legal confidence. If you prefer to speak live first, you can schedule an immediate 30-minute diagnostic session directly with a Principal Systems Architect.
            </p>
          </StaggerItem>

          <StaggerItem direction="up" distance={12} scale={0.985} className="lg:col-span-4 flex flex-col justify-between p-5 sm:p-6 rounded-2xl surface-card border border-theme">
            <div>
              <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2 font-semibold">
                Intake SLA Guarantee
              </div>
              <ul className="space-y-2 text-xs font-mono text-secondary">
                <li className="flex items-center justify-between">
                  <span className="text-muted">Mutual NDA:</span>
                  <span className="text-emerald-400 font-bold">&lt; 4 HOURS</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted">Written Proposal:</span>
                  <span className="text-teal-400 font-bold">&lt; 48 HOURS</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted">Auditor:</span>
                  <span className="text-teal-400 font-bold">PRINCIPAL ONLY</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-theme">
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="w-full py-2.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans text-xs font-semibold rounded-xl transition-colors cursor-pointer text-center"
              >
                Or Book Live 30-Min Diagnostic Call →
              </button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* 4. The 3-Step Process & SLA Explanation */}
      <section className="py-10 sm:py-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-theme">
        <FadeInView>
          <div className="mb-6 sm:mb-8">
            <span className="font-mono text-xs font-bold tracking-wider text-teal-400 uppercase">
              TRANSPARENT ONBOARDING TIMELINE
            </span>
            <h2 className="heading-display text-2xl sm:text-3xl text-heading tracking-tight mt-1">
              What Happens After You Submit
            </h2>
          </div>
        </FadeInView>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <StaggerItem direction="up" distance={10} className="p-5 sm:p-6 rounded-2xl surface-card border border-theme space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-teal-400 px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
                STEP 01 · &lt; 4 HOURS
              </span>
              <Lock className="w-4 h-4 text-muted" />
            </div>
            <h3 className="heading-display text-base text-heading font-bold">
              Bilateral Mutual NDA Executed
            </h3>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              We countersign an institutional bilateral Mutual NDA protecting all your proprietary algorithms, customer data, and repository access before code inspection begins.
            </p>
          </StaggerItem>

          <StaggerItem direction="up" distance={10} className="p-5 sm:p-6 rounded-2xl surface-card border border-theme space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-teal-400 px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
                STEP 02 · &lt; 24 HOURS
              </span>
              <Server className="w-4 h-4 text-muted" />
            </div>
            <h3 className="heading-display text-base text-heading font-bold">
              Principal Architect Sandbox Triage
            </h3>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              A senior systems architect personally clones your repository into an isolated ephemeral sandbox, executes AST secret scans, inspects database indexes, and reviews test suites.
            </p>
          </StaggerItem>

          <StaggerItem direction="up" distance={10} className="p-5 sm:p-6 rounded-2xl surface-card border border-theme space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-teal-400 px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
                STEP 03 · &lt; 48 HOURS
              </span>
              <FileText className="w-4 h-4 text-muted" />
            </div>
            <h3 className="heading-display text-base text-heading font-bold">
              Written Proposal &amp; 30-Min Walkthrough
            </h3>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              You receive an actionable written proposal with prioritized vulnerability fixes, exact sprint deliverables, fixed investment terms, and a 30-minute debrief walkthrough.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* 5. Serious Technical Intake Form + Deliverables Assurance */}
      <section className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-theme">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Comprehensive Scoping Form (7 Cols) */}
          <div className="lg:col-span-7">
            <FadeInView direction="up" distance={12}>
              <div className="surface-card p-6 sm:p-8 rounded-3xl border border-theme">
                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-teal-500/10 text-teal-400 text-2xl border border-teal-500/30 mb-2">
                      ✓
                    </div>
                    <h2 className="heading-display text-2xl sm:text-3xl text-heading font-bold">
                      Architectural Dossier Received &amp; Queued
                    </h2>
                    <p className="text-sm font-sans text-secondary max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-heading font-semibold">{formData.name}</span>. Your brief for{' '}
                      <span className="text-teal-400 font-semibold">{formData.company}</span> has been dispatched directly to our Principal Systems Architect. A countersigned Mutual NDA and written proposal will be delivered to{' '}
                      <span className="text-heading font-semibold">{formData.email}</span> within 48 hours.
                    </p>
                    <div className="pt-6">
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-2.5 option-card-theme hover:border-teal-400/40 text-heading font-sans text-xs font-medium rounded-xl transition-colors cursor-pointer border border-theme"
                      >
                        Submit another technical brief
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="heading-display text-xl sm:text-2xl text-heading font-bold mb-1">
                        Technical Specification Intake
                      </h2>
                      <p className="font-sans text-xs sm:text-sm text-secondary">
                        Please provide engineering context. We execute Mutual NDAs prior to accessing private code.
                      </p>
                    </div>

                    {/* Section 1: Contact Details */}
                    <div className="space-y-4 pt-2">
                      <div className="text-xs font-mono text-teal-400 uppercase tracking-wider font-semibold">
                        01 · Principal Contact Details
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-sans text-primary mb-1.5 font-medium">
                            Your Full Name *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Maya Chen"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full input-theme rounded-xl px-3.5 py-2.5 text-sm placeholder:text-muted focus:outline-none focus:border-teal-400 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-sans text-primary mb-1.5 font-medium">
                            Work Email *
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="maya@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full input-theme rounded-xl px-3.5 py-2.5 text-sm placeholder:text-muted focus:outline-none focus:border-teal-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-sans text-primary mb-1.5 font-medium">
                            Company or Protocol Name *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Nexus Protocol"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full input-theme rounded-xl px-3.5 py-2.5 text-sm placeholder:text-muted focus:outline-none focus:border-teal-400 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-sans text-primary mb-1.5 font-medium">
                            Your Role
                          </label>
                          <select
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            className="w-full input-theme rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-400 transition-colors cursor-pointer"
                          >
                            <option value="Founder / Executive">Founder / Executive</option>
                            <option value="CTO / VP Engineering">CTO / VP Engineering</option>
                            <option value="Head of Product">Head of Product</option>
                            <option value="Lead Architect / Engineer">Lead Architect / Engineer</option>
                            <option value="Investor / Due Diligence Partner">Investor / Due Diligence Partner</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Technical Parameters */}
                    <div className="space-y-4 pt-4 border-t border-theme">
                      <div className="text-xs font-mono text-teal-400 uppercase tracking-wider font-semibold">
                        02 · Architectural Context &amp; Scope
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-sans text-primary mb-1.5 font-medium">
                            Codebase Status
                          </label>
                          <select
                            value={formData.codebaseStatus}
                            onChange={(e) => setFormData({ ...formData, codebaseStatus: e.target.value })}
                            className="w-full input-theme rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-400 transition-colors cursor-pointer"
                          >
                            <option value="Active Production under Scale">Active Production under Scale</option>
                            <option value="Inherited Prototype / Agency Handoff">Inherited Prototype / Agency Handoff</option>
                            <option value="Pre-Diligence / Audit Preparation">Pre-Diligence / Audit Preparation</option>
                            <option value="Greenfield Build from Scratch">Greenfield Build from Scratch</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-sans text-primary mb-1.5 font-medium">
                            Primary Workload
                          </label>
                          <select
                            value={formData.workload}
                            onChange={(e) => setFormData({ ...formData, workload: e.target.value })}
                            className="w-full input-theme rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-400 transition-colors cursor-pointer"
                          >
                            <option value="SaaS / High-Concurrency Web">SaaS / High-Concurrency Web</option>
                            <option value="Autonomous AI Agent & RAG Pipeline">Autonomous AI Agent &amp; RAG Pipeline</option>
                            <option value="Codebase Rescue & Security Audit">Codebase Rescue &amp; Security Audit</option>
                            <option value="Cloud Infrastructure & Zero-Downtime CI/CD">Cloud Infrastructure &amp; Zero-Downtime CI/CD</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-sans text-primary mb-1.5 font-medium">
                            Core Technology Stack
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Next.js, Node, PostgreSQL, Python"
                            value={formData.stack}
                            onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                            className="w-full input-theme rounded-xl px-3.5 py-2.5 text-sm placeholder:text-muted focus:outline-none focus:border-teal-400 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-sans text-primary mb-1.5 font-medium">
                            Target Timeline / Deadline
                          </label>
                          <select
                            value={formData.targetTimeline}
                            onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value })}
                            className="w-full input-theme rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal-400 transition-colors cursor-pointer"
                          >
                            <option value="Immediate (Within 2 Weeks)">Immediate (Within 2 Weeks)</option>
                            <option value="Next 30 Days (Upcoming Release)">Next 30 Days (Upcoming Release)</option>
                            <option value="Next Quarter (Strategic Planning)">Next Quarter (Strategic Planning)</option>
                            <option value="Flexible / Scoping First">Flexible / Scoping First</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-sans text-primary mb-1.5 font-medium">
                          Private Repository URL or Architecture Document (Optional)
                        </label>
                        <input
                          type="text"
                          placeholder="github.com/org/repo (Read-only access under NDA)"
                          value={formData.repoUrl}
                          onChange={(e) => setFormData({ ...formData, repoUrl: e.target.value })}
                          className="w-full input-theme rounded-xl px-3.5 py-2.5 text-xs placeholder:text-muted focus:outline-none focus:border-teal-400 transition-colors font-code"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-sans text-primary mb-1.5 font-medium">
                          Core Technical Challenges, Known Outages, or Due Diligence Needs
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Detail production latency bottlenecks, flaky test suites, database migration risks, or specific audit requirements..."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full input-theme rounded-xl px-3.5 py-2.5 text-sm placeholder:text-muted focus:outline-none focus:border-teal-400 transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Section 3: Legal NDA Confirmation */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 p-3.5 rounded-xl option-card-theme border border-theme cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.ndaRequested}
                          onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
                          className="mt-0.5 rounded border-theme text-teal-400 focus:ring-0 accent-teal-400"
                        />
                        <span className="font-sans text-xs text-secondary leading-relaxed">
                          <strong className="text-heading">Execute Mutual NDA prior to repository access:</strong> Please deliver standard bilateral NDA paperwork protecting all code and proprietary assets to my email.
                        </span>
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans text-xs font-semibold tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(45,212,191,0.25)] disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <span>Transmitting architectural brief...</span>
                        ) : (
                          <span>Submit Brief For Architectural Evaluation (48-Hr SLA) →</span>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </FadeInView>
          </div>

          {/* Right Column: Tangible Deliverables & Trust Factors (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <FadeInView delay={0.1} scale={0.99}>
              <div className="surface-card p-6 sm:p-7 rounded-3xl border border-theme space-y-4">
                <div>
                  <div className="font-mono text-xs text-teal-400 uppercase tracking-wider font-semibold">
                    WHAT YOU RECEIVE IN 48 HOURS
                  </div>
                  <h3 className="heading-display text-xl text-heading font-bold mt-1">
                    Tangible Engineering Deliverables
                  </h3>
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-sans font-semibold text-sm text-heading">
                        Written Architectural Roadmap
                      </div>
                      <p className="text-xs text-secondary mt-0.5 font-sans leading-relaxed">
                        Detailed breakdown of critical vulnerability scores, recommended schema fixes, and milestone estimates.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-sans font-semibold text-sm text-heading">
                        Fixed-Price Investment Proposal
                      </div>
                      <p className="text-xs text-secondary mt-0.5 font-sans leading-relaxed">
                        Guaranteed pricing with zero open-ended billing. Price lock honored for 30 calendar days.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-sans font-semibold text-sm text-heading">
                        30-Minute Diagnostic Walkthrough
                      </div>
                      <p className="text-xs text-secondary mt-0.5 font-sans leading-relaxed">
                        Private debrief directly with the Principal Systems Architect reviewing your codebase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView delay={0.18}>
              <div className="surface-card p-5 sm:p-6 rounded-2xl border border-theme space-y-3 text-xs font-sans text-secondary">
                <div className="flex items-center gap-2 text-heading font-medium">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>Institutional IP Protection Guarantee</span>
                </div>
                <p className="leading-relaxed">
                  We never train AI models on client repositories. All diagnostic reviews occur in isolated, ephemeral sandboxes destroyed immediately following analysis.
                </p>
                <div className="pt-2 border-t border-theme text-[11px] text-muted font-mono">
                  Direct Inquiries: architecture@projectair.in · Bengaluru &amp; Global
                </div>
              </div>
            </FadeInView>
          </div>

        </div>
      </section>

      {/* 6. Studio Footer */}
      <StudioFooter onOpenBooking={() => setIsBookingOpen(true)} />
    </div>
  );
}
