'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { ArchitectureBookingModal } from '@/components/modals/ArchitectureBookingModal';
import { StudioFooter } from '@/components/sections/StudioFooter';
import { FadeInView } from '@/components/ui/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { navigateTo } from '@/src/navigation';
import {
  Layers,
  Bot,
  ShieldAlert,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Database,
  Terminal,
  Lock,
  GitBranch,
  ShieldCheck,
  Zap,
  AlertTriangle,
  Code2,
  ExternalLink,
} from 'lucide-react';

export default function CapabilitiesPage() {
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

      {/* 3. Hero / Point of View */}
      <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-theme">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <FadeInView direction="up" distance={10} blur={true}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span>ENGINEERING PRACTICE · ARCHITECTURAL SPECIFICATIONS</span>
          </div>

          <h1 className="heading-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-heading max-w-5xl leading-[1.06]">
            We Don’t Hand Off Fragile Prototypes.
          </h1>
        </FadeInView>

        <StaggerContainer
          staggerDelay={0.09}
          delayStart={0.06}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-6 pt-6 border-t border-theme"
        >
          <StaggerItem direction="up" distance={10} className="lg:col-span-8 space-y-3.5">
            <p className="font-sans text-lg sm:text-xl text-secondary leading-relaxed font-normal">
              Most agencies either design pretty Figma mockups or stitch together hastily prompted LLM snippets that break under the first twenty concurrent users. We operate as an institutional engineering counterweight.
            </p>
            <p className="font-sans text-sm sm:text-base text-secondary leading-relaxed">
              Every application we author is built around immutable boundary schemas, transactional database isolation, and automated mutation testing. We build software intended to run continuously without emergency midnight patches.
            </p>
          </StaggerItem>

          <StaggerItem direction="up" distance={10} scale={true} className="lg:col-span-4 flex flex-col justify-between p-5 sm:p-6 rounded-2xl surface-card border border-theme">
            <div>
              <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2 font-semibold">
                Engineering Disciplines
              </div>
              <ul className="space-y-2 text-xs font-mono text-primary">
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">01 ·</span>
                  <span>Full-Cycle SaaS &amp; Web Applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">02 ·</span>
                  <span>Autonomous AI Agents &amp; Pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">03 ·</span>
                  <span>Codebase Rescue &amp; Security Audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-teal-400">04 ·</span>
                  <span>Cloud Infrastructure &amp; Migrations</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-theme">
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

      {/* 4. Offering 01: Full-Cycle SaaS & Web Applications */}
      <section id="saas-engineering" className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/5">
        <FadeInView direction="up" distance={8} blur={true}>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-teal-400 font-bold uppercase tracking-wider">
              DISCIPLINE 01 · PRODUCTION WEB
            </span>
            <span className="w-8 h-[1px] bg-teal-500/30" />
            <span className="text-xs font-mono text-slate-500">FULL-CYCLE ARCHITECTURE</span>
          </div>

          <h2 className="heading-display text-3xl sm:text-5xl text-white tracking-tight max-w-4xl">
            Custom Web Applications &amp; Multi-Tenant SaaS
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-300 max-w-3xl mt-3 leading-relaxed">
            Software built for paying customers. Zero unhandled promise rejections, zero client-side auth tokens in localStorage, and transactional billing that never desynchronizes.
          </p>
        </FadeInView>

        {/* Architectural Point of View & Technical Realities */}
        <StaggerContainer staggerDelay={0.09} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-7">
          
          {/* Left 7 Columns: Point of View & Mechanics */}
          <StaggerItem direction="up" distance={10} className="lg:col-span-7 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3.5">
                <h3 className="heading-display text-lg text-white font-semibold">
                  Why Typical Vibe-Coded Web Apps Crash in Production
                </h3>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  LLMs write beautiful UI mockups, but they have no spatial concept of network latency, race conditions, or transactional boundaries. When an AI app charges a card, it typically fires a single async API call and assumes success. If the connection flickers or the customer double-clicks, you get duplicate charges, orphaned user rows, or silent state corruption.
                </p>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  We engineer around the reality that networks fail and users do strange things. Every financial mutation is wrapped in an atomic database transaction with distributed Redis idempotency keys.
                </p>
              </div>

              {/* Concrete Trade-Offs We Enforce */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-teal-400 uppercase tracking-wider font-semibold">
                  Architectural Trade-Offs We Enforce:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl surface-card border border-theme">
                    <div className="font-mono text-xs text-teal-400 font-bold uppercase tracking-wider mb-1">
                      RELATIONAL SCHEMAS OVER LOOSE NOSQL
                    </div>
                    <p className="font-sans text-xs text-secondary leading-relaxed">
                      PostgreSQL with strict foreign keys and check constraints. No untyped JSON blobs posing as production records.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl surface-card border border-theme">
                    <div className="font-mono text-xs text-teal-400 font-bold uppercase tracking-wider mb-1">
                      HTTP-ONLY COOKIE SESSIONS OVER LOCALSTORAGE
                    </div>
                    <p className="font-sans text-xs text-secondary leading-relaxed">
                      Zero JavaScript access to auth tokens. Immune to cross-site scripting (XSS) credential exfiltration.
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Right 5 Columns: What We Deliver & Standards Reference */}
            <StaggerItem direction="up" distance={10} scale={true} className="lg:col-span-5 space-y-5">
              <div className="p-6 sm:p-7 rounded-2xl surface-card border border-white/10 space-y-5">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Production Delivery Invariants:
                </div>

                <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Next.js App Router with server-side rendering &amp; streaming SSR</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>PostgreSQL relational architecture with automated schema migrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Stripe subscription billing with automated webhook reconciliation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Playwright browser test suites covering auth, checkout &amp; role ACLs</span>
                  </li>
                </ul>

                {/* Open-Source Reference Badge */}
                <div className="pt-4 border-t border-white/5">
                  <div className="text-[11px] font-mono text-slate-500 mb-1">
                    ENGINEERING BENCHMARK INSPIRATION:
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <span className="text-teal-400">Cal.com &amp; Dub.co</span>
                    <span className="text-slate-500">— for workspace isolation &amp; server action discipline</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-2.5 rounded-xl surface-card border border-teal-500/30 hover:border-teal-400 text-teal-300 hover:text-white font-sans text-xs font-semibold transition-colors cursor-pointer text-center"
                  >
                    Scope Custom SaaS Platform →
                  </button>
                </div>
              </div>
            </StaggerItem>

          </StaggerContainer>
      </section>

      {/* 5. Offering 02: Autonomous AI Agents & Intelligent Pipelines */}
      <section id="ai-agents" className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/5">
        <FadeInView direction="up" distance={8} blur={true}>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-teal-400 font-bold uppercase tracking-wider">
              DISCIPLINE 02 · DETERMINISTIC AI
            </span>
            <span className="w-8 h-[1px] bg-teal-500/30" />
            <span className="text-xs font-mono text-slate-500">STATE MACHINES &amp; WORKFLOWS</span>
          </div>

          <h2 className="heading-display text-3xl sm:text-5xl text-white tracking-tight max-w-4xl">
            Autonomous AI Agents &amp; Structured Pipelines
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-300 max-w-3xl mt-3 leading-relaxed">
            AI systems engineered as bounded state machines. No infinite while-loops, no surprise $10,000 token bills, and zero conversational drift.
          </p>
        </FadeInView>

        <StaggerContainer staggerDelay={0.09} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-7">
          
          {/* Left 7 Columns */}
          <StaggerItem direction="up" distance={10} className="lg:col-span-7 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3.5">
                <h3 className="heading-display text-lg text-white font-semibold">
                  The Failure of Naive Prompting: The Runaway Agent Trap
                </h3>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  Most AI prototypes are built on naive prompt chains: they give an LLM a goal and let it call tools in a loose loop. When an external API returns unexpected HTML or a document has corrupted characters, the agent gets confused, enters an infinite self-correction cycle, and runs until API rate limits or credit cards max out.
                </p>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  We treat LLMs strictly as probabilistic reasoning units inside <strong className="text-white">deterministic directed acyclic graphs (DAGs)</strong>. Every agent node has a maximum execution depth, a strict token budget circuit breaker, and an automatic human escalation path.
                </p>
              </div>

              {/* Concrete Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl surface-card border border-white/5">
                  <div className="font-mono text-xs text-teal-400 font-bold mb-1">
                    CIRCUIT BREAKERS
                  </div>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    Hard limits on agent recursion depth. Never exceeds 5 loops per user task.
                  </p>
                </div>

                <div className="p-4 rounded-xl surface-card border border-white/5">
                  <div className="font-mono text-xs text-teal-400 font-bold mb-1">
                    JSON CONSTRAINTS
                  </div>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    Zero raw text parsing. All model outputs parsed into validated Zod schemas.
                  </p>
                </div>

                <div className="p-4 rounded-xl surface-card border border-white/5">
                  <div className="font-mono text-xs text-teal-400 font-bold mb-1">
                    SEMANTIC CACHING
                  </div>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed">
                    SHA-256 Redis caching prevents re-running expensive LLM calls on identical inputs.
                  </p>
                </div>
              </div>
            </StaggerItem>

            {/* Right 5 Columns */}
            <StaggerItem direction="up" distance={10} scale={true} className="lg:col-span-5 space-y-5">
              <div className="p-6 sm:p-7 rounded-2xl surface-card border border-white/10 space-y-5">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  What We Engineer:
                </div>

                <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>LangGraph / Temporal durable execution state machines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Hybrid search RAG with pgvector embeddings &amp; Cohere re-ranking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Automated cost &amp; latency tracing per user session</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>Deterministic fallback handlers when models experience 504 outages</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-white/5">
                  <div className="text-[11px] font-mono text-slate-500 mb-1">
                    ENGINEERING BENCHMARK INSPIRATION:
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <span className="text-teal-400">Temporal &amp; LangGraph</span>
                    <span className="text-slate-500">— for fault-tolerant durable distributed workflows</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-2.5 rounded-xl surface-card border border-teal-500/30 hover:border-teal-400 text-teal-300 hover:text-white font-sans text-xs font-semibold transition-colors cursor-pointer text-center"
                  >
                    Scope AI Pipeline Architecture →
                  </button>
                </div>
              </div>
            </StaggerItem>

          </StaggerContainer>
      </section>

      {/* 6. Offering 03: Forensic Codebase Rescue & Security Audits */}
      <section id="codebase-rescue" className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/5">
        <FadeInView direction="up" distance={8} blur={true}>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-orange-400 font-bold uppercase tracking-wider">
              DISCIPLINE 03 · FORENSIC AUDITING
            </span>
            <span className="w-8 h-[1px] bg-orange-500/30" />
            <span className="text-xs font-mono text-slate-500">CODEBASE RESCUE</span>
          </div>

          <h2 className="heading-display text-3xl sm:text-5xl text-white tracking-tight max-w-4xl">
            Codebase Rescue &amp; Security Audits
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-300 max-w-3xl mt-3 leading-relaxed">
            Forensic triage of fragile AI prototypes, messy agency handoffs, and pre-diligence repositories. We don’t just write PDF reports—we ship remediation pull requests.
          </p>
        </FadeInView>

        <StaggerContainer staggerDelay={0.09} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-7">
          
          {/* Left 7 Columns */}
          <StaggerItem direction="up" distance={10} className="lg:col-span-7 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3.5">
                <h3 className="heading-display text-lg text-white font-semibold">
                  The Seduction of Vibe Coding &amp; The Hangover of Technical Debt
                </h3>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  Startups frequently reach out after spending months building with cursor-driven AI prompts or low-cost freelancer shops. The product works during screen shares, but in production, API keys are exposed in JavaScript bundles, queries run full-table scans, and any single user can inspect another organization’s data simply by editing an ID in the URL bar.
                </p>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  We perform an emergency diagnostic under Mutual NDA, isolate the top architectural failure points, and deliver fixed-price pull requests that stabilize the codebase without forcing a ground-up rewrite.
                </p>
              </div>

              {/* Triage Checklist */}
              <div className="p-6 rounded-2xl surface-card border border-white/5 space-y-3">
                <div className="text-xs font-mono text-orange-400 uppercase tracking-wider font-semibold">
                  What We Inspect in the 48-Hour Forensic Triage:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Secret leak scan (AST token analysis)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Multi-tenant IDOR route vulnerability review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Implicit &quot;any&quot; type pollution percentage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>N+1 database queries &amp; missing index analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Mutation testing to expose fake test assertions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400 font-bold">•</span>
                    <span>Dependency CVE &amp; unpatched package audit</span>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Right 5 Columns */}
            <StaggerItem direction="up" distance={10} scale={true} className="lg:col-span-5 space-y-5">
              <div className="p-6 sm:p-7 rounded-2xl surface-card border border-white/10 space-y-5">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Fixed-Price Audit Engagement Tiers:
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-white">48-Hour Diagnostic Quick Scan</span>
                      <span className="font-mono text-xs text-teal-400 font-bold">$249 flat</span>
                    </div>
                    <p className="font-sans text-xs text-slate-400">
                      10-page triage report, vulnerability scores, and 30-min debrief with a Principal Architect.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-orange-950/20 border border-orange-500/25 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-white">Full Audit + Direct Code Fix</span>
                      <span className="font-mono text-xs text-orange-400 font-bold">$899 – $1,499</span>
                    </div>
                    <p className="font-sans text-xs text-slate-400">
                      Full forensic review plus up to 3 production Pull Requests remediating critical security flaws.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => navigateTo('/pricing')}
                    className="w-full py-2.5 rounded-xl surface-card border border-orange-500/40 hover:border-orange-400 text-orange-300 hover:text-white font-sans text-xs font-semibold transition-colors cursor-pointer text-center"
                  >
                    View All Audit Specifications &amp; Pricing →
                  </button>
                </div>
              </div>
            </StaggerItem>

          </StaggerContainer>
      </section>

      {/* 7. Offering 04: Cloud Infrastructure & Migration */}
      <section id="cloud-infra" className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/5">
        <FadeInView direction="up" distance={8} blur={true}>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-teal-400 font-bold uppercase tracking-wider">
              DISCIPLINE 04 · RESILIENT CLOUD
            </span>
            <span className="w-8 h-[1px] bg-teal-500/30" />
            <span className="text-xs font-mono text-slate-500">INFRASTRUCTURE &amp; SECURITY</span>
          </div>

          <h2 className="heading-display text-3xl sm:text-5xl text-white tracking-tight max-w-4xl">
            Cloud Infrastructure, Database Isolation &amp; Zero-Downtime CI/CD
          </h2>

          <p className="font-sans text-base sm:text-lg text-slate-300 max-w-3xl mt-3 leading-relaxed">
            Deployments shouldn&apos;t be an adrenaline sport. Automated blue/green canary pipelines, database-level security isolation, and sub-10 second automated rollbacks.
          </p>
        </FadeInView>

        <StaggerContainer staggerDelay={0.09} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-7">
          
          {/* Left 7 Columns */}
          <StaggerItem direction="up" distance={10} className="lg:col-span-7 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3.5">
              <h3 className="heading-display text-lg text-white font-semibold">
                Pushing Security to the Engine: Native PostgreSQL RLS
              </h3>
              <p className="font-sans text-sm text-slate-300 leading-relaxed">
                In a naive web app, data isolation depends entirely on application code: every endpoint must remember to append <code className="text-teal-300 font-mono">where tenant_id = current_user.tenant_id</code>. If a developer forgets that clause on even one endpoint, customer records are exposed to competitors.
              </p>
              <p className="font-sans text-sm text-slate-300 leading-relaxed">
                We enforce <strong className="text-white">PostgreSQL Row-Level Security (RLS)</strong> directly inside the database engine. Even if an application controller is compromised or contains a bug, the database itself refuses to return rows belonging to another organization.
              </p>
            </div>

            {/* Infrastructure Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl surface-card border border-white/5">
                <div className="font-mono text-xs text-teal-400 font-bold mb-1">
                  BLUE/GREEN CANARY DEPLOYMENTS
                </div>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  Traffic is gradually split. If 5xx error rates spike above 0.1%, automated rollback completes in &lt;10 seconds.
                </p>
              </div>

              <div className="p-4 rounded-xl surface-card border border-white/5">
                <div className="font-mono text-xs text-teal-400 font-bold mb-1">
                  ZERO-DOWNTIME MIGRATIONS
                </div>
                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  Database schema changes run across backward-compatible phases (expand/contract), guaranteeing 100% uptime.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Right 5 Columns */}
          <StaggerItem direction="up" distance={10} scale={true} className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl surface-card border border-white/10 space-y-5">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                Infrastructure Stack &amp; Standards:
              </div>

              <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Docker containerization &amp; reproducible development sandboxes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Terraform / Pulumi Infrastructure as Code (IaC)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Redis Sentinel / BullMQ background queues with dead-letter retry</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Automated daily encrypted snapshot backups &amp; point-in-time recovery</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/5">
                <div className="text-[11px] font-mono text-slate-500 mb-1">
                  ENGINEERING BENCHMARK INSPIRATION:
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <span className="text-teal-400">Supabase &amp; Fly.io</span>
                  <span className="text-slate-500">— for engine-tier RLS &amp; zero-downtime container rollouts</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full py-2.5 rounded-xl surface-card border border-teal-500/30 hover:border-teal-400 text-teal-300 hover:text-white font-sans text-xs font-semibold transition-colors cursor-pointer text-center"
                >
                  Discuss Cloud Migration &amp; Infra →
                </button>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </section>

      {/* 8. Conversion Section: Direct Architecture Scoping Call */}
      <section className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <FadeInView direction="up" distance={10} scale={true}>
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl surface-card border border-teal-500/30 relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-teal-400 uppercase tracking-widest">
                DIRECT TECHNICAL SCOPING
              </span>
              <h2 className="heading-display text-3xl sm:text-5xl text-white font-bold tracking-tight mt-2.5">
                Have an architecture you want built properly?
              </h2>
              <p className="font-sans text-base sm:text-lg text-slate-300 mt-3.5 leading-relaxed">
                Skip the generic agency pitch deck. Talk directly to a Principal Systems Architect who will review your technical roadmap, evaluate your tech stack, and deliver an actionable scope under bilateral Mutual NDA.
              </p>

              <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <MagneticButton
                  variant="primary"
                  className="!px-6 !py-3.5 text-sm font-semibold"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <span>Schedule Scoping Call →</span>
                </MagneticButton>

                <button
                  type="button"
                  onClick={() => navigateTo('/intake')}
                  className="px-6 py-3.5 rounded-full surface-card border border-white/10 hover:border-teal-400/40 text-slate-200 hover:text-white font-sans text-xs font-medium tracking-wider transition-colors cursor-pointer text-center"
                >
                  Submit Architectural Brief
                </button>
              </div>

              <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Direct Principal Engineer Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Mutual NDA Executed Prior to Call</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Fixed-Price Milestone Proposals</span>
                </div>
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
