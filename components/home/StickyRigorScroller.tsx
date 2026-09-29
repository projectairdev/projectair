import React from 'react';
import { GitBranch, Database, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TiltCard } from '@/components/ui/TiltCard';
import { FadeInView } from '@/components/ui/FadeInView';

export const StickyRigorScroller: React.FC = () => {
  const gates = [
    {
      gateNum: '01',
      tag: 'Static Soundness',
      badge: 'TYPE_SAFE: 100%',
      icon: GitBranch,
      title: 'Static Soundness & Schema Validation',
      description:
        'Zero untyped any primitives. Every inbound external payload, webhook, and database query is validated via immutable Zod runtime schemas.',
      telemetry: {
        header: 'AST TYPE_CHECKER · TS STRICT',
        status: 'DETERMINISTIC',
        rows: [
          { label: 'PayloadValidator.safeParse()', val: 'STRICT_INVARIANT', highlight: 'text-teal-300' },
          { label: 'AST Secret Leak Scan', val: '0 IN REPO', highlight: 'text-emerald-400' },
        ],
      },
      checkpoints: [
        'Zero-warning TypeScript in strict mode',
        'AST secret scanning preventing token leakage',
        'Cryptographic API boundary contracts',
      ],
      footerLeft: 'INVARIANT: ZERO UNTYPED ANY',
      footerRight: 'TS 5.7+ STRICT',
      spotlight: 'rgba(45, 212, 191, 0.22)',
    },
    {
      gateNum: '02',
      tag: 'Deterministic Recovery',
      badge: '42/42 MUTANTS KILLED',
      icon: Database,
      title: 'Deterministic Integration & State Recovery',
      description:
        'Failures happen in distributed systems. We enforce ACID transactional boundaries with automated rollbacks and mock matrices for third-party AI APIs.',
      telemetry: {
        header: 'MUTATION HARNESS · STRYKER',
        status: '100% SCORE',
        rows: [
          { label: 'ACID Transaction Rollback', val: '<12ms LATENCY', highlight: 'text-teal-300' },
          { label: 'Synthetic Fault Sabotage', val: '42/42 KILLED', highlight: 'text-emerald-400' },
        ],
      },
      checkpoints: [
        '100% Mutation score on core business logic',
        'Automated ACID rollback verification',
        'Flaky test quarantine & deterministic seed mocks',
      ],
      footerLeft: 'FRAMEWORK: STRYKER MUTATOR',
      footerRight: 'ACID READY',
      spotlight: 'rgba(45, 212, 191, 0.22)',
    },
    {
      gateNum: '03',
      tag: 'Isolation & Scale',
      badge: 'ZERO IDOR LEAKS',
      icon: ShieldCheck,
      title: 'Deployment Hardening & Isolation',
      description:
        'Multi-tenant data isolation at the database engine level (Row-Level Security) with zero-downtime blue/green deployment pipelines.',
      telemetry: {
        header: 'POSTGRES RLS ENGINE · RBAC',
        status: 'SECURED',
        rows: [
          { label: 'Tenant A ⇏ Tenant B Route', val: '[IDOR BLOCKED]', highlight: 'text-orange-400' },
          { label: 'Blue/Green Rollback Trigger', val: '<10s ROLLBACK', highlight: 'text-emerald-400' },
        ],
      },
      checkpoints: [
        'Cryptographic multi-tenant IDOR protection',
        'Automated sub-10s rollback triggers',
        'Zero-downtime database migration schema gates',
      ],
      footerLeft: 'DATABASE: ROW LEVEL SECURITY',
      footerRight: 'AUDITED',
      spotlight: 'rgba(45, 212, 191, 0.22)',
    },
  ];

  return (
    <section id="rigor" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-white/5">
      {/* Section Header: Matching CapabilitiesBento layout and rhythm */}
      <FadeInView className="mb-12 max-w-3xl">
        <span className="font-sans text-xs font-medium tracking-wider text-teal-400 uppercase">
          03 · The 3-Gate Rigor Standard
        </span>
        <h2 className="heading-display text-2xl sm:text-4xl text-white tracking-tight mt-1.5">
          How We Guarantee Software Doesn’t Rot in Production
        </h2>
        <p className="font-sans text-slate-400 text-sm max-w-2xl mt-2 leading-relaxed">
          Most testing is theater: superficial checks that assert nothing. We enforce three mathematical verification gates before code reaches production traffic.
        </p>
      </FadeInView>

      {/* 3 Equal-Width, Equal-Height Horizontal Cards on Desktop, Responsive Stack on Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {gates.map((gate, idx) => {
          const IconComponent = gate.icon;
          return (
            <FadeInView key={gate.gateNum} delay={idx * 0.12} className="h-full">
              <TiltCard
                className="p-6 sm:p-8 flex flex-col justify-between h-full"
                spotlightColor={gate.spotlight}
              >
                {/* Card Upper Content */}
                <div className="flex-1 flex flex-col">
                  {/* 1. Top Header Bar: Gate Number + Tag + Status Badge */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-teal-400">
                        GATE {gate.gateNum} ·
                      </span>
                      <span className="font-sans text-xs text-slate-400">
                        {gate.tag}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-teal-300 font-mono text-[10px] tracking-tight">
                      {gate.badge}
                    </span>
                  </div>

                  {/* 2. Title & Icon */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-teal-400 shrink-0 mt-1">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="heading-display text-xl sm:text-2xl text-white tracking-tight">
                        {gate.title}
                      </h3>
                    </div>
                  </div>

                  {/* 3. Short Description with Consistent Min-Height */}
                  <p className="text-xs sm:text-sm font-sans text-slate-400 leading-relaxed mb-6 min-h-[44px]">
                    {gate.description}
                  </p>

                  {/* 4. Structured Technical Invariant Telemetry Box */}
                  <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/5">
                      <span className="text-slate-400">{gate.telemetry.header}</span>
                      <span className="text-teal-400 font-bold">{gate.telemetry.status}</span>
                    </div>
                    {gate.telemetry.rows.map((row, rIdx) => (
                      <div key={rIdx} className="flex items-center justify-between text-[11px] text-slate-300">
                        <span className="truncate pr-2">{row.label}</span>
                        <span className={`font-semibold shrink-0 ${row.highlight}`}>
                          {row.val}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 5. Technical Verification Checklist */}
                  <div className="space-y-3 pt-4 border-t border-white/5 text-xs font-sans mb-6">
                    {gate.checkpoints.map((point, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300 leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. Bottom Tags / Status Line Aligned to Bottom Baseline */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span className="truncate pr-2">{gate.footerLeft}</span>
                  <span className="text-teal-400 shrink-0">{gate.footerRight}</span>
                </div>
              </TiltCard>
            </FadeInView>
          );
        })}
      </div>
    </section>
  );
};

export default StickyRigorScroller;
