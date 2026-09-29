import React, { useState } from 'react';

export const SpecificationIntake: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    repoUrl: '',
    workload: 'SaaS / High-Concurrency Web',
    stack: 'TypeScript / Node / PostgreSQL',
    notes: '',
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
    <section id="specification-intake" className="py-20 border-b border-white/5 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="font-sans text-xs font-medium tracking-wider text-teal-400 uppercase">
            05 · Specification Intake
          </span>
          <h2 className="heading-display text-2xl sm:text-4xl text-white tracking-tight mt-1.5">
            Direct technical scoping intake.
          </h2>
        </div>
        <p className="font-sans text-slate-400 text-sm max-w-md leading-relaxed">
          Skip generic sales decks. Submit your technical parameters for a direct
          written architectural proposal and vulnerability assessment within 48 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Scoping Form (7 Cols) */}
        <div className="lg:col-span-7 surface-card p-6 sm:p-8 rounded-2xl">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-teal-500/10 text-teal-400 text-xl border border-teal-500/20 mb-2">
                ✓
              </div>
              <h3 className="heading-display text-2xl text-white">
                Dossier Received &amp; Queued
              </h3>
              <p className="text-sm font-sans text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-medium">{formData.name}</span>.
                Your specification for <span className="text-teal-300 font-medium">{formData.company}</span>{' '}
                has been dispatched to our Principal Systems Architect. A technical breakdown and
                NDAs will be delivered to <span className="text-white font-medium">{formData.email}</span>.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-white/[0.04] hover:bg-white/[0.08] text-white font-sans text-xs rounded-lg transition-colors cursor-pointer border border-white/10"
                >
                  Submit another specification
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Maya Chen"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0E131F] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans text-slate-300 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="maya@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0E131F] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans text-slate-300 mb-1.5">
                    Organization / Project Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Company or Protocol"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#0E131F] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans text-slate-300 mb-1.5">
                    Repository URL (Optional / Private)
                  </label>
                  <input
                    type="text"
                    placeholder="github.com/org/repo"
                    value={formData.repoUrl}
                    onChange={(e) => setFormData({ ...formData, repoUrl: e.target.value })}
                    className="w-full bg-[#0E131F] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans text-slate-300 mb-1.5">
                    Primary Workload Focus
                  </label>
                  <select
                    value={formData.workload}
                    onChange={(e) => setFormData({ ...formData, workload: e.target.value })}
                    className="w-full bg-[#0E131F] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400 transition-colors"
                  >
                    <option value="SaaS / High-Concurrency Web">SaaS / High-Concurrency Web</option>
                    <option value="Autonomous AI Agent & RAG Pipeline">Autonomous AI Agent &amp; RAG Pipeline</option>
                    <option value="Codebase Rescue & Security Audit">Codebase Rescue &amp; Security Audit</option>
                    <option value="Backend Modernization & Cloud Infra">Backend Modernization &amp; Cloud Infra</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-sans text-slate-300 mb-1.5">
                    Core Technology Stack
                  </label>
                  <select
                    value={formData.stack}
                    onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                    className="w-full bg-[#0E131F] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-teal-400 transition-colors"
                  >
                    <option value="TypeScript / Node / PostgreSQL">TypeScript / Node / PostgreSQL</option>
                    <option value="Next.js / Python / Cloud SQL">Next.js / Python / Cloud SQL</option>
                    <option value="Go / Rust / Distributed DB">Go / Rust / Distributed DB</option>
                    <option value="Greenfield / TBD Architecture">Greenfield / TBD Architecture</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans text-slate-300 mb-1.5">
                  Architecture Specifications &amp; Objectives
                </label>
                <textarea
                  rows={4}
                  placeholder="Detail performance bottlenecks, prototype stability issues, test gaps, or target infrastructure requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#0E131F] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-center space-x-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Transmitting specification...</span>
                  ) : (
                    <span>Submit Specification For Architectural Evaluation →</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Institutional SLA & Trust Factors (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="surface-card p-6 sm:p-8 rounded-2xl space-y-5">
            <div className="text-xs font-sans font-semibold text-teal-400 uppercase tracking-wider">
              Intellectual Property &amp; Security Assurance
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-teal-400 font-sans text-xs font-bold mt-0.5">01.</span>
                <div>
                  <div className="font-sans font-semibold text-sm text-white">
                    Mutual Non-Disclosure Agreement
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 font-sans leading-relaxed">
                    All submitted repositories and architecture diagrams are legally protected under standard institutional NDA before review.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-teal-400 font-sans text-xs font-bold mt-0.5">02.</span>
                <div>
                  <div className="font-sans font-semibold text-sm text-white">
                    Direct CTO Scoping
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 font-sans leading-relaxed">
                    Evaluated personally by our systems architects. We provide concrete line-by-line feedback rather than sales slides.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-teal-400 font-sans text-xs font-bold mt-0.5">03.</span>
                <div>
                  <div className="font-sans font-semibold text-sm text-white">
                    48-Hour Proposal SLA
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 font-sans leading-relaxed">
                    You receive an actionable written proposal with timeline, squad requirements, and deterministic testing milestones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="surface-card p-5 rounded-2xl font-sans text-xs space-y-1.5 text-slate-400">
            <div>Locations: Bengaluru · San Francisco</div>
            <div>Accepting Q2/Q3 production engagements</div>
            <div className="text-slate-300">Contact: architecture@projectair.in</div>
          </div>
        </div>
      </div>
    </section>
  );
};
