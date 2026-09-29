'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navigateTo, useCurrentPath } from '@/src/navigation';

interface NavbarProps {
  onBookCall?: () => void;
  isEntryCompleted?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookCall,
  isEntryCompleted = false,
}) => {
  const pathname = useCurrentPath();
  const isHome = pathname === '/';
  const [isVisible, setIsVisible] = useState(!isHome);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Appears after entry sequence or on scroll past entry viewport (always visible on dedicated pages)
  useEffect(() => {
    if (!isHome) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.35;
      if (window.scrollY > scrollThreshold || isEntryCompleted) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isEntryCompleted, isHome]);

  const handleNavClick = (route: string) => {
    setMobileMenuOpen(false);
    navigateTo(route);
  };

  const navLinks = [
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Rigor & Audits', path: '/rigor' },
    { label: 'Audit Pricing', path: '/pricing' },
    { label: 'Teardowns', path: '/teardowns' },
    { label: 'Intake Brief', path: '/intake' },
  ];

  if (!isVisible) return null;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[var(--bg-surface)]/92 backdrop-blur-2xl border-b border-theme shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-all duration-300">
      <div className="w-full px-6 h-[55px] flex items-center justify-between gap-4">

        {/* Left: PROJECT AIR Sculpted Display Wordmark with Precision Beacon */}
        <button
          type="button"
          onClick={() => {
            if (!isHome) {
              navigateTo('/');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center gap-2.5 group cursor-pointer text-left outline-none shrink-0"
        >
          <span className="w-5 h-5 rounded-md bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0 group-hover:border-teal-400 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.75)] group-hover:scale-110 transition-transform" />
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-display font-bold text-heading text-[15px] sm:text-[16px] tracking-[-0.02em] uppercase leading-none group-hover:text-teal-400 transition-colors">
              PROJECT AIR
            </span>
          </div>
        </button>

        {/* Center: Desktop Navigation Links (Balanced Condensed Grotesk) */}
        <nav
          aria-label="Primary Studio Navigation"
          className="hidden md:flex items-center gap-1 lg:gap-2"
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === link.path ||
              (link.path === '/rigor' && pathname === '/rigor-audits') ||
              (link.path === '/teardowns' && pathname === '/work') ||
              (link.path === '/intake' && (pathname === '/engage' || pathname === '/specification-intake'));

            return (
              <button
                key={link.path}
                type="button"
                onClick={() => handleNavClick(link.path)}
                className={`relative px-3 py-1.5 rounded-lg font-condensed text-[13.5px] lg:text-[14px] tracking-[0.08em] uppercase leading-none transition-all duration-150 cursor-pointer inline-flex items-center gap-1.5 ${isActive
                  ? 'text-heading font-bold bg-teal-500/12 border border-teal-500/30 shadow-[inset_0_1px_0_0_rgba(45,212,191,0.12)]'
                  : 'text-secondary font-semibold border border-transparent hover:text-heading hover:bg-[var(--border-subtle)]'
                  }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                )}
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Primary Scoping CTA, Clean Vertical Rule, and Far-Right Theme Switcher */}
        <div className="flex items-center gap-2.5 lg:gap-3.5 shrink-0">
          {/* Primary Scoping Call Action (Unified h-8 height & crisp sans typography) */}
          <button
            type="button"
            onClick={() => {
              if (onBookCall) {
                onBookCall();
              } else {
                handleNavClick('/intake');
              }
            }}
            className="hidden sm:inline-flex items-center gap-1.5 h-8 px-3.5 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans text-[12px] font-semibold tracking-[-0.01em] leading-none whitespace-nowrap shadow-[0_0_16px_rgba(45,212,191,0.2)] hover:shadow-[0_0_22px_rgba(45,212,191,0.35)] transition-all duration-150 cursor-pointer active:scale-[0.98]"
          >
            <span>Schedule Scoping Call</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
          </button>

          {/* Clean Separation Rule */}
          <div
            className="hidden sm:block h-4 w-px bg-[var(--border-medium)] opacity-75"
            aria-hidden="true"
          />

          {/* Far-Right Elegant Theme Switcher Dropdown */}
          <ThemeSwitcher />

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-lg border border-theme text-secondary hover:text-heading hover:bg-[var(--border-subtle)] transition-colors cursor-pointer"
            aria-label="Toggle Mobile Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-teal-400" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Clean Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden surface-card border-b border-theme px-6 py-5 space-y-4"
          >
            <div className="space-y-1.5">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.path ||
                  (link.path === '/rigor' && pathname === '/rigor-audits') ||
                  (link.path === '/teardowns' && pathname === '/work') ||
                  (link.path === '/intake' && (pathname === '/engage' || pathname === '/specification-intake'));

                return (
                  <button
                    key={link.path}
                    type="button"
                    onClick={() => handleNavClick(link.path)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between font-condensed text-[15px] uppercase tracking-[0.08em] ${isActive
                      ? 'text-teal-400 bg-teal-500/10 font-bold border border-teal-500/25'
                      : 'text-primary font-semibold hover:text-heading hover:bg-[var(--border-subtle)]'
                      }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-teal-400' : 'text-muted'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-theme flex flex-col gap-3">
              <div className="flex items-center justify-between px-3 py-2 rounded-xl option-card-theme border border-theme">
                <span className="font-condensed text-[13px] uppercase tracking-[0.08em] font-semibold text-secondary">
                  Studio Appearance
                </span>
                <ThemeSwitcher />
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onBookCall) {
                    onBookCall();
                  } else {
                    handleNavClick('/intake');
                  }
                }}
                className="w-full h-9 rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans text-xs font-semibold tracking-[-0.01em] inline-flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Schedule Scoping Call</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
