import React, { useState } from 'react';

interface CapabilityItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  stack: string[];
  deliverables: string[];
  invariant: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'backend',
    category: 'DISTRIBUTED SYSTEMS · COMPUTE',
    title: 'High-Throughput Backends & Event Sinks',
    summary:
      'We architect low-latency, strictly-typed backend services built with zero-overhead error boundaries and resilient concurrency.',
    stack: ['TypeScript', 'Rust', 'Go', 'Node.js', 'gRPC / Protocol Buffers', 'Redis'],
    deliverables: [
      'Typed RPC & OpenAPI contract schemas',
      'Distributed worker queues with dead-letter replay',
      'Idempotent webhook handlers & payment sinks',
      'Sub-25ms P99 latency SLA targets',
    ],
    invariant: 'P99 Latency < 25ms · Zero Silent Failures',
  },
  {
    id: 'frontend',
    category: 'CLIENT-SIDE RUNTIME · INTERFACES',
    title: 'Institutional Operating System Web UIs',
    summary:
      'We engineer desktop-grade, zero-slop web interfaces with sub-200ms interaction feedback, optimistic state engines, and zero layout shift.',
    stack: ['React 19', 'Next.js App Router', 'Tailwind CSS v4', 'Canvas / WebGL', 'WebSockets'],
    deliverables: [
      'Optimistic state updates with rollback reconciliation',
      'Deep keyboard accessibility & Command Palettes (⌘K)',
      'Sub-100ms micro-interaction budget',
      'Full WCAG AA compliance and dark-mode fidelity',
    ],
    invariant: 'Input Latency ≤ 16ms · Zero Cumulative Layout Shift',
  },
  {
    id: 'storage',
    category: 'TRANSACTIONAL DATA · PERSISTENCE',
    title: 'Hardened Relational Schemas & Migrations',
    summary:
      'We build relational foundations that survive scale. Fully normalized schemas, cryptographic foreign-key relationships, and zero-loss migrations.',
    stack: ['PostgreSQL', 'Cloud SQL', 'Drizzle ORM / Prisma', 'pgvector', 'Redis Cluster'],
    deliverables: [
      'Atomic migration pipelines with automated reverse rollbacks',
      'Fine-grained Row Level Security (RLS) policies',
      'Multi-tenant database isolation strategies',
      'Strict schema validation gates preventing runtime drift',
    ],
    invariant: 'ACID Strict · Zero Data Loss on Rollback',
  },
  {
    id: 'quality',
    category: 'VERIFICATION ENGINES · HARNESSES',
    title: 'Deterministic Mutation & Fuzzing Harnesses',
    summary:
      'We don’t believe in shallow tests. We run Stryker AST mutation engines that inject deliberate bugs into your codebase to verify that test suites kill them.',
    stack: ['Stryker Mutator', 'Vitest', 'Playwright', 'Fast-Check (Property Fuzzing)', 'Docker Hermetic'],
    deliverables: [
      '100% Mutation score on core business and financial domains',
      '500,000-run randomized property fuzzing suites',
      'Headless browser E2E flows testing multi-tenant workflows',
      'Hermetic containerized database test environments',
    ],
    invariant: '100% Mutation Kill Rate · Zero Untested Branches',
  },
  {
    id: 'infra',
    category: 'HERMETIC INFRASTRUCTURE · DEPLOYMENT',
    title: 'Zero-Downtime Blue/Green Cloud Pipelines',
    summary:
      'Infrastructure as code from Day 1. Ephemeral preview environments, automated canary testing, and immutable cloud deployments with zero downtime.',
    stack: ['Terraform / OpenTofu', 'Docker', 'Kubernetes', 'Cloud Run / AWS ECS', 'GitHub Actions CI'],
    deliverables: [
      'Automated traffic ramp-up (5% → 25% → 100%) with error-budget tripwires',
      'Hermetic reproducibility: identical staging and production environments',
      'Automatic TLS, DDoS shielding, and WAF protection',
      'Continuous compliance audit trails for SOC2 / ISO readiness',
    ],
    invariant: 'Zero-Downtime Releases · 1-Click Rollback in <10s',
  },
];

export const CapabilitiesStack: React.FC = () => {
  const [selectedCap, setSelectedCap] = useState<CapabilityItem>(CAPABILITIES[0]);

  return (
    <section id="capabilities" className="py-20 border-b border-white/10 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-[#3FD6D6] uppercase tracking-wider mb-2">
            <span>02 · CAPABILITIES &amp; STACK</span>
            <span>·</span>
            <span className="text-slate-400">CORE ENGINEERING DISCIPLINES</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
            Production-grade systems from database to display.
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-sm font-body text-slate-400 max-w-md">
          We do not deliver shallow mockups. We write the actual production architecture,
          integrate live APIs, configure your databases, and ship audited deployments.
        </p>
      </div>

      {/* Main Grid: Interactive Sidebar + Rich Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Capability Nav (5 Cols) */}
        <div className="lg:col-span-5 space-y-2">
          {CAPABILITIES.map((cap) => {
            const isSelected = cap.id === selectedCap.id;
            return (
              <button
                key={cap.id}
                onClick={() => setSelectedCap(cap)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-white/[0.06] border-[#3FD6D6]/40 text-white shadow-lg'
                    : 'bg-white/[0.01] border-white/5 text-slate-400 hover:text-white hover:bg-white/[0.03] hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#3FD6D6] tracking-wider uppercase">
                    {cap.category}
                  </span>
                  {isSelected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3FD6D6] animate-pulse" />
                  )}
                </div>
                <div className="font-display font-semibold text-base sm:text-lg text-white mt-1">
                  {cap.title}
                </div>
                <div className="font-mono text-xs text-slate-400 mt-1 truncate">
                  {cap.invariant}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Details (7 Cols) */}
        <div className="lg:col-span-7 obsidian-card p-6 sm:p-8 rounded-xl border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="space-y-6">
            <div>
              <span className="font-mono text-xs text-[#3FD6D6] uppercase tracking-wider">
                {selectedCap.category}
              </span>
              <h3 className="font-display font-bold text-2xl text-white mt-1">
                {selectedCap.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mt-3 font-body">
                {selectedCap.summary}
              </p>
            </div>

            {/* Core Invariant Callout */}
            <div className="p-3.5 bg-black/50 border border-[#3FD6D6]/30 rounded-lg flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase">
                ENGINEERING INVARIANT
              </span>
              <span className="text-xs font-mono font-bold text-[#3FD6D6]">
                {selectedCap.invariant}
              </span>
            </div>

            {/* Deliverables List */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Key Deliverables & Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedCap.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white/[0.02] border border-white/5 rounded text-xs text-slate-300 flex items-start space-x-2"
                  >
                    <span className="text-[#3FD6D6] font-mono">0{idx + 1}.</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Stack Badges */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Verified Production Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCap.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
