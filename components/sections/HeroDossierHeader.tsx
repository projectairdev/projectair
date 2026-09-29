import React from 'react';

interface HeroDossierHeaderProps {
  onOpenBooking: () => void;
  onOpenMenu: () => void;
}

export const HeroDossierHeader: React.FC<HeroDossierHeaderProps> = ({
  onOpenBooking,
  onOpenMenu,
}) => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 border-b border-white/10 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Top Editorial Kicker */}
      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-6 tracking-wider">
        <span className="text-[#3FD6D6]">DOSSIER 2026.1</span>
        <span aria-hidden="true">·</span>
        <span className="text-white/80">INSTITUTIONAL AI-AUGMENTED ENGINEERING STUDIO</span>
        <span aria-hidden="true">·</span>
        <span>BENGALURU & GLOBAL</span>
      </div>

      {/* Primary Authoritative Headline in Space Grotesk */}
      <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] max-w-4xl text-balance">
        The AI-build option that actually tests, audits, and ships properly.
      </h1>

      {/* Body Copy in Inter */}
      <p className="mt-6 text-slate-400 text-base sm:text-lg lg:text-xl font-body leading-relaxed max-w-3xl">
        Project AIR is the engineering counterweight to fragile, "vibe-coded" prototypes.
        While <span className="text-white font-medium">41% of modern code is AI-generated</span> with{' '}
        <span className="text-[#FF7A4D] font-medium">39% higher code churn</span>, we deliver
        deterministic architecture, 100% mutation-tested codebases, and zero-downtime infrastructure.
      </p>

      {/* Actions and Proof Signals */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          onClick={onOpenBooking}
          className="px-6 py-3 bg-[#3FD6D6] text-[#0A0D12] font-mono text-xs font-semibold rounded hover:bg-white transition-all cursor-pointer shadow-lg shadow-[#3FD6D6]/10 flex items-center space-x-2"
        >
          <span>BOOK ARCHITECTURE CALL</span>
          <span>→</span>
        </button>

        <button
          onClick={onOpenMenu}
          className="px-6 py-3 bg-white/[0.04] border border-white/15 text-white font-mono text-xs hover:bg-white/10 hover:border-white/30 rounded transition-all cursor-pointer flex items-center space-x-2"
        >
          <span>EXPLORE SYSTEM INDEX</span>
          <span className="text-[#3FD6D6]">⌘K</span>
        </button>

        <div className="hidden md:flex items-center space-x-2 pl-4 text-xs font-mono text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3FD6D6]" />
          <span>ZERO SALES TEAMS. DIRECT CTO/ARCHITECT EVALUATION.</span>
        </div>
      </div>

      {/* Top Telemetry Strip */}
      <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
        <div>
          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
            AI Code Churn Baseline
          </div>
          <div className="mt-1 font-mono text-xl sm:text-2xl font-bold text-[#FF7A4D] tabular-nums">
            +39%
          </div>
          <div className="text-xs text-slate-400 mt-0.5">Empirical industry waste</div>
        </div>

        <div>
          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
            Mutation Kill Rate
          </div>
          <div className="mt-1 font-mono text-xl sm:text-2xl font-bold text-[#3FD6D6] tabular-nums">
            100%
          </div>
          <div className="text-xs text-slate-400 mt-0.5">AST branch verification</div>
        </div>

        <div>
          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
            Deployment Invariant
          </div>
          <div className="mt-1 font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">
            0-Downtime
          </div>
          <div className="text-xs text-slate-400 mt-0.5">Automated blue/green gate</div>
        </div>

        <div>
          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
            IP Ownership
          </div>
          <div className="mt-1 font-mono text-xl sm:text-2xl font-bold text-white tabular-nums">
            100% Client
          </div>
          <div className="text-xs text-slate-400 mt-0.5">Clean transfer from Day 1</div>
        </div>
      </div>
    </section>
  );
};
