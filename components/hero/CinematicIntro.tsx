import React, { useEffect, useState, useRef } from 'react';
import { HeroCanvas } from './HeroCanvas';

interface CinematicIntroProps {
  targetContentId?: string;
  onHandOffComplete?: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({
  targetContentId = 'studio-dossier',
}) => {
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const containerRef = useRef<HTMLElement | null>(null);

  // Track cursor position for the dynamic atmospheric flashlight spotlight
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  // 2-Second Inactivity Auto-Scroll Logic
  useEffect(() => {
    let hasAutoScrolled = false;

    const timer = setTimeout(() => {
      if (window.scrollY < 40 && !hasAutoScrolled) {
        hasAutoScrolled = true;
        // 1. Highlight the button visually with teal ring
        const btn = document.getElementById('hero-scroll-cue');
        if (btn) btn.classList.add('ring-2', 'ring-teal-400', 'scale-105');

        // 2. Smoothly scroll down to content
        const target = document.getElementById(targetContentId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }
      }
    }, 2000); // 2 seconds idle

    const cancelTimer = () => {
      clearTimeout(timer);
    };

    window.addEventListener('scroll', cancelTimer, { once: true, passive: true });
    window.addEventListener('wheel', cancelTimer, { once: true, passive: true });
    window.addEventListener('touchstart', cancelTimer, { once: true, passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', cancelTimer);
      window.removeEventListener('wheel', cancelTimer);
      window.removeEventListener('touchstart', cancelTimer);
    };
  }, [targetContentId]);

  // Scroll listener to toggle HUD visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolledPast(true);
      } else {
        setIsScrolledPast(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToDossier = () => {
    const target = document.getElementById(targetContentId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-full overflow-hidden bg-[#0A0D12] flex items-center justify-center select-none"
    >
      {/* 
        Layer A: Deep Background Atmospheric Radial Glow
        Cyan bloom focused at 50% 40%
      */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(0, 124, 135, 0.18) 0%, rgba(10, 13, 18, 0) 70%)',
        }}
      />

      {/* 
        Layer B: Interactive Native Perspective Grid & Beam Engine
      */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas mouseX={mousePos.x} mouseY={mousePos.y} />
      </div>

      {/* 
        Layer C: Dynamic Interactive Mouse Flashlight Spotlight
      */}
      {mousePos.x > 0 && mousePos.y > 0 && (
        <div
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(63, 214, 214, 0.07), transparent 80%)`,
          }}
        />
      )}

      {/* 
        Layer D: Center Authoritative Architectural Lockup
        Pointer-events-none so it never blocks canvas fluid physics
      */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4 z-20">
        <div className="text-center animate-in fade-in zoom-in-95 duration-700 max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Top Status Tag */}
          <div className="bg-teal-950/40 border border-teal-500/30 px-3.5 py-1 rounded-full backdrop-blur-md mb-6 inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
            </span>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-teal-400 font-medium">
              DETERMINISTIC ARCHITECTURE GATE · SYS_V2026.1
            </span>
          </div>

          {/* Commanding Brand Headline */}
          <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase bg-gradient-to-b from-white via-white to-slate-300 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(63,214,214,0.15)] select-none">
            PROJECT AIR
          </h1>

          {/* Editorial Positioning Subdeck */}
          <p className="font-sans text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mt-4 text-balance">
            The AI-build option that actually tests, audits, and ships properly.
          </p>

          {/* Technical Sub-Line */}
          <div className="font-mono text-xs text-slate-500 tracking-[0.16em] uppercase mt-4 flex items-center justify-center gap-2">
            <span>FULL-CYCLE ENGINEERING</span>
            <span className="text-teal-500/40">·</span>
            <span>VERIFIABLE TEST MATRICES</span>
            <span className="text-teal-500/40">·</span>
            <span>ZERO DATA LEAKS</span>
          </div>

          {/* Precision Hairline Anchor */}
          <div className="mt-8 flex items-center justify-center space-x-2 opacity-50">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
            <div className="w-1.5 h-1.5 rotate-45 border border-teal-400" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
          </div>

        </div>
      </div>

      {/* 
        Layer E: Interactive Bottom-Right HUD Indicator
      */}
      <button
        id="hero-scroll-cue"
        onClick={handleScrollToDossier}
        type="button"
        aria-label="Explore dossier"
        className={`fixed bottom-8 right-8 z-30 font-mono text-xs tracking-wider bg-[#0E131F]/80 border border-white/15 px-4 py-2 rounded-full backdrop-blur-md text-slate-300 hover:text-white hover:border-teal-400 transition-all flex items-center gap-3 cursor-pointer group shadow-2xl ${
          isScrolledPast ? 'opacity-0 pointer-events-none translate-y-2' : 'opacity-100 translate-y-0'
        }`}
      >
        {/* Animated Signal Teal Ping Dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
        </span>

        {/* Action Label */}
        <span className="group-hover:text-teal-300 transition-colors">[ EXPLORE DOSSIER ↓ ]</span>
      </button>
    </section>
  );
};
