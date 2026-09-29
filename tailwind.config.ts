import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          base: '#0A0D12',
          surface: '#0F131A',
          card: 'rgba(18, 22, 34, 0.7)',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.04)',
        },
        signal: {
          teal: '#007C87',
          bright: '#3FD6D6',
          dim: 'rgba(63, 214, 214, 0.15)',
        },
        accent: {
          orange: '#FF5A2B',
          bright: '#FF7A4D',
          dim: 'rgba(255, 90, 43, 0.15)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Outfit', 'sans-serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['var(--font-sans)', 'Plus Jakarta Sans', 'sans-serif'],
        condensed: ['var(--font-condensed)', 'Barlow Condensed', 'sans-serif'],
        mono: ['var(--font-condensed)', 'Barlow Condensed', 'sans-serif'],
        code: ['var(--font-code)', 'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.026em',
        normal: '-0.008em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.13em',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'laser-scan': 'laserScan 4s linear infinite',
      },
      keyframes: {
        laserScan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
