'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTheme, Theme } from '@/src/theme';
import { Moon, Sun, Flame, Compass, ChevronDown, Check } from 'lucide-react';

interface ThemeSwitcherProps {
  className?: string;
  isCompact?: boolean;
  placement?: 'bottom' | 'top';
}

interface ThemeOption {
  id: Theme;
  label: string;
  tagline: string;
  icon: React.FC<{ className?: string }>;
  swatchBg: string;
  swatchBorder: string;
  accentDot: string;
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'dark',
    label: 'Dark',
    tagline: 'Obsidian · Signal Teal',
    icon: Moon,
    swatchBg: '#0B0E14',
    swatchBorder: 'rgba(63, 214, 214, 0.55)',
    accentDot: 'bg-teal-400',
  },
  {
    id: 'light',
    label: 'Light',
    tagline: 'Alabaster · Editorial',
    icon: Sun,
    swatchBg: '#F8FAFC',
    swatchBorder: 'rgba(15, 23, 42, 0.35)',
    accentDot: 'bg-teal-600',
  },
  {
    id: 'warm',
    label: 'Warm',
    tagline: 'Espresso · Charcoal',
    icon: Flame,
    swatchBg: '#1C1713',
    swatchBorder: 'rgba(245, 158, 11, 0.55)',
    accentDot: 'bg-amber-400',
  },
  {
    id: 'slate',
    label: 'Cool',
    tagline: 'Slate · Deep Navy',
    icon: Compass,
    swatchBg: '#0F1A2C',
    swatchBorder: 'rgba(56, 189, 248, 0.55)',
    accentDot: 'bg-sky-400',
  },
];

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  className = '',
  isCompact = false,
  placement = 'bottom',
}) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const currentTheme = THEME_OPTIONS.find((t) => t.id === theme) || THEME_OPTIONS[0];
  const CurrentIcon = currentTheme.icon;

  // Close dropdown on outside click or Escape, and support arrow key cycling
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
        buttonRef.current?.focus();
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const currentIndex = THEME_OPTIONS.findIndex((t) => t.id === theme);
        const delta = e.key === 'ArrowDown' ? 1 : -1;
        const nextIndex = (currentIndex + delta + THEME_OPTIONS.length) % THEME_OPTIONS.length;
        setTheme(THEME_OPTIONS[nextIndex].id);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, theme, setTheme]);

  const handleSelect = useCallback(
    (themeId: Theme) => {
      setTheme(themeId);
      setIsOpen(false);
      buttonRef.current?.focus();
    },
    [setTheme]
  );

  return (
    <div ref={containerRef} className={`relative inline-flex items-center select-none ${className}`}>
      {/* Refined Minimal Dropdown Trigger */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Appearance theme: ${currentTheme.label}. Click to change theme.`}
        className={`group inline-flex items-center gap-2 h-8 px-2.5 rounded-lg border transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-400 ${
          isOpen
            ? 'bg-[var(--bg-surface-elevated)] border-teal-400/50 text-heading shadow-sm'
            : 'bg-[var(--bg-surface-elevated)]/60 hover:bg-[var(--bg-surface-elevated)] border-theme hover:border-theme-medium text-primary'
        }`}
      >
        {/* Active Theme Swatch */}
        <span
          className="w-3 h-3 rounded-full flex items-center justify-center shrink-0 transition-transform duration-150 group-hover:scale-105"
          style={{
            backgroundColor: currentTheme.swatchBg,
            border: `1.5px solid ${currentTheme.swatchBorder}`,
          }}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${currentTheme.accentDot}`} />
        </span>

        {!isCompact && (
          <span className="font-condensed text-[13px] font-semibold uppercase tracking-[0.08em] text-heading leading-none">
            {currentTheme.label}
          </span>
        )}

        <ChevronDown
          className={`w-3 h-3 text-muted transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 text-teal-400' : 'group-hover:text-secondary'
          }`}
        />
      </button>

      {/* High-End Technical Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={
              prefersReduced
                ? { opacity: 0 }
                : { opacity: 0, y: placement === 'top' ? 6 : -6, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              prefersReduced
                ? { opacity: 0 }
                : { opacity: 0, y: placement === 'top' ? 4 : -4, scale: 0.98 }
            }
            transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
            role="listbox"
            aria-label="Select studio color theme"
            className={`absolute right-0 ${
              placement === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
            } w-52 rounded-xl bg-[var(--bg-surface-elevated)] border border-theme-medium shadow-2xl p-1.5 z-[100] backdrop-blur-2xl`}
          >
            {/* Header Bar */}
            <div className="px-2.5 py-1.5 border-b border-theme mb-1 flex items-center justify-between">
              <span className="font-condensed text-[11px] uppercase tracking-[0.12em] text-muted font-semibold leading-none">
                Appearance
              </span>
              <span className="font-condensed text-[11px] uppercase tracking-[0.08em] text-teal-400 font-semibold leading-none">
                {currentTheme.label} Active
              </span>
            </div>

            {/* Options List */}
            <div className="space-y-0.5">
              {THEME_OPTIONS.map((t) => {
                const isSelected = theme === t.id;
                const IconComponent = t.icon;

                return (
                  <button
                    key={t.id}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(t.id)}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-all duration-150 cursor-pointer group ${
                      isSelected
                        ? 'bg-teal-500/12 border border-teal-400/35 text-heading'
                        : 'border border-transparent text-secondary hover:text-heading hover:bg-[var(--border-subtle)]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Precision Swatch */}
                      <span
                        className="w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: t.swatchBg,
                          border: `1.5px solid ${t.swatchBorder}`,
                        }}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${t.accentDot}`} />
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <IconComponent
                            className={`w-3 h-3 shrink-0 ${
                              isSelected ? 'text-teal-400' : 'text-muted group-hover:text-secondary'
                            }`}
                          />
                          <span
                            className={`font-sans text-[12px] leading-none tracking-tight ${
                              isSelected ? 'text-heading font-semibold' : 'text-primary font-medium'
                            }`}
                          >
                            {t.label}
                          </span>
                        </div>
                        <div className="font-condensed text-[11px] tracking-[0.04em] text-muted mt-0.5 truncate">
                          {t.tagline}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <span className="flex items-center justify-center w-4 h-4 rounded-full bg-teal-400/15 text-teal-400 shrink-0 ml-2">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
