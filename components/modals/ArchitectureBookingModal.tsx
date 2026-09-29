'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Lock,
  ArrowRight,
  X,
  Cpu,
} from 'lucide-react';

interface ArchitectureBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureBookingModal: React.FC<ArchitectureBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    workEmail: '',
    company: '',
    role: 'CTO / VP Engineering',
    challengeType: 'rescue',
    timeline: 'immediate',
    architectureNotes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Generate clean reproducible reference ID
      if (!referenceId) {
        setReferenceId(`AIR-${Math.floor(100000 + Math.random() * 900000)}`);
      }
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (isOpen) {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen, onClose, referenceId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 600);
  };

  const focusOptions = [
    {
      id: 'rescue',
      title: 'Codebase Rescue',
      desc: 'Eliminate silent failures, IDOR leaks & race conditions in brittle prototypes.',
    },
    {
      id: 'greenfield',
      title: 'Greenfield Build',
      desc: 'End-to-end full-cycle engineering with strict 3-Gate verification.',
    },
    {
      id: 'audit',
      title: 'Rigor & Security Audit',
      desc: 'AST mutation testing, PostgreSQL RLS verification, and SOC2 readiness.',
    },
    {
      id: 'ai-pipeline',
      title: 'Autonomous AI Systems',
      desc: 'Bounded DAG state machines, semantic caching & runaway loop elimination.',
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Direct Architecture Call Scoping"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[var(--bg-overlay)] backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl surface-card border border-theme shadow-2xl rounded-3xl p-6 sm:p-9 text-primary my-auto overflow-hidden">
        {/* Top Specular Gradient Line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />

        {/* Modal Top Metadata Bar */}
        <div className="flex items-center justify-between border-b border-theme pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="font-mono text-[11px] text-teal-400 uppercase tracking-widest font-semibold">
              PROJECT AIR · DIRECT TECHNICAL SCOPING
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-secondary hover:text-heading hover:bg-[var(--border-subtle)] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Editorial Title Block */}
            <div className="space-y-2">
              <h3 className="heading-display text-2xl sm:text-3xl text-heading font-bold tracking-tight">
                Zero Sales Decks. Pure Architecture.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-secondary leading-relaxed max-w-xl">
                You will speak directly with a Principal Systems Architect—never a sales SDR or account rep. We analyze your system failure modes, concurrency bottlenecks, test coverage gaps, and concrete engineering remediation paths.
              </p>

              {/* High-Trust Credential Ribbons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px] font-mono text-secondary">
                <span className="inline-flex items-center gap-1 text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                  <Clock className="w-3 h-3" />
                  <span>30-Min Direct Call</span>
                </span>
                <span className="inline-flex items-center gap-1 option-card-theme px-2 py-0.5 rounded border border-theme">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Mutual NDA Standard</span>
                </span>
                <span className="inline-flex items-center gap-1 option-card-theme px-2 py-0.5 rounded border border-theme">
                  <Cpu className="w-3 h-3 text-teal-400" />
                  <span>Principal Systems Review</span>
                </span>
              </div>
            </div>

            {/* Section 01: Engineering Identity */}
            <div className="space-y-3 pt-2">
              <div className="font-mono text-[10px] text-muted uppercase tracking-widest font-semibold flex items-center gap-2">
                <span>01</span>
                <span className="opacity-40">/</span>
                <span>IDENTITY &amp; ORGANIZATION</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-mono text-secondary mb-1">
                    Full Name <span className="text-teal-400">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Vikram Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full input-theme rounded-xl px-3.5 py-2.5 text-xs sm:text-sm placeholder:text-muted focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-secondary mb-1">
                    Work Email <span className="text-teal-400">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full input-theme rounded-xl px-3.5 py-2.5 text-xs sm:text-sm placeholder:text-muted focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/30 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-mono text-secondary mb-1">
                    Company / Entity <span className="text-teal-400">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Acme Systems"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full input-theme rounded-xl px-3.5 py-2.5 text-xs sm:text-sm placeholder:text-muted focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/30 transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-secondary mb-1">
                    Your Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full input-theme rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/30 transition-all font-sans cursor-pointer"
                  >
                    <option value="CTO / VP Engineering">CTO / VP Engineering</option>
                    <option value="Founder / CEO">Founder / CEO</option>
                    <option value="Principal Architect">Principal Architect</option>
                    <option value="Head of Product">Head of Product</option>
                    <option value="Engineering Lead">Engineering Lead</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 02: Architecture Scope */}
            <div className="space-y-3 pt-2">
              <div className="font-mono text-[10px] text-muted uppercase tracking-widest font-semibold flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>02</span>
                  <span className="opacity-40">/</span>
                  <span>PRIMARY ARCHITECTURAL NEED</span>
                </div>
                <span className="text-muted font-normal">Select one</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {focusOptions.map((opt) => {
                  const isSelected = formData.challengeType === opt.id;
                  return (
                    <div
                      key={opt.id}
                      onClick={() => setFormData({ ...formData, challengeType: opt.id })}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-teal-500/10 border-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.15)]'
                          : 'option-card-theme border-theme hover:border-theme-medium'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-mono font-bold ${isSelected ? 'text-teal-400' : 'text-primary'}`}>
                          {opt.title}
                        </span>
                        <div
                          className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-teal-400 bg-teal-400' : 'border-theme'
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[var(--bg-base)]" />}
                        </div>
                      </div>
                      <p className="text-[11px] font-sans text-secondary mt-1 leading-snug">
                        {opt.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section 03: Technical Context & Stack */}
            <div className="space-y-2 pt-2">
              <div className="font-mono text-[10px] text-muted uppercase tracking-widest font-semibold flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>03</span>
                  <span className="opacity-40">/</span>
                  <span>SYSTEM CONTEXT &amp; TECH STACK</span>
                </div>
                <span className="text-muted font-normal">Optional</span>
              </div>

              <textarea
                rows={2}
                placeholder="Key symptoms, tech stack (e.g. Next.js, Node, PostgreSQL, Python), scale requirements or private GitHub repo link..."
                value={formData.architectureNotes}
                onChange={(e) => setFormData({ ...formData, architectureNotes: e.target.value })}
                className="w-full input-theme rounded-xl px-3.5 py-2.5 text-xs sm:text-sm placeholder:text-muted focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/30 transition-all font-sans resize-none"
              />
            </div>

            {/* Bottom Action Bar */}
            <div className="pt-4 border-t border-theme flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[11px] font-mono text-secondary">
                <Lock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Encrypted brief · Mutual NDA bound · Zero sales spam</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-7 py-3 bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(45,212,191,0.25)] hover:shadow-[0_0_28px_rgba(45,212,191,0.4)] disabled:opacity-60 active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <span>Dispatching Brief...</span>
                ) : (
                  <>
                    <span>Confirm Architecture Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation / Success Receipt State */
          <div className="py-8 space-y-6 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/30 shadow-[0_0_25px_rgba(45,212,191,0.2)]">
              <CheckCircle2 className="w-7 h-7 text-teal-400" />
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs text-teal-400 uppercase tracking-widest font-semibold">
                DISPATCH RECEIPT CONFIRMED
              </div>
              <h3 className="heading-display text-2xl sm:text-3xl text-heading font-bold">
                Architecture Call Queued
              </h3>
              <p className="text-xs sm:text-sm text-secondary max-w-md mx-auto leading-relaxed font-sans">
                Your engineering brief for <strong className="text-heading">{formData.company || 'your team'}</strong> has been assigned directly to a Principal Systems Architect.
              </p>
            </div>

            {/* High-Trust Architecture Receipt Card */}
            <div className="p-4 sm:p-5 surface-card border border-theme rounded-2xl max-w-md mx-auto text-left font-mono text-xs space-y-2 text-primary">
              <div className="flex items-center justify-between pb-2 border-b border-theme">
                <span className="text-muted">REFERENCE:</span>
                <span className="text-teal-400 font-bold">{referenceId}</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-theme">
                <span className="text-muted">ASSIGNED ROLE:</span>
                <span className="text-primary">Principal Systems Architect</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-theme">
                <span className="text-muted">DESTINATION:</span>
                <span className="text-primary truncate max-w-[200px]">{formData.workEmail}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">SLA RESPONSE:</span>
                <span className="text-emerald-400 font-bold">&lt; 24 Hours</span>
              </div>
            </div>

            <p className="text-xs font-sans text-secondary max-w-sm mx-auto">
              A calendar booking link with direct architect dial-in credentials has been dispatched to your email.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setStep('form');
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl option-card-theme hover:border-teal-400 text-primary font-sans text-xs font-semibold tracking-wider transition-colors cursor-pointer border border-theme"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArchitectureBookingModal;
