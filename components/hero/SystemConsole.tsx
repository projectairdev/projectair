import React, { useState, useEffect } from 'react';

export const SystemConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'audit' | 'pipeline'>('audit');
  const [latency, setLatency] = useState(18);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(16 + Math.random() * 6));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl w-full mx-auto mt-12 bg-[#0E131F]/90 border border-white/15 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl text-left transition-all">
      {/* Console Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
        {/* Mac-style Window Dots */}
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>

        {/* Center Title */}
        <div className="font-mono text-[11px] text-slate-400 tracking-wider flex items-center gap-2">
          <span>PROJECT_AIR · DEPLOYMENT_GATE_RUNNER.ts</span>
          <span className="hidden sm:inline-block text-white/20">|</span>
          <span className="hidden sm:inline-block text-slate-500">{latency}ms TTFB</span>
        </div>

        {/* Right Status Indicator */}
        <div className="font-mono text-[11px] text-teal-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span>GATE 03: VERIFIED</span>
        </div>
      </div>

      {/* Console Terminal Body */}
      <div className="p-5 font-mono text-xs leading-relaxed space-y-2.5 text-slate-300 bg-[#080B10]/70">
        <div>
          <span className="text-slate-500">{'>'} Initiating multi-stage production audit...</span>
        </div>
        <div>
          <span className="text-teal-400 font-semibold">✓ GATE 01 [STATIC SOUNDNESS]:</span>{' '}
          <span className="text-slate-200">100% strict TypeScript. 0 &apos;any&apos; escapes.</span>
        </div>
        <div>
          <span className="text-teal-400 font-semibold">✓ GATE 02 [INTEGRATION]:</span>{' '}
          <span className="text-slate-200">42/42 Playwright E2E suites passing. DB rollbacks verified.</span>
        </div>
        <div>
          <span className="text-teal-400 font-semibold">✓ GATE 03 [SECURITY AUDIT]:</span>{' '}
          <span className="text-slate-200">IDOR scan zero-findings. Row-Level Security active.</span>
        </div>
        <div>
          <span className="text-orange-400 font-semibold">⚡ RUNTIME EVAL:</span>{' '}
          <span className="text-slate-200">LLM circuit breaker armed. Max token spend capped at $5.00/session.</span>
        </div>
        <div className="pt-1 flex items-center gap-2">
          <span className="text-teal-400 animate-pulse font-bold">■</span>
          <span className="text-slate-400">STATUS: PRODUCTION_READY. Awaiting deployment pipeline...</span>
        </div>
      </div>
    </div>
  );
};
