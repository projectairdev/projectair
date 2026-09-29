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
  ShieldCheck,
  CheckCircle2,
  XCircle,
  GitBranch,
  Database,
  ArrowRight,
  Terminal,
  FileCode,
  Layers,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export default function RigorPage() {
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

      {/* 3. Hero Header & Manifesto */}
      <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-12 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-theme">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        <FadeInView direction="up" distance={10} blur={true}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span>INSTITUTIONAL ENGINEERING DOSSIER · THE RIGOR STANDARD</span>
          </div>

          <h1 className="heading-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-heading max-w-5xl leading-[1.06]">
            Audited, Tested &amp; Shipped Properly.
          </h1>
        </FadeInView>

        <StaggerContainer
          staggerDelay={0.09}
          delayStart={0.06}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-6 pt-6 border-t border-theme"
        >
          <StaggerItem direction="up" distance={10} className="lg:col-span-8 space-y-3.5">
            <p className="font-sans text-lg sm:text-xl text-secondary leading-relaxed font-normal">
              The mathematical verification standard separating institutional production platforms from fragile AI-generated prototypes.
            </p>
            <p className="font-sans text-sm sm:text-base text-secondary leading-relaxed">
              Large language models author syntactically convincing code that creates a dangerous illusion of velocity. But without invariant contracts, boundary validation, and engine-level isolation, vibe-coded systems degrade under real concurrency, unannounced upstream schema drift, and malicious IDOR parameter tampering. We built the engineering counterweight.
            </p>

            {/* Quiet Internal Nav Anchor Ribbon */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-muted">
              <span className="text-muted">Jump to section:</span>
              <a href="#structural-divide" className="hover:text-teal-400 transition-colors underline decoration-current/20 underline-offset-4">
                01. The Structural Divide
              </a>
              <span className="text-muted/40">·</span>
              <a href="#three-gates" className="hover:text-teal-400 transition-colors underline decoration-current/20 underline-offset-4">
                02. 3-Gate Framework
              </a>
              <span className="text-muted/40">·</span>
              <a href="#standards" className="hover:text-teal-400 transition-colors underline decoration-current/20 underline-offset-4">
                03. 6 Invariant Standards
              </a>
            </div>
          </StaggerItem>

          <StaggerItem direction="up" distance={10} scale={true} className="lg:col-span-4 flex flex-col justify-between p-5 sm:p-6 rounded-2xl surface-card border border-theme">
            <div>
              <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2 font-semibold">
                Verification Benchmarks
              </div>
              <ul className="space-y-2 text-xs font-mono text-primary">
                <li className="flex items-center justify-between pb-1.5 border-b border-theme">
                  <span className="text-muted">IDOR Leak Tolerance:</span>
                  <span className="text-emerald-400 font-bold">0 LEAKS PERMITTED</span>
                </li>
                <li className="flex items-center justify-between pb-1.5 border-b border-theme">
                  <span className="text-muted">AST Mutation Score:</span>
                  <span className="text-emerald-400 font-bold">100% MUTANTS KILLED</span>
                </li>
                <li className="flex items-center justify-between pb-1.5 border-b border-theme">
                  <span className="text-muted">TypeScript Soundness:</span>
                  <span className="text-teal-400 font-bold">TS 5.7+ STRICT</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted">Automated Rollback SLA:</span>
                  <span className="text-teal-400 font-bold">&lt;10 SECONDS</span>
                </li>
              </ul>

              <div className="mt-3.5 pt-3 border-t border-theme text-[10px] font-mono text-muted">
                Ref: ISO/IEC 25010 Software Quality · Stryker Mutator v8.2
              </div>
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

      {/* 4. Comparative Breakdown: Fragile AI Code vs. Rigorous Engineering */}
      <section id="structural-divide" className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/5">
        <FadeInView direction="up" distance={8} blur={true}>
          <div className="mb-7 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-bold tracking-wider text-teal-400 uppercase">
                THE STRUCTURAL DIVIDE · PRODUCTION REALITY
              </span>
              <h2 className="heading-display text-3xl sm:text-5xl text-white tracking-tight mt-2 max-w-3xl">
                Why Vibe-Coded Prototypes Rot in Production
              </h2>
              <p className="font-sans text-slate-400 text-sm sm:text-base max-w-2xl mt-2.5 leading-relaxed">
                When an engineer prompts an LLM without strict boundary types and mutation tests, they are borrowing time against unhandled edge cases. Here is the concrete technical contrast.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigateTo('/teardowns')}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-400 hover:text-teal-300 transition-colors cursor-pointer group shrink-0"
            >
              <span>Examine Real Post-Mortem Teardowns</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </FadeInView>

        <StaggerContainer staggerDelay={0.07} className="space-y-5 sm:space-y-6">
            {[
              {
                id: 'comp-01',
                dimension: '01 · Boundary Schema Validation',
                aiCode:
                  'Heavy reliance on implicit "any", loose JSON payloads, and unvalidated URL parameters. Controller methods assume external payloads always conform to the happy path.',
                consequence:
                  'CRASHES ON UNEXPECTED DATA: When a payment provider webhook or mobile app sends null instead of an integer, the frontend white-screens or the API crashes with unhandled 500s.',
                rigorCode:
                  'Zero untyped primitives. Inbound HTTP payloads, query params, webhooks, and database query results are parsed through immutable runtime Zod schemas before execution.',
                outcome:
                  'MATHEMATICAL SOUNDNESS: Invalid payloads are rejected at the network perimeter with structured 422 errors. Corrupted state cannot enter the runtime.',
                relatedTeardown: {
                  title: 'Teardown 03: Resolving Runtime Schema Drift in Healthcare Portal',
                  route: '/teardowns#healthcare-portal',
                },
                sourceRef: 'RFC 9457 Problem Details for HTTP APIs',
              },
              {
                id: 'comp-02',
                dimension: '02 · Test Verification & Mutation Defense',
                aiCode:
                  'Superficial happy-path test suites that merely assert "expect(res).toBeDefined()". Tests pass reliably to create green-check vanity metrics during investor demos.',
                consequence:
                  'TEST THEATER: When critical calculation or reconciliation logic is altered or broken in a pull request, the test suite still passes. Fatal bugs slip into production.',
                rigorCode:
                  'Stryker AST Mutation Testing. We deliberately inject syntax errors and inverted conditional logic into PRs to verify that tests actively fail when logic breaks.',
                outcome:
                  'ACTIVE DEFENSE: 100% mutant kill rate enforced on all ledger calculations, state machine transitions, and access-control rules.',
                relatedTeardown: {
                  title: 'Teardown 01: Eliminating Ledger Race Conditions & Double-Charges',
                  route: '/teardowns#fintech-saas',
                },
                sourceRef: 'IEEE TSE Empirical Study on Mutation Testing vs Branch Coverage',
              },
              {
                id: 'comp-03',
                dimension: '03 · Multi-Tenant Data Isolation',
                aiCode:
                  'Client-side URL filtering (e.g. ?orgId=123). Every API route relies on individual developers remembering to manually append "where tenant_id = ?" to database queries.',
                consequence:
                  'CATASTROPHIC IDOR LEAK: Any authenticated user who edits an organization ID in the URL bar can inspect competitor invoices, customer records, or private files.',
                rigorCode:
                  'PostgreSQL native Row-Level Security (RLS) enforced directly inside the database engine, bound cryptographically to session JWTs.',
                outcome:
                  'HARDENED AT THE ENGINE: Even if an application route contains a developer bug, the database itself terminates queries attempting to cross tenant partitions.',
                relatedTeardown: {
                  title: 'Teardown 01: Eliminating Insecure Direct Object References (IDOR)',
                  route: '/teardowns#fintech-saas',
                },
                sourceRef: 'OWASP Top 10 A01:2021 Broken Access Control',
              },
              {
                id: 'comp-04',
                dimension: '04 · Distributed State Mutations & Idempotency',
                aiCode:
                  'Uncoordinated sequential async writes. Updating an invoice status and charging a payment gateway are executed in separate, unlinked operations without locks.',
                consequence:
                  'STATE DESYNCHRONIZATION: If a network timeout occurs mid-request or a user double-clicks, the customer is billed twice or balances permanently desynchronize.',
                rigorCode:
                  'Serializable ACID database transactions with distributed Redis idempotency keys and automated rollback handlers.',
                outcome:
                  'TRANSACTIONAL ATOMICITY: Operations either completely succeed or roll back cleanly in <12ms with zero orphaned rows or double billing.',
                relatedTeardown: {
                  title: 'Teardown 02: Halting Runaway Loops & Token Bleed in AI Pipelines',
                  route: '/teardowns#ai-agent-runaway',
                },
                sourceRef: 'Martin Kleppmann: Designing Data-Intensive Applications (Ch. 7)',
              },
            ].map((item) => (
              <StaggerItem key={item.id} direction="up" distance={10}>
                <div className="p-5 sm:p-7 rounded-2xl surface-card border border-white/5 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/5 gap-2">
                    <h3 className="heading-display text-lg sm:text-xl text-white font-bold tracking-tight">
                      {item.dimension}
                    </h3>
                    <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
                      <span>{item.sourceRef}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
                    {/* Left: Fragile AI Pattern */}
                    <div className="p-4 sm:p-5 rounded-xl bg-red-950/15 border border-red-500/20 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-semibold">
                        <XCircle className="w-4 h-4 shrink-0" />
                        <span>FRAGILE AI-GENERATED PATTERN</span>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.aiCode}
                      </p>
                      <div className="pt-2 border-t border-red-500/20 text-xs font-mono text-red-300">
                        <strong>Failure Mode:</strong> {item.consequence}
                      </div>
                    </div>

                    {/* Right: Project AIR Standard */}
                    <div className="p-4 sm:p-5 rounded-xl bg-teal-950/20 border border-teal-500/25 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs font-mono text-teal-300 font-semibold">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>PROJECT AIR RIGOR STANDARD</span>
                      </div>
                      <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.rigorCode}
                      </p>
                      <div className="pt-2 border-t border-teal-500/20 text-xs font-mono text-teal-300">
                        <strong>Runtime Invariant:</strong> {item.outcome}
                      </div>
                    </div>
                  </div>

                  {/* Subtle Internal Navigation Link to Concrete Case Study */}
                  <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => navigateTo(item.relatedTeardown.route)}
                      className="text-slate-400 hover:text-teal-300 flex items-center gap-1.5 transition-colors cursor-pointer group"
                    >
                      <span className="text-teal-400">Related Case Study:</span>
                      <span className="text-slate-300 group-hover:text-white underline decoration-white/20 underline-offset-4">
                        {item.relatedTeardown.title}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <span className="text-slate-600 text-[10px] hidden sm:inline">Verification: 100% Mutation Passed</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
      </section>

      {/* 5. The Complete 3-Gate Framework (Deep Dive with Proof & Real Code Artifacts) */}
      <section id="three-gates" className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/5 space-y-6 sm:space-y-8">
        <FadeInView direction="up" distance={8} blur={true}>
          <div>
            <span className="font-mono text-xs font-bold tracking-wider text-teal-400 uppercase">
              THE VERIFICATION ENGINE · 3-GATE RIGOR
            </span>
            <h2 className="heading-display text-3xl sm:text-5xl text-white tracking-tight mt-2 max-w-3xl">
              The 3-Gate Mathematical Standard
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base max-w-2xl mt-2.5 leading-relaxed">
              Every production pull request, schema migration, and infrastructure deployment must satisfy three independent verification gates before receiving production traffic sign-off.
            </p>
          </div>
        </FadeInView>

        {/* ================= GATE 01 ================= */}
        <FadeInView direction="up" distance={10} scale={true}>
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl surface-card border border-white/10 relative overflow-hidden space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/5 gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <GitBranch className="w-7 h-7" />
                </div>
                <div>
                  <div className="font-mono text-xs text-teal-400 font-semibold tracking-wider uppercase">
                    Gate 01 · Static Soundness &amp; Boundary Invariants
                  </div>
                  <h3 className="heading-display text-2xl sm:text-4xl text-white font-bold tracking-tight">
                    Static Soundness &amp; Schema Validation
                  </h3>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold tracking-tight shrink-0 self-start sm:self-auto">
                GATE CRITERIA: ZERO BOUNDARY HALLUCINATIONS
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left 6 Cols: What is Checked & What Passed Looks Like */}
              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Concrete Verification Harness:
                </div>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  We eliminate every untyped primitive and implicit <code className="text-teal-300 font-mono">any</code>. Every external inbound boundary—including REST payloads, WebSockets, external webhooks, query strings, and database query responses—is parsed through immutable runtime schema validators (Zod/TypeBox).
                </p>

                {/* Real Verified Code Terminal */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/5 font-code text-xs space-y-2 text-slate-300">
                  <div className="flex items-center justify-between text-slate-500 text-[10px] pb-1 border-b border-white/5">
                    <span>harness: tsconfig.strict.json + ast-taint</span>
                    <span className="text-teal-400">PASS</span>
                  </div>
                  <div className="text-teal-400 font-bold">$ tsc --noEmit &amp;&amp; ast-secret-scan</div>
                  <div className="text-emerald-400 font-semibold">✓ TypeScript 5.7+ Strict Null Checks: 0 Warnings</div>
                  <div className="text-emerald-400 font-semibold">✓ 100% Network &amp; DB Boundaries Schema-Validated</div>
                  <div className="text-slate-400">✓ Secret Token Taint Analysis: 0 Keys in Client Bundle</div>
                  <div className="pt-2 text-[11px] text-slate-400 border-t border-white/5">
                    <code>compilerOptions: &#123; strict: true, noImplicitAny: true, exactOptionalPropertyTypes: true &#125;</code>
                  </div>
                </div>
              </div>

              {/* Right 6 Cols: What This Means in Practice (Real Life Scenario) */}
              <div className="lg:col-span-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                <div className="text-xs font-mono text-teal-400 uppercase tracking-wider font-semibold">
                  What This Means in Practice (The Webhook Mutation Incident):
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A third-party payment provider unexpectedly changes their webhook schema, sending an undocumented string instead of an integer.
                </p>
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 text-xs font-sans text-slate-400 leading-relaxed">
                  <strong className="text-red-300 font-mono">Fragile Vibe Code:</strong> Attempts arithmetic or string parsing on undefined, throws an unhandled exception, crashes the Node.js event loop, and drops all active customer sessions.
                </div>
                <div className="p-3.5 rounded-xl bg-teal-950/20 border border-teal-500/20 text-xs font-sans text-slate-300 leading-relaxed">
                  <strong className="text-teal-300 font-mono">Gate 01 Enforced:</strong> The Zod schema intercepts the malformed payload at the HTTP controller boundary, returns an immediate 422 Unprocessable Entity, alerts Sentry with the exact schema diff, and keeps the server running cleanly.
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => navigateTo('/teardowns#healthcare-portal')}
                    className="text-slate-400 hover:text-teal-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Inspect Case Study 03: Resolving Schema Drift</span>
                    <ArrowRight className="w-3 h-3 text-teal-400" />
                  </button>
                  <span className="text-slate-600 text-[10px]">Ref: STD-01 &amp; STD-02</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>

        {/* ================= GATE 02 ================= */}
        <FadeInView direction="up" distance={10} scale={true}>
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl surface-card border border-white/10 relative overflow-hidden space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/5 gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <Database className="w-7 h-7" />
                </div>
                <div>
                  <div className="font-mono text-xs text-teal-400 font-semibold tracking-wider uppercase">
                    Gate 02 · Deterministic State Recovery &amp; Mutation Defense
                  </div>
                  <h3 className="heading-display text-2xl sm:text-4xl text-white font-bold tracking-tight">
                    Deterministic Integration &amp; State Recovery
                  </h3>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-mono text-xs font-bold tracking-tight shrink-0 self-start sm:self-auto">
                GATE CRITERIA: 100% MUTATION KILL RATE
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left 6 Cols */}
              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Concrete Verification Harness:
                </div>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  Traditional unit testing is often hollow: engineers write happy-path assertions that pass without verifying anything. We run Stryker AST mutation engines to deliberately sabotage conditional operators, return values, and loops. If code is mutated and tests do not fail, the PR is rejected.
                </p>

                {/* Real Verified Code Terminal */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/5 font-code text-xs space-y-2 text-slate-300">
                  <div className="flex items-center justify-between text-slate-500 text-[10px] pb-1 border-b border-white/5">
                    <span>harness: stryker.config.json · AST Mutator</span>
                    <span className="text-emerald-400">100% SCORE</span>
                  </div>
                  <div className="text-teal-400 font-bold">$ stryker run --mutate &quot;src/ledger/**&quot;</div>
                  <div className="text-emerald-400 font-semibold">✓ Mutation Score: 100.00% (42/42 Mutants Killed)</div>
                  <div className="text-emerald-400 font-semibold">✓ ACID Rollback Verified: 12ms under simulated network cut</div>
                  <div className="text-slate-400">✓ Redis Idempotency Key TTL: 0 Duplicate Transactions</div>
                  <div className="pt-2 text-[10px] text-slate-400 border-t border-white/5">
                    Mutations Tested: EqualityOperator, BooleanLiteral, ArrayDeclaration, ConditionalExpression
                  </div>
                </div>
              </div>

              {/* Right 6 Cols: What This Means in Practice */}
              <div className="lg:col-span-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                <div className="text-xs font-mono text-teal-400 uppercase tracking-wider font-semibold">
                  What This Means in Practice (The Subway Tunnel Scenario):
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A user clicks &quot;Upgrade Subscription&quot; while entering a subway tunnel. Their mobile connection drops after Stripe charges their card, but before your database receives confirmation.
                </p>
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 text-xs font-sans text-slate-400 leading-relaxed">
                  <strong className="text-red-300 font-mono">Fragile Vibe Code:</strong> Leaves the user billed without access. When the customer retries, the app fires a second request, charging their card twice and creating duplicate user records.
                </div>
                <div className="p-3.5 rounded-xl bg-teal-950/20 border border-teal-500/20 text-xs font-sans text-slate-300 leading-relaxed">
                  <strong className="text-teal-300 font-mono">Gate 02 Enforced:</strong> The transaction is bound to a deterministic idempotency key. When the retry arrives, the system recognizes the existing key, safely links the invoice, and guarantees exactly-once billing.
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => navigateTo('/teardowns#ai-agent-runaway')}
                    className="text-slate-400 hover:text-teal-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Inspect Case Study 02: Halting Token Bleed</span>
                    <ArrowRight className="w-3 h-3 text-teal-400" />
                  </button>
                  <span className="text-slate-600 text-[10px]">Ref: STD-04 &amp; STD-05</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>

        {/* ================= GATE 03 ================= */}
        <FadeInView direction="up" distance={10} scale={true}>
          <div className="p-6 sm:p-8 lg:p-10 rounded-3xl surface-card border border-white/10 relative overflow-hidden space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/5 gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <div className="font-mono text-xs text-teal-400 font-semibold tracking-wider uppercase">
                    Gate 03 · Engine-Tier Isolation &amp; Canary Rollback
                  </div>
                  <h3 className="heading-display text-2xl sm:text-4xl text-white font-bold tracking-tight">
                    Deployment Hardening &amp; Engine-Tier Isolation
                  </h3>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold tracking-tight shrink-0 self-start sm:self-auto">
                GATE CRITERIA: ZERO IDOR VULNERABILITIES
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left 6 Cols */}
              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Concrete Verification Harness:
                </div>
                <p className="font-sans text-sm text-slate-300 leading-relaxed">
                  Multi-tenant isolation must never rely on application developers remembering to add query filters. We push tenant security down to PostgreSQL Row-Level Security (RLS). We also test blue/green traffic splitting with automated rollback thresholds.
                </p>

                {/* Real Verified Code Terminal */}
                <div className="p-4 rounded-xl bg-black/60 border border-white/5 font-code text-xs space-y-2 text-slate-300">
                  <div className="flex items-center justify-between text-slate-500 text-[10px] pb-1 border-b border-white/5">
                    <span>harness: pg_prove + k6 canary traffic split</span>
                    <span className="text-emerald-400">ISOLATED</span>
                  </div>
                  <div className="text-teal-400 font-bold">$ pen-test --idor-scan --rls-verify</div>
                  <div className="text-emerald-400 font-semibold">✓ Tenant A ⇏ Tenant B: HARD REJECTION AT RLS POLICY</div>
                  <div className="text-emerald-400 font-semibold">✓ Canary Health SLA: 100% Traffic Automated Protection</div>
                  <div className="text-slate-400">✓ Rollback SLA: &lt;10s on 5xx Error Budget Breach (k6 circuit breaker)</div>
                  <div className="pt-2 text-[10px] text-slate-400 border-t border-white/5">
                    <code>CREATE POLICY tenant_isolation ON ledger FOR ALL USING (tenant_id = current_setting(&#39;app.org_id&#39;)::uuid);</code>
                  </div>
                </div>
              </div>

              {/* Right 6 Cols: What This Means in Practice */}
              <div className="lg:col-span-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                <div className="text-xs font-mono text-teal-400 uppercase tracking-wider font-semibold">
                  What This Means in Practice (The Insecure ID Scenario):
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A developer adds an administrative endpoint to export invoices and forgets to append <code className="text-teal-300 font-mono">WHERE organization_id = current_org</code>.
                </p>
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 text-xs font-sans text-slate-400 leading-relaxed">
                  <strong className="text-red-300 font-mono">Fragile Vibe Code:</strong> An attacker increments the invoice ID in the URL and downloads another enterprise customer’s billing history, triggering an immediate mandatory GDPR/SOC2 breach disclosure.
                </div>
                <div className="p-3.5 rounded-xl bg-teal-950/20 border border-teal-500/20 text-xs font-sans text-slate-300 leading-relaxed">
                  <strong className="text-teal-300 font-mono">Gate 03 Enforced:</strong> The PostgreSQL engine inspects the cryptographic session claim. The database itself terminates the query with zero rows returned. The bug in application code cannot leak cross-tenant records.
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => navigateTo('/teardowns#fintech-saas')}
                    className="text-slate-400 hover:text-teal-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Inspect Case Study 01: Eliminating IDOR</span>
                    <ArrowRight className="w-3 h-3 text-teal-400" />
                  </button>
                  <span className="text-slate-600 text-[10px]">Ref: STD-03 &amp; STD-06</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* 6. Concrete Engineering Standards We Enforce */}
      <section id="standards" className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-white/5">
        <FadeInView direction="up" distance={8} blur={true}>
          <div className="mb-7 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-bold tracking-wider text-teal-400 uppercase">
                INSTITUTIONAL CODEBASE CHECKLIST
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl text-white tracking-tight mt-2">
                Our 6 Invariant Standards
              </h2>
              <p className="font-sans text-slate-400 text-sm max-w-2xl mt-2 leading-relaxed">
                Every system delivered or audited by Project AIR is verified against these explicit operational criteria.
              </p>
            </div>

            <div className="text-xs font-mono text-slate-500">
              Mandatory CI/CD tripwires on every repository
            </div>
          </div>
        </FadeInView>

        <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                code: 'STD-01',
                title: 'TypeScript Strict Soundness',
                desc: 'strictNullChecks, noImplicitAny, and exactOptionalPropertyTypes enabled across all files with zero exceptions.',
                tooling: 'tsc v5.7+ / ESLint strict-type-checked',
                targetRoute: '/capabilities',
              },
              {
                code: 'STD-02',
                title: 'Zod Runtime Boundary Parsing',
                desc: 'All HTTP parameters, search params, and external API responses validated via runtime schemas before ingestion.',
                tooling: 'Zod v3.24 / TypeBox validator',
                targetRoute: '/teardowns#healthcare-portal',
              },
              {
                code: 'STD-03',
                title: 'PostgreSQL Native RLS Isolation',
                desc: 'Multi-tenant database tables protected by database-level Row-Level Security policies tied to session JWT claims.',
                tooling: 'PostgreSQL 16 native RLS engine',
                targetRoute: '/teardowns#fintech-saas',
              },
              {
                code: 'STD-04',
                title: 'Stryker AST Mutation Verification',
                desc: '100% mutant kill rate enforced on ledger reconciliations, billing calculations, and authentication access policies.',
                tooling: 'Stryker Mutator v8.2',
                targetRoute: '/rigor',
              },
              {
                code: 'STD-05',
                title: 'Autonomous Agent Circuit Breakers',
                desc: 'AI state machines bounded with hard recursion limits, per-session token budgets, and deterministic human fallbacks.',
                tooling: 'LangGraph DAG with hard recursion=5',
                targetRoute: '/teardowns#ai-agent-runaway',
              },
              {
                code: 'STD-06',
                title: 'Zero-Downtime Blue/Green Canary',
                desc: 'Database migrations split into backward-compatible expand/contract phases with sub-10 second automated rollbacks.',
                tooling: 'Cloud Run traffic splitting + k6 healthchecks',
                targetRoute: '/capabilities',
              },
            ].map((std) => (
              <StaggerItem key={std.code} direction="up" distance={10} scale={true}>
                <div className="h-full p-5 sm:p-6 rounded-2xl surface-card border border-white/5 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-teal-400 font-bold px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20">
                        {std.code}
                      </span>
                      <span className="font-mono text-[10px] text-slate-500">{std.tooling}</span>
                    </div>
                    <h3 className="heading-display text-base text-white font-bold">
                      {std.title}
                    </h3>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed">
                      {std.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => navigateTo(std.targetRoute)}
                      className="text-slate-400 hover:text-teal-300 font-mono text-[11px] flex items-center justify-between w-full transition-colors cursor-pointer group"
                    >
                      <span>View Implementation Invariant</span>
                      <ArrowRight className="w-3 h-3 text-teal-400 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
        </StaggerContainer>
      </section>

      {/* 7. Bottom Conversion Banner */}
      <section className="py-10 sm:py-14 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <FadeInView direction="up" distance={10} scale={true}>
          <div className="p-6 sm:p-10 lg:p-12 rounded-3xl surface-card border border-teal-500/30 relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-teal-400 uppercase tracking-widest">
                VERIFICATION ENGAGEMENT
              </span>
              <h2 className="heading-display text-3xl sm:text-5xl text-white font-bold tracking-tight mt-2.5">
                Have a codebase that needs rigorous verification?
              </h2>
              <p className="font-sans text-base sm:text-lg text-slate-300 mt-3.5 leading-relaxed">
                Whether you are rescuing a fragile AI prototype before fundraising due diligence or engineering a mission-critical platform from scratch, we apply the 3-Gate Rigor Standard to ensure software that never rots.
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
                  onClick={() => navigateTo('/pricing')}
                  className="px-6 py-3.5 rounded-full surface-card border border-white/10 hover:border-teal-400/40 text-slate-200 hover:text-white font-sans text-xs font-medium tracking-wider transition-colors cursor-pointer text-center"
                >
                  View Fixed-Price Audit Tiers ($249–$1,499)
                </button>
              </div>

              <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Direct Principal Engineer Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Mutual NDA Executed Prior to Code Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>48-Hour Turnaround Available</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </section>

      {/* 8. Studio Footer */}
      <StudioFooter onOpenBooking={() => setIsBookingOpen(true)} />
    </div>
  );
}
