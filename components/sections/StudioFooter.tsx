'use client';

import React from 'react';
import { navigateTo } from '@/src/navigation';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';
import { ArrowRight, ArrowUpRight, ArrowUp, ShieldCheck, Mail } from 'lucide-react';

interface StudioFooterProps {
  onOpenBooking: () => void;
  onOpenMenu?: () => void;
}

export const StudioFooter: React.FC<StudioFooterProps> = ({
  onOpenBooking,
}) => {
  return (
    <footer className="border-t border-theme pt-9 sm:pt-11 pb-8 sm:pb-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto font-sans transition-colors">
      {/* Main 3-Block Grid: Left Brand Block | Center Index Links | Right Direct Intake */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-theme">
        
        {/* 1. Left Brand Block (4 Cols) */}
        <div className="lg:col-span-4 space-y-5">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <button
              type="button"
              onClick={() => {
                navigateTo('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="heading-display text-xl text-heading font-bold tracking-widest uppercase hover:text-teal-400 transition-colors text-left cursor-pointer"
            >
              PROJECT AIR
            </button>
          </div>

          <p className="font-sans text-xs text-secondary leading-relaxed max-w-sm">
            The AI-build option that actually tests, audits, and ships properly.
            Institutional engineering operating studio for deterministic distributed systems,
            AST mutation testing, and zero-downtime releases.
          </p>

          <div className="space-y-2 pt-2 text-xs font-mono text-muted">
            <div className="flex items-center gap-2">
              <span className="text-teal-400 font-semibold">PRESENCE:</span>
              <span>Bengaluru · San Francisco · Global</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Mutual NDA Executed Prior to Repo Clone</span>
            </div>
          </div>
        </div>

        {/* 2. Center Index Links (4 Cols: Split into 2 sub-columns) */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-6 sm:gap-8">
          {/* Subcol A: Core Disciplines */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-semibold text-heading uppercase tracking-wider">
              Disciplines
            </div>
            <ul className="space-y-2.5 text-xs text-secondary">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('/capabilities')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Capabilities &amp; Stack
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('/pricing')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Audit &amp; Sprint Pricing
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('/capabilities')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Full-Cycle Engineering
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('/capabilities')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Codebase Rescue
                </button>
              </li>
            </ul>
          </div>

          {/* Subcol B: Verification & Proof */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-semibold text-heading uppercase tracking-wider">
              Verification
            </div>
            <ul className="space-y-2.5 text-xs text-secondary">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('/rigor')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  3-Gate Rigor Standard
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('/teardowns')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Codebase Teardowns
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('/intake')}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Specification Intake
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    navigateTo('/');
                    setTimeout(() => {
                      const el = document.getElementById('studio-content');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-teal-400 transition-colors cursor-pointer text-left"
                >
                  Empirical Telemetry
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Right Direct Intake & Contact Block (4 Cols) */}
        <div className="lg:col-span-4 p-6 rounded-2xl surface-card border border-theme space-y-4">
          <div className="space-y-1">
            <div className="font-mono text-xs font-bold text-teal-400 uppercase tracking-wider">
              Direct Architecture Intake
            </div>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              30-minute scoping session with a Principal Systems Architect. Zero sales reps or junior account managers.
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full py-2.5 px-4 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => navigateTo('/intake')}
              className="w-full py-2 px-4 rounded-xl option-card-theme border border-theme text-primary hover:text-heading hover:border-theme-medium font-sans text-xs transition-colors flex items-center justify-between cursor-pointer"
            >
              <span>Submit Technical Spec (48h SLA)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-teal-400" />
            </button>
          </div>

          <div className="pt-2 border-t border-theme flex items-center justify-between text-[11px] font-mono text-muted">
            <a
              href="mailto:architecture@projectair.in"
              className="hover:text-teal-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3 h-3 text-secondary" />
              <span>architecture@projectair.in</span>
            </a>
            <span className="text-emerald-400 font-semibold">48-Hr SLA</span>
          </div>
        </div>

      </div>

      {/* Bottom Sub-Bar: Copyright · Theme Switcher · Legal & Top Scroll */}
      <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-muted">
        <div>
          © {new Date().getFullYear()} Project AIR. All rights reserved.
        </div>

        {/* Studio Theme Switcher Dropdown */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-muted uppercase tracking-widest hidden sm:inline">Theme:</span>
          <ThemeSwitcher placement="top" />
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <span>Mutual NDA Protected</span>
          <span className="text-muted/40">|</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-teal-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default StudioFooter;
