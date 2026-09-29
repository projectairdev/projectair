'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const TechStackTicker: React.FC = () => {
  const prefersReduced = useReducedMotion();

  const STACK_ITEMS = [
    { label: 'TypeScript 5.7+', sub: 'STRICT_MODE' },
    { label: 'Next.js App Router', sub: 'SSR / STREAMING' },
    { label: 'PostgreSQL RLS', sub: 'TENANT_ISOLATION' },
    { label: 'LangGraph State Machines', sub: 'DETERMINISTIC_LOOPS' },
    { label: 'Stryker AST Mutator', sub: 'FAULT_INJECTION' },
    { label: 'Playwright E2E Suites', sub: 'INTEGRATION_GATES' },
    { label: 'Redis Sentinel', sub: 'DISTRIBUTED_LOCKS' },
    { label: 'Docker Sandboxes', sub: 'ZERO_DOWNTIME' },
    { label: 'Zod & TypeBox', sub: 'RUNTIME_CONTRACTS' },
  ];

  // Duplicate for seamless infinite loop
  const duplicatedItems = [...STACK_ITEMS, ...STACK_ITEMS];

  return (
    <div className="w-full py-4 sm:py-4.5 border-b border-theme bg-[var(--bg-surface)] relative overflow-hidden select-none">
      {/* Left and Right Fade Gradients adapt seamlessly to current theme base */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--bg-base)] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--bg-base)] to-transparent" />

      {/* Infinite Seamless Glide */}
      <div className="flex items-center">
        {prefersReduced ? (
          <div className="flex items-center gap-8 overflow-x-auto px-6 py-1 scrollbar-none">
            {STACK_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400/60" />
                <span className="font-mono text-xs text-secondary tracking-wider">
                  {item.label}
                </span>
                <span className="text-[10px] font-mono text-muted uppercase">
                  [{item.sub}]
                </span>
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              duration: 38,
              ease: 'linear',
            }}
            className="flex items-center gap-10 shrink-0 will-change-transform"
          >
            {duplicatedItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 shrink-0 group">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400/50 group-hover:bg-teal-400 transition-colors" />
                <span className="font-mono text-xs text-secondary group-hover:text-heading transition-colors tracking-wide">
                  {item.label}
                </span>
                <span className="text-[10px] font-mono text-muted group-hover:text-teal-400 transition-colors uppercase">
                  [{item.sub}]
                </span>
                <span className="text-muted/40 text-xs font-mono select-none">/</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TechStackTicker;
