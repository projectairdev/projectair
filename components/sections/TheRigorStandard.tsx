import React, { useState } from 'react';

export const TheRigorStandard: React.FC = () => {
  const [isRunningMutations, setIsRunningMutations] = useState(false);
  const [mutationLogs, setMutationLogs] = useState<string[]>([
    '[INIT] Stryker AST Mutator Engine loaded...',
    '[SCAN] Found 14 files with 312 mutable AST syntax branches.',
    '[READY] Click "RUN MUTATION SUITE" to simulate live test gate verification.',
  ]);
  const [mutationScore, setMutationScore] = useState<number | null>(null);

  const handleRunMutationTest = () => {
    if (isRunningMutations) return;
    setIsRunningMutations(true);
    setMutationScore(null);
    setMutationLogs(['[RUN] Invariant verification started on target: core/payment_ledger.ts']);

    const steps = [
      '[MUTANT #01] BinaryExpression: mutated a + b -> a - b ... [TEST SUITE RUNNING]',
      '[KILL] Test "LedgerInvariants.reconciliation" caught Mutant #01. Killed in 14ms.',
      '[MUTANT #02] EqualityOperator: mutated session.isValid === true -> false ... [TEST SUITE RUNNING]',
      '[KILL] Test "RBAC.tenant_boundary" caught Mutant #02. Killed in 9ms.',
      '[MUTANT #03] BlockStatement: cleared method body { clearAuditLogs() } ... [TEST SUITE RUNNING]',
      '[KILL] Test "SecurityAudit.tamper_evident_trail" caught Mutant #03. Killed in 18ms.',
      '[MUTANT #04] ConditionalExpression: inverted if (balance >= amount) ... [TEST SUITE RUNNING]',
      '[KILL] Test "PropertyFuzz.overdraft_protection" caught Mutant #04. Killed in 22ms.',
      '[VERIFICATION COMPLETE] 312 / 312 mutants terminated. 0 survived. Score: 100.00%',
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setMutationLogs((prev) => [...prev, step]);
        if (index === steps.length - 1) {
          setIsRunningMutations(false);
          setMutationScore(100);
        }
      }, (index + 1) * 350);
    });
  };

  const PIPELINE_STAGES = [
    {
      num: '01',
      title: 'Contract-First Schemas',
      sub: 'Zero Boundary Hallucinations',
      desc: 'All API contracts, event payloads, and database fields are written as strict runtime schema validators (Zod/TypeBox) before business code is authored.',
    },
    {
      num: '02',
      title: 'AST Mutation Testing',
      sub: 'Synthetically Injected Faults',
      desc: 'We mutate operators and branches across the abstract syntax tree. If a test doesn’t fail when code is sabotaged, the PR is rejected.',
    },
    {
      num: '03',
      title: 'Property-Based Fuzzing',
      sub: '500,000 Invariant Runs',
      desc: 'Randomized state generator suites simulate millions of edge cases, concurrent race conditions, and corrupted network payloads.',
    },
    {
      num: '04',
      title: 'Cryptographic Security Gate',
      sub: 'Zero-CVE Strict Enforcement',
      desc: 'Continuous automated pen-testing, static taint analysis, and strict tenant RBAC policies. Client bundles contain zero secrets.',
    },
    {
      num: '05',
      title: 'Blue/Green Canary Deploy',
      sub: 'Zero-Downtime Guarantee',
      desc: 'Automated health and schema check gates before 100% traffic allocation. Automated rollback triggers in <10 seconds on error-budget breach.',
    },
  ];

  return (
    <section id="rigor" className="py-20 border-b border-white/5 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="font-sans text-xs font-medium tracking-wider text-teal-400 uppercase">
            03 · The Rigor Standard
          </span>
          <h2 className="heading-display text-2xl sm:text-4xl text-white tracking-tight mt-1.5">
            How we guarantee software doesn&apos;t rot.
          </h2>
        </div>
        <p className="font-sans text-slate-400 text-sm max-w-md leading-relaxed">
          Most testing is theater: green checks that assert nothing.
          We use mathematical verification and mutation testing to prove software resilience.
        </p>
      </div>

      {/* 5-Phase Pipeline Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
        {PIPELINE_STAGES.map((stage) => (
          <div
            key={stage.num}
            className="surface-card surface-card-hover rounded-xl p-5 flex flex-col justify-between"
          >
            <div>
              <div className="font-sans text-xs text-teal-400 font-semibold mb-2">
                Stage {stage.num}
              </div>
              <h3 className="heading-display font-semibold text-base text-white mb-1">
                {stage.title}
              </h3>
              <div className="text-xs font-sans text-slate-400 mb-3">
                {stage.sub}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {stage.desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 font-sans text-[11px] text-teal-400/90 font-medium">
              Verified Invariant
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Mutation Testing Terminal */}
      <div className="surface-card rounded-2xl overflow-hidden shadow-2xl">
        <div className="bg-[#090B0E] px-4 py-3 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <span className="font-mono text-xs text-slate-400">
              stryker-ast-mutator --deterministic-gate
            </span>
          </div>

          <div className="flex items-center space-x-4">
            {mutationScore !== null && (
              <div className="font-mono text-xs text-teal-300 font-semibold">
                Score: {mutationScore}% Verified
              </div>
            )}
            <button
              onClick={handleRunMutationTest}
              disabled={isRunningMutations}
              className="px-3.5 py-1.5 bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans text-xs font-semibold rounded-lg transition-colors cursor-pointer disabled:opacity-50"
            >
              {isRunningMutations ? 'Mutating AST branches...' : 'Run Mutation Suite →'}
            </button>
          </div>
        </div>

        <div className="p-5 bg-black/80 font-mono text-xs space-y-1.5 min-h-[220px] max-h-[300px] overflow-y-auto">
          {mutationLogs.map((log, i) => {
            const isKill = log.includes('[KILL]');
            const isComplete = log.includes('[VERIFICATION COMPLETE]');
            const isMutant = log.includes('[MUTANT');

            return (
              <div
                key={i}
                className={`${
                  isKill
                    ? 'text-[#3FD6D6]'
                    : isComplete
                    ? 'text-emerald-400 font-bold'
                    : isMutant
                    ? 'text-amber-300'
                    : 'text-slate-400'
                }`}
              >
                {log}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
