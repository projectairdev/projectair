import React, { useState } from 'react';

interface EngagementModelsProps {
  onOpenBooking: () => void;
}

export const EngagementModels: React.FC<EngagementModelsProps> = ({ onOpenBooking }) => {
  const [selectedTrack, setSelectedTrack] = useState<'blueprint' | 'production' | 'hardening'>('production');

  const TRACKS = [
    {
      id: 'blueprint',
      tag: 'Phase 01 · Scoping',
      title: '2-Week Architecture Blueprint',
      subtitle: 'For seed and Series A founders planning a greenfield or high-scale rebuild.',
      duration: '2-Week Intensive Sprint',
      team: '1 Principal Architect + 1 Senior Systems Engineer',
      features: [
        'Deterministic Domain-Driven Architecture Specification',
        'Zod schema contracts for all API boundaries',
        'Database ERD & atomic migration rollback scripts',
        'Automated mutation testing harness configured in CI',
        'Infrastructure-as-Code (Terraform) deployment blueprint',
      ],
      deliverable: 'Complete deployable scaffolding + institutional architecture spec',
    },
    {
      id: 'production',
      tag: 'Flagship · Dedicated Squad',
      title: 'End-to-End Production Studio Build',
      subtitle: 'Full autonomous engineering squad executing your entire production platform.',
      duration: '6 to 12-Week Milestones',
      team: '1 Lead Architect + 2 Full-Stack Engineers + 1 DevOps/Sec Engineer',
      features: [
        'Complete web & backend system implementation from scratch',
        'Sub-200ms institutional interface with zero layout shift',
        '100% Mutation score on core financial/business logic',
        'Zero-CVE security posture with automated pen-test gates',
        'Blue/Green zero-downtime deployment pipelines',
        '100% Intellectual Property transfer with zero vendor lock-in',
      ],
      deliverable: 'Live, audited, high-throughput software operating in production',
    },
    {
      id: 'hardening',
      tag: 'Rescue · Codebase Hardening',
      title: 'Post-Vibe-Code Refactor & Hardening',
      subtitle: 'For teams with fragile AI-generated prototypes failing under real customer load.',
      duration: '4-Week Emergency Stabilization',
      team: '1 Principal Systems Architect + 2 Refactoring Specialists',
      features: [
        'Full AST static analysis & code smell decomposition',
        'Elimination of silent error swallowing, memory leaks, and loose types',
        'Database migration repair and ACID invariant enforcement',
        'Reverse-engineering comprehensive test suites to catch regressions',
        'Zero-downtime blue/green migration of live database & traffic',
      ],
      deliverable: 'Rock-solid, enterprise-grade codebase passing SOC2 / security audits',
    },
  ];

  return (
    <section id="pricing" className="py-20 border-b border-white/5 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="font-sans text-xs font-medium tracking-wider text-teal-400 uppercase">
            04 · Pricing &amp; Engagement Models
          </span>
          <h2 className="heading-display text-2xl sm:text-4xl text-white tracking-tight mt-1.5">
            Transparent, direct engineering contracts.
          </h2>
        </div>
        <p className="font-sans text-slate-400 text-sm max-w-md leading-relaxed">
          No opaque agency retainers or outsourced junior developers.
          Direct collaboration with seasoned systems engineers who write the code.
        </p>
      </div>

      {/* Track Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {TRACKS.map((track) => {
          const isSelected = selectedTrack === track.id;
          return (
            <div
              key={track.id}
              onClick={() => setSelectedTrack(track.id as any)}
              className={`surface-card surface-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all cursor-pointer ${
                isSelected
                  ? 'border-teal-500/40 ring-1 ring-teal-500/30'
                  : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-sans text-teal-400 font-medium">
                    {track.tag}
                  </span>
                  {isSelected && (
                    <span className="text-xs font-sans text-teal-300 font-medium">
                      Selected
                    </span>
                  )}
                </div>

                <h3 className="heading-display text-xl text-white mb-2">
                  {track.title}
                </h3>
                <p className="text-xs text-slate-400 font-sans mb-6 leading-relaxed">
                  {track.subtitle}
                </p>

                <div className="space-y-2 mb-6 p-3 bg-white/[0.02] rounded-xl border border-white/5 font-sans text-xs">
                  <div className="text-slate-300 flex justify-between">
                    <span className="text-slate-500">Cadence:</span>
                    <span>{track.duration}</span>
                  </div>
                  <div className="text-slate-300 flex justify-between">
                    <span className="text-slate-500">Team:</span>
                    <span className="truncate pl-2">{track.team}</span>
                  </div>
                </div>

                <div className="text-xs font-sans text-slate-400 font-medium mb-3">
                  Included deliverables:
                </div>
                <ul className="space-y-2.5 mb-6">
                  {track.features.map((feat, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start space-x-2 font-sans">
                      <span className="text-teal-400 font-bold shrink-0">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="text-xs font-sans text-slate-500 mb-1">
                  Primary deliverable
                </div>
                <div className="text-xs font-sans text-slate-300 mb-4">
                  {track.deliverable}
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBooking();
                  }}
                  className={`w-full py-2.5 rounded-xl font-sans text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-teal-400 text-slate-950 hover:bg-teal-300'
                      : 'bg-white/[0.04] text-slate-200 hover:bg-white/[0.08] hover:text-white border border-white/10'
                  }`}
                >
                  Schedule scoping call →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Institutional Guarantee Banner */}
      <div className="surface-card p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="text-xs font-sans font-semibold text-teal-400 uppercase tracking-wider">
            The Project AIR Rigor Guarantee
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-sans leading-relaxed">
            If our delivered test harness fails to kill any injected syntax mutant or if any
            schema regression occurs during blue/green migration, our team stays on-call at zero
            additional billing until deterministic invariants are restored.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenBooking}
          className="whitespace-nowrap px-5 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-teal-500/30 text-white font-sans text-xs font-medium rounded-xl transition-all cursor-pointer"
        >
          Discuss terms with an architect →
        </button>
      </div>
    </section>
  );
};
