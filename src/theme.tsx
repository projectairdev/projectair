'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';

export type Theme = 'dark' | 'light' | 'warm' | 'slate';

export interface ThemeConfig {
  id: Theme;
  label: string;
  shortLabel: string;
  description: string;
  dotColor: string;
}

export const THEMES: ThemeConfig[] = [
  {
    id: 'light',
    label: 'Light (Alabaster)',
    shortLabel: 'Light',
    description: 'Clean ivory and crisp typography',
    dotColor: '#F8FAFC',
  },
  {
    id: 'warm',
    label: 'Warm Charcoal',
    shortLabel: 'Warm',
    description: 'Warm espresso and amber undertones',
    dotColor: '#141210',
  },
  {
    id: 'slate',
    label: 'Cool Slate',
    shortLabel: 'Cool',
    description: 'Deep navy-slate and cyan highlights',
    dotColor: '#0B1320',
  },
  {
    id: 'dark',
    label: 'Dark (Obsidian)',
    shortLabel: 'Dark',
    description: 'Deep obsidian and signal teal',
    dotColor: '#0A0D12',
  },
];

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
  themes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = 'air-studio-theme';
const LEGACY_STORAGE_KEY = 'projectair-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Initial read from DOM or localStorage or system preference
    try {
      const existingTheme = document.documentElement.getAttribute('data-theme') as Theme;
      const stored = (localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY)) as Theme;
      
      const targetTheme = (existingTheme && ['dark', 'light', 'warm', 'slate'].includes(existingTheme))
        ? existingTheme
        : (stored && ['dark', 'light', 'warm', 'slate'].includes(stored))
          ? stored
          : window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
            ? 'light'
            : 'dark';

      applyTheme(targetTheme);
      setThemeState(targetTheme);
    } catch {
      applyTheme('dark');
      setThemeState('dark');
    }
    setMounted(true);
  }, []);

  const applyTheme = (nextTheme: Theme) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.setAttribute('data-theme', nextTheme);
    
    // Maintain standard dark/light classes for compatibility
    if (nextTheme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }

    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
      localStorage.setItem(LEGACY_STORAGE_KEY, nextTheme);
    } catch {}
  };

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    applyTheme(nextTheme);
  };

  const cycleTheme = () => {
    const ids: Theme[] = ['dark', 'light', 'warm', 'slate'];
    const currentIndex = ids.indexOf(theme);
    const nextTheme = ids[(currentIndex + 1) % ids.length];
    setTheme(nextTheme);
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      cycleTheme,
      themes: THEMES,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Fallback for safety outside provider
    return {
      theme: 'dark',
      setTheme: () => {},
      cycleTheme: () => {},
      themes: THEMES,
    };
  }
  return context;
};
