'use client';

import React from 'react';
import { Outfit, Plus_Jakarta_Sans, Barlow_Condensed, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/src/theme';

const outfitDisplay = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-condensed',
  weight: ['500', '600', '700'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-code',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div
        className={`${outfitDisplay.variable} ${plusJakartaSans.variable} ${barlowCondensed.variable} ${jetbrainsMono.variable} min-h-screen font-sans antialiased selection:bg-teal-500/20 selection:text-teal-300 relative overflow-x-hidden`}
      >
        {/* Procedural Film Grain Noise (Zero external files, pure SVG vector turbulence) */}
        <div className="film-grain" aria-hidden="true" />

        {/* Ambient Top Atmospheric Glow */}
        <div 
          aria-hidden="true" 
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[360px] bg-gradient-to-b from-[#007C87]/10 via-[#3FD6D6]/5 to-transparent blur-[120px] pointer-events-none z-0" 
        />

        <main className="relative z-10 w-full min-h-screen">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
