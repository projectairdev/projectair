'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface CinematicEntryHeroProps {
  onEnterStudio: () => void;
  isCompleted?: boolean;
}

export const CinematicEntryHero: React.FC<CinematicEntryHeroProps> = ({
  onEnterStudio,
  isCompleted = false,
}) => {
  const prefersReduced = useReducedMotion();
  // Step 0: Problem statement (0.0s - 1.5s)
  // Step 1: Counterweight statement (1.5s - 2.9s)
  // Step 2: PROJECT AIR wordmark resolution (2.9s - 5.2s)
  const [step, setStep] = useState<0 | 1 | 2>(prefersReduced || isCompleted ? 2 : 0);
  const [hasTriggeredExit, setHasTriggeredExit] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const triggerExit = useCallback(() => {
    if (hasTriggeredExit) return;
    setHasTriggeredExit(true);
    onEnterStudio();
  }, [hasTriggeredExit, onEnterStudio]);

  // Immediate skip on scroll, touch swipe, or Escape/Enter/Space/ArrowDown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'Escape' ||
        e.key === 'ArrowDown' ||
        e.key === ' ' ||
        e.key === 'Enter'
      ) {
        e.preventDefault();
        triggerExit();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 15) {
        triggerExit();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touchEndY = e.touches[0].clientY;
      if (touchStartY - touchEndY > 25) {
        triggerExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [triggerExit]);

  // Tight, confident 5.2-second sequence
  useEffect(() => {
    if (prefersReduced || isCompleted) {
      setStep(2);
      return;
    }

    const t1 = setTimeout(() => setStep(1), 1500);
    const t2 = setTimeout(() => setStep(2), 2900);
    const tExit = setTimeout(() => triggerExit(), 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(tExit);
    };
  }, [prefersReduced, isCompleted, triggerExit]);

  return (
    <section
      ref={containerRef}
      onClick={triggerExit}
      role="banner"
      aria-label="Studio Entry"
      className="relative w-full h-screen bg-[var(--bg-base)] text-[var(--text-heading)] flex flex-col justify-between p-8 sm:p-14 overflow-hidden select-none cursor-default z-30 transition-colors duration-300"
    >
      {/* Subtle Theme-Aware Background Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"
      />

      {/* Top Spacer */}
      <div className="w-full h-6" />

      {/* Center Stage: Pure Typography & Clean Brand Resolution */}
      <div className="relative z-10 my-auto w-full max-w-5xl mx-auto flex flex-col items-center justify-center min-h-[320px] px-4">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-center max-w-4xl"
            >
              <h2 className="heading-display text-3xl sm:text-5xl md:text-6xl text-heading font-bold tracking-tight leading-[1.1]">
                41% of new code is AI-generated.
                <span className="block text-secondary font-medium mt-2">
                  39% of it churns in production.
                </span>
              </h2>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-center flex flex-col items-center"
            >
              <h2 className="heading-display text-4xl sm:text-6xl md:text-7xl text-heading font-bold tracking-tight uppercase leading-none">
                We are the counterweight.
              </h2>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '96px', opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="h-[2px] bg-teal-400 mt-7"
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, scale: 0.97, filter: 'blur(6px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-center flex flex-col items-center justify-center"
            >
              <div className="font-condensed text-xs tracking-[0.22em] text-teal-400 uppercase font-semibold mb-4">
                INSTITUTIONAL AI ENGINEERING
              </div>

              <h1 className="heading-display text-6xl sm:text-8xl md:text-9xl text-heading font-extrabold tracking-tighter uppercase leading-none select-none">
                PROJECT AIR
              </h1>

              <div className="font-condensed text-xs sm:text-sm tracking-[0.28em] text-secondary uppercase font-semibold mt-5 flex items-center justify-center gap-3">
                <span>TESTED</span>
                <span className="text-teal-400">·</span>
                <span>AUDITED</span>
                <span className="text-teal-400">·</span>
                <span>SHIPPED</span>
              </div>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerExit();
                  }}
                  className="px-6 py-3 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans text-xs font-semibold tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(45,212,191,0.25)] hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
                >
                  <span>Enter Studio</span>
                  <span className="font-mono text-sm">↓</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom-Right: Minimal Scroll Indicator */}
      <div className="relative z-10 flex items-center justify-end w-full">
        <div
          onClick={(e) => {
            e.stopPropagation();
            triggerExit();
          }}
          className="flex items-center gap-3 cursor-pointer group text-secondary hover:text-teal-400 transition-colors"
        >
          <span className="font-condensed tracking-[0.18em] text-[11px] uppercase group-hover:text-teal-400 transition-colors">
            Scroll to Enter
          </span>
          <div className="w-5 h-8 rounded-full border border-theme-medium group-hover:border-teal-400/50 flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1 h-1.5 rounded-full bg-teal-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicEntryHero;

