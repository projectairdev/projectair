'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { FadeInView } from '@/components/ui/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';

export const CodeUIMirror: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'invoice' | 'agent'>('invoice');
  const [activeContract, setActiveContract] = useState<'schema' | 'rls' | 'breaker' | null>(null);
  const [tenantSwitchAttempted, setTenantSwitchAttempted] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState('tenant_alpha_492');
  const [agentRunning, setAgentRunning] = useState(false);
  const [tokenSpend, setTokenSpend] = useState(4.82);

  const handleTenantSwitch = (newTenant: string) => {
    if (newTenant !== 'tenant_alpha_492') {
      setTenantSwitchAttempted(true);
      setTimeout(() => setTenantSwitchAttempted(false), 3500);
    } else {
      setSelectedTenant(newTenant);
      setTenantSwitchAttempted(false);
    }
  };

  const handleSimulateSpend = () => {
    setAgentRunning(true);
    setTimeout(() => {
      setTokenSpend(5.00);
      setAgentRunning(false);
    }, 600);
  };

  return (
    <section id="the-counterweight" className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-11 border-b border-theme">
      {/* Section Eyebrow & Header */}
      <FadeInView direction="up" distance={8} blur={true}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
          <div>
            <span className="font-mono text-xs font-semibold tracking-widest text-teal-400 uppercase">
              02 · Code-to-UI Execution Mirror
            </span>
            <h2 className="heading-display text-2xl sm:text-4xl text-heading tracking-tight mt-1.5">
              How Architectural Contracts Shape Runtime Reality
            </h2>
          </div>
        </div>
      </FadeInView>

      {/* Dual-Panel Container */}
      <StaggerContainer staggerDelay={0.09} className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        
        {/* LEFT PANEL: The Code Contract */}
        <StaggerItem direction="up" distance={10} scale={true} className="flex flex-col">
          <div className="h-full surface-card rounded-2xl overflow-hidden flex flex-col border border-theme shadow-2xl">
          {/* File Tabs */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--bg-surface-elevated)] border-b border-theme">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('invoice');
                  setActiveContract(null);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  activeTab === 'invoice'
                    ? 'bg-teal-500/10 text-teal-400 font-medium border border-teal-500/30'
                    : 'text-secondary hover:text-heading'
                }`}
              >
                invoice_service.ts
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('agent');
                  setActiveContract(null);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  activeTab === 'agent'
                    ? 'bg-teal-500/10 text-teal-400 font-medium border border-teal-500/30'
                    : 'text-secondary hover:text-heading'
                }`}
              >
                agent_controller.py
              </button>
            </div>
            <div className="text-[11px] font-mono text-muted flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>STRICT_TYPES: ENFORCED</span>
            </div>
          </div>

          {/* Code Window Body */}
          <div className="p-6 font-code text-xs leading-relaxed overflow-x-auto bg-[var(--bg-base)] flex-1">
            {activeTab === 'invoice' ? (
              <div className="space-y-4 text-primary">
                <div className="text-muted italic font-code">
                  // Enterprise RLS &amp; Tenant Boundary Guard
                </div>
                
                <div className="font-code">
                  <span className="text-purple-400">import</span> &#123; z &#125; <span className="text-purple-400">from</span> <span className="text-teal-400">&apos;zod&apos;</span>;
                </div>

                {/* LINE RANGE A: Schema Validation */}
                <div
                  onMouseEnter={() => setActiveContract('schema')}
                  onMouseLeave={() => setActiveContract(null)}
                  className={`p-3 rounded-xl transition-all cursor-pointer border ${
                    activeContract === 'schema'
                      ? 'bg-teal-500/10 border-teal-400/50 shadow-[0_0_15px_rgba(45,212,191,0.15)] ring-1 ring-teal-400/30'
                      : 'option-card-theme border-theme hover:border-teal-500/30'
                  }`}
                >
                  <div className="text-[11px] font-condensed tracking-wider uppercase text-teal-400 font-semibold mb-1.5 flex items-center gap-1.5">
                    <span>CONTRACT A: SCHEMA INVARIANT</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-400/10 border border-teal-400/20">HOVER TO TEST</span>
                  </div>
                  <code className="font-code block">
                    <span className="text-blue-400">export const</span> <span className="text-amber-400">TenantSchema</span> = z.<span className="text-yellow-400">object</span>(&#123;
                    <br />
                    &nbsp;&nbsp;<span className="text-primary">tenantId</span>: z.<span className="text-yellow-400">string</span>().<span className="text-yellow-400">uuid</span>(),
                    <br />
                    &nbsp;&nbsp;<span className="text-primary">invoiceId</span>: z.<span className="text-yellow-400">string</span>().<span className="text-yellow-400">cuid2</span>(),
                    <br />
                    &nbsp;&nbsp;<span className="text-primary">amountCents</span>: z.<span className="text-yellow-400">number</span>().<span className="text-yellow-400">int</span>().<span className="text-yellow-400">positive</span>()
                    <br />
                    &#125;);
                  </code>
                </div>

                {/* LINE RANGE B: PostgreSQL Row-Level Security Session Setting */}
                <div
                  onMouseEnter={() => setActiveContract('rls')}
                  onMouseLeave={() => setActiveContract(null)}
                  className={`p-3 rounded-xl transition-all cursor-pointer border ${
                    activeContract === 'rls'
                      ? 'bg-emerald-500/10 border-emerald-400/50 shadow-[0_0_15px_rgba(16,185,129,0.15)] ring-1 ring-emerald-400/30'
                      : 'option-card-theme border-theme hover:border-emerald-500/30'
                  }`}
                >
                  <div className="text-[11px] font-condensed tracking-wider uppercase text-emerald-400 font-semibold mb-1.5 flex items-center gap-1.5">
                    <span>CONTRACT B: ENGINE-LEVEL RLS ENFORCEMENT</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-400/10 border border-emerald-400/20">ISOLATION</span>
                  </div>
                  <code className="font-code block">
                    <span className="text-purple-400">await</span> tx.<span className="text-yellow-400">execute</span>(
                    <br />
                    &nbsp;&nbsp;sql`SET LOCAL app.current_tenant_id = $&#123;session.orgId&#125;`
                    <br />
                    );
                    <br />
                    <span className="text-muted italic">// Zero cross-tenant rows leak even if query filter is omitted</span>
                    <br />
                    <span className="text-blue-400">const</span> invoice = <span className="text-purple-400">await</span> tx.query.invoices.<span className="text-yellow-400">findFirst</span>(...);
                  </code>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-primary">
                <div className="text-muted italic font-code">
                  // Autonomous AI Agent Loop with Bounded Circuit Breaker
                </div>

                <div
                  onMouseEnter={() => setActiveContract('breaker')}
                  onMouseLeave={() => setActiveContract(null)}
                  className={`p-3 rounded-xl transition-all cursor-pointer border ${
                    activeContract === 'breaker'
                      ? 'bg-orange-500/10 border-orange-400/50 shadow-[0_0_15px_rgba(249,115,22,0.15)] ring-1 ring-orange-400/30'
                      : 'option-card-theme border-theme hover:border-orange-500/30'
                  }`}
                >
                  <div className="text-[11px] font-condensed tracking-wider uppercase text-orange-400 font-semibold mb-1.5 flex items-center gap-1.5">
                    <span>CIRCUIT BREAKER: MAX TOKEN SPEND BUDGET</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-400/10 border border-orange-400/20">BOUNDED</span>
                  </div>
                  <code className="font-code block">
                    <span className="text-purple-400">class</span> <span className="text-amber-400">BudgetCircuitBreaker</span>:
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-400">def</span> <span className="text-yellow-400">__init__</span>(self, max_usd: float = 5.0):
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;self.max_usd = max_usd
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;self.accumulated = 0.0
                    <br />
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-400">def</span> <span className="text-yellow-400">verify_invocation</span>(self, projected_cost: float):
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> self.accumulated + projected_cost &gt; self.max_usd:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">raise</span> CircuitBreakerTripped(<span className="text-teal-400">&quot;Runaway loop aborted&quot;</span>)
                  </code>
                </div>
              </div>
            )}
          </div>
          </div>
        </StaggerItem>

        {/* RIGHT PANEL: The Runtime UI Outcome */}
        <StaggerItem direction="up" distance={10} scale={true} className="flex flex-col">
          <div className="h-full surface-card rounded-2xl overflow-hidden flex flex-col justify-between border border-theme p-6 relative">
          
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-theme">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                  <h3 className="heading-display text-base font-semibold text-heading">
                    Runtime Tenant Console
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-muted uppercase">
                  {selectedTenant}
                </span>
              </div>

              {/* IDOR Simulation Toast Notification */}
              <AnimatePresence>
                {tenantSwitchAttempted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute inset-x-0 top-0 z-30 p-4 rounded-xl bg-orange-950/90 border border-orange-500/50 backdrop-blur-md shadow-2xl flex items-start gap-3"
                  >
                    <ShieldAlert className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-sans font-semibold text-orange-200">
                        Access Denied — IDOR Attempt Blocked
                      </div>
                      <p className="text-[11px] font-sans text-orange-300/90 mt-0.5 leading-relaxed">
                        Cryptographically isolated at database layer. Current JWT bearer lacks tenant signature for unauthorized workspace.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Tenant Selector Switcher */}
              <div className="p-4 rounded-xl option-card-theme border border-theme flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] font-sans text-secondary">Authenticated Session:</div>
                  <div className="text-xs font-mono text-heading font-medium">Acme Corp (ID: tenant_alpha_492)</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-sans text-muted">Inject Cross-Tenant ID:</span>
                  <button
                    type="button"
                    onClick={() => handleTenantSwitch('tenant_intruder_99')}
                    className="px-2.5 py-1 rounded option-card-theme hover:bg-orange-500/20 text-orange-400 border border-theme hover:border-orange-500/40 text-[11px] font-mono cursor-pointer transition-colors"
                  >
                    Switch to Tenant B ↗
                  </button>
                </div>
              </div>

              {/* Invoice Drawer View */}
              <div className="rounded-xl border border-theme overflow-hidden">
                <div className="px-4 py-2 option-card-theme border-b border-theme flex items-center justify-between text-xs font-sans text-secondary">
                  <span>Invoices for Acme Corp (tenant_alpha_492)</span>
                  <span className="text-[10px] text-teal-400 font-mono font-semibold">ENCRYPTED AT REST</span>
                </div>
                <div className="divide-y divide-theme font-sans text-xs">
                  <div className="px-4 py-3 flex items-center justify-between">
                    <div>
                      <div className="text-heading font-medium">INV-2026-081 · Production Studio Milestones</div>
                      <div className="text-muted text-[11px]">Due April 15, 2026</div>
                    </div>
                    <div className="text-right">
                      <div className="text-heading font-mono font-medium">$4,500.00</div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium">PAID</span>
                    </div>
                  </div>
                  <div className="px-4 py-3 flex items-center justify-between">
                    <div>
                      <div className="text-heading font-medium">INV-2026-094 · Mutation Test &amp; AST Hardening</div>
                      <div className="text-muted text-[11px]">Due May 01, 2026</div>
                    </div>
                    <div className="text-right">
                      <div className="text-heading font-mono font-medium">$8,200.00</div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-500/10 text-teal-400 font-medium">VERIFIED</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Agent Token & Cost Meter */}
              <div className={`p-4 rounded-xl border transition-all ${
                activeContract === 'breaker' || tokenSpend >= 5.00
                  ? 'bg-orange-500/10 border-orange-500/40 ring-1 ring-orange-500/30'
                  : 'option-card-theme border-theme'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-sans font-medium text-heading flex items-center gap-2">
                    <span>AI Agent Autonomous Budget Guard</span>
                    {tokenSpend >= 5.00 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-mono">
                        BREAKER TRIPPED
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono font-bold text-primary">
                    ${tokenSpend.toFixed(2)} / $5.00 Max
                  </div>
                </div>

                {/* Progress Bar with Limit Line */}
                <div className="relative w-full h-2 rounded-full bg-[var(--border-subtle)] overflow-hidden mb-2">
                  <div
                    className={`h-full transition-all duration-300 ${
                      tokenSpend >= 5.00 ? 'bg-orange-400' : 'bg-teal-400'
                    }`}
                    style={{ width: `${(tokenSpend / 5.00) * 100}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-sans text-secondary">
                  <span>
                    {tokenSpend >= 5.00
                      ? 'Execution ceiling hit: Runaway recursive loop prevented.'
                      : 'Guard active: 100% downstream queries bounded.'}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      if (tokenSpend >= 5.00) {
                        setTokenSpend(4.82);
                      } else {
                        handleSimulateSpend();
                      }
                    }}
                    className="text-teal-400 hover:text-teal-300 cursor-pointer font-medium underline transition-colors"
                  >
                    {tokenSpend >= 5.00 ? 'Reset Spend' : 'Simulate API Call'}
                  </button>
                </div>
              </div>

            </div>

            {/* Bottom Status Invariant */}
            <div className="mt-5 pt-4 border-t border-theme flex items-center justify-between text-xs font-sans text-secondary">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Zero IDOR Vulnerabilities</span>
              </span>
              <span className="font-mono text-[11px] text-muted">
                SOC2 / ACID INVARIANT VALIDATED
              </span>
            </div>

          </div>
        </StaggerItem>

      </StaggerContainer>
    </section>
  );
};

export default CodeUIMirror;
