'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { navigateTo } from '@/src/navigation';
import { FadeInView } from '@/components/ui/FadeInView';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';

export const StudioDirectoryBento: React.FC = () => {
  const sections = [
    {
      num: '01',
      title: 'Capabilities & What We Build',
      category: 'Full-Cycle Engineering',
      desc: 'Custom SaaS platforms, autonomous AI agent pipelines, codebase rescue, and cloud infrastructure engineered to institutional standards.',
      route: '/capabilities',
    },
    {
      num: '02',
      title: 'The 3-Gate Rigor Standard',
      category: 'Mathematical Verification',
      desc: 'Static Soundness, Deterministic State Recovery, and PostgreSQL Row-Level Security isolation before traffic reaches production.',
      route: '/rigor',
    },
    {
      num: '03',
      title: 'Audit Pricing & Engagement Models',
      category: 'Fixed-Price Tiers',
      desc: 'Transparent pricing with zero surprises: 48-Hour Diagnostic Quick Scan ($249), Full Audit + Code Fix ($899–$1,499), and custom sprints.',
      route: '/pricing',
    },
    {
      num: '04',
      title: 'Codebase Teardowns & Case Studies',
      category: 'Forensic Autopsies',
      desc: 'Detailed autopsies of fragile codebases: what was broken, what we found in the audit, what we re-engineered, and verifiable outcomes.',
      route: '/teardowns',
    },
    {
      num: '05',
      title: 'Direct Specification Intake & Mutual NDA',
      category: 'Direct Scoping',
      desc: 'Submit your technical parameters for a direct written architectural diagnostic and fixed-price proposal within 48 hours.',
      route: '/intake',
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-11 border-b border-theme">
      {/* Editorial Header */}
      <FadeInView direction="up" distance={8} blur={true}>
        <div className="mb-5 sm:mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-teal-400 uppercase font-semibold">
              STUDIO DIRECTORY · ARCHITECTURAL INDEX
            </span>
            <h2 className="heading-display text-3xl sm:text-4xl text-heading font-bold tracking-tight mt-1.5">
              The Studio Index
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-secondary max-w-md leading-relaxed">
            Deep technical dossiers on our capabilities, verification standards, transparent pricing tiers, and forensic case studies.
          </p>
        </div>
      </FadeInView>

      {/* Editorial Row-Based Directory with Staggered Motion */}
      <StaggerContainer staggerDelay={0.06} className="divide-y divide-theme border-y border-theme">
        {sections.map((sec) => (
          <StaggerItem key={sec.num} direction="up" distance={8}>
            <div
              onClick={() => navigateTo(sec.route)}
              className="group py-4 sm:py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 cursor-pointer hover:bg-[var(--bg-surface-elevated)] -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-2xl transition-all"
            >
              {/* Number + Title + Category */}
              <div className="flex items-start sm:items-baseline gap-6 lg:w-1/2">
                <span className="font-mono text-sm sm:text-base font-bold text-teal-400/80 group-hover:text-teal-300 transition-colors shrink-0">
                  {sec.num}
                </span>
                <div>
                  <h3 className="heading-display text-xl sm:text-2xl text-heading font-semibold group-hover:text-teal-400 transition-colors">
                    {sec.title}
                  </h3>
                  <span className="inline-block mt-1 font-mono text-[11px] text-muted uppercase tracking-wider">
                    {sec.category}
                  </span>
                </div>
              </div>

              {/* Description + Arrow Action */}
              <div className="flex items-center justify-between lg:justify-end gap-8 lg:w-1/2">
                <p className="font-sans text-xs sm:text-sm text-secondary group-hover:text-primary transition-colors leading-relaxed max-w-md hidden sm:block">
                  {sec.desc}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-secondary group-hover:text-teal-400 transition-all shrink-0">
                  <span className="hidden md:inline uppercase tracking-wider text-[11px]">Read Dossier</span>
                  <div className="w-8 h-8 rounded-full border border-theme group-hover:border-teal-400/40 flex items-center justify-center group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-4 h-4 text-teal-400" />
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default StudioDirectoryBento;
