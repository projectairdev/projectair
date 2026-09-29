'use client';

import React from 'react';
import { Calendar, ArrowRight, Lock } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { navigateTo } from '@/src/navigation';
import { FadeInView } from '@/components/ui/FadeInView';

interface DossierCTAProps {
  onOpenBooking: () => void;
  onExploreRigor?: () => void;
}

export const DossierCTA: React.FC<DossierCTAProps> = ({
  onOpenBooking,
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-11">
      <FadeInView direction="up" distance={10} scale={true}>
        <div className="rounded-3xl p-6 sm:p-9 lg:p-10 surface-card border border-theme relative overflow-hidden">
          {/* Soft Ambient Radial Highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-3">
              <span className="text-xs font-mono tracking-widest text-teal-400 uppercase font-semibold">
                DIRECT ARCHITECTURAL ENGAGEMENT
              </span>
            </div>

            {/* Headline */}
            <h2 className="heading-display text-2xl sm:text-4xl lg:text-5xl text-heading font-bold tracking-tight mb-3.5 leading-[1.12]">
              Talk to the engineer who will actually write your software.
            </h2>

            {/* Sub-copy */}
            <p className="font-sans text-secondary text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-2xl">
              No sales representatives. No non-technical account managers. Direct 30-minute scoping with a Principal Systems Architect under bilateral Mutual NDA.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <MagneticButton
                variant="primary"
                onClick={onOpenBooking}
                className="!px-5 !py-3 text-xs font-semibold"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Architecture Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </MagneticButton>

              <button
                type="button"
                onClick={() => navigateTo('/intake')}
                className="px-5 py-3 rounded-full option-card-theme border border-theme hover:border-theme-medium text-primary hover:text-heading font-sans text-xs font-medium tracking-wider transition-colors cursor-pointer text-center"
              >
                Submit Intake Brief Directly →
              </button>
            </div>

            {/* Footnote Metadata */}
            <div className="mt-8 pt-5 border-t border-theme flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-sans text-secondary">
              <div className="flex items-center space-x-2">
                <Lock className="w-3.5 h-3.5 text-teal-400" />
                <span>Bilateral Mutual NDA executed before repo review</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-teal-400 font-bold">✓</span>
                <span>48-hour fixed-price proposal SLA</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-teal-400 font-bold">✓</span>
                <span>100% Client IP &amp; Code Ownership</span>
              </div>
            </div>
          </div>
        </div>
      </FadeInView>
    </section>
  );
};

export default DossierCTA;
