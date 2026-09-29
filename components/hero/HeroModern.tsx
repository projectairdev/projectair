'use client';

import React, { useState } from 'react';
import { SystemConsole } from './SystemConsole';

interface HeroModernProps {
  onOpenBooking?: () => void;
  targetContentId?: string;
}

export const HeroModern: React.FC<HeroModernProps> = ({
  onOpenBooking,
  targetContentId = 'studio-dossier',
}) => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-[#0A0D12] overflow-hidden flex flex-col justify-between selection:bg-teal-500/20 selection:text-teal-300"
    >
      {/* 
        A. Background Layer (Unified & Continuous)
      */}
      {/* 1. Subtle Ambient Dot Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* 2. Soft Ambient Deep Cyan/Teal Radial Bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(0, 124, 135, 0.15) 0%, rgba(10, 13, 18, 0) 70%)',
        }}
      />

      {/* 3. Mouse-Follow Interactive Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(63, 214, 214, 0.06), transparent 80%)`,
        }}
      />

      {/* 
        B. Hero Typography & Editorial Layout (Centered & Balanced)
      */}
      <div className="relative z-10 max-w-6xl mx-auto pt-24 sm:pt-32 pb-16 px-6 text-center flex flex-col items-center w-full">
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-teal-400 uppercase bg-teal-950/40 border border-teal-500/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span>PRODUCTION-GRADE SOFTWARE · VERIFIABLE INTELLIGENCE</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] max-w-4xl text-balance">
          The AI-build option that actually tests, audits, and ships properly.
        </h1>

        {/* Supporting Paragraph */}
        <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl mt-5 leading-relaxed">
          We bridge the gap between fast AI code generation and institutional reliability. Full end-to-end delivery—architecture, automated testing, security audits, and zero-downtime deployment—included as standard practice.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <button
            type="button"
            onClick={onOpenBooking || (() => handleScrollTo('specification-intake'))}
            className="bg-teal-400 hover:bg-teal-300 text-slate-950 font-mono text-xs font-bold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-teal-500/20 cursor-pointer"
          >
            SCHEDULE ARCHITECTURE CALL →
          </button>
          <button
            type="button"
            onClick={() => handleScrollTo('pricing')}
            className="bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 font-mono text-xs font-medium px-6 py-3 rounded-full transition-all cursor-pointer"
          >
            EXPLORE AUDIT TIERS ($249 - $1,499)
          </button>
        </div>

        {/* 
          C. Interactive "Live Verification Console" Component
        */}
        <SystemConsole />
      </div>

      {/* 
        D. Seamless Transition Line into #studio-dossier
      */}
      <div className="relative z-10 w-full flex flex-col items-center pb-6">
        <button
          onClick={() => handleScrollTo(targetContentId)}
          className="font-mono text-[11px] tracking-widest text-slate-500 hover:text-teal-400 transition-colors flex items-center gap-2 cursor-pointer pb-4"
        >
          <span>EXPLORE COMPLETE DOSSIER</span>
          <span className="text-teal-400">↓</span>
        </button>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
};
