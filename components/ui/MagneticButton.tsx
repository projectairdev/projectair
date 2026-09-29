'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export interface MagneticButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  href,
  onClick,
  variant = 'primary',
  className = '',
  children,
  target,
  rel,
  type = 'button',
  disabled = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);
  const [radialPos, setRadialPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
      setCanHover(mq.matches);

      const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, []);

  // Motion physics configuration
  const springConfig = { stiffness: 180, damping: 14, mass: 0.1 };
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Displace with pull factor, clamp strictly to ±8px for stability
    const pullFactor = 0.28;
    const maxDisplacement = 8;
    const targetX = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaX * pullFactor));
    const targetY = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaY * pullFactor));

    rawX.set(targetX);
    rawY.set(targetY);

    // Compute relative cursor percentage for the specular gradient tracking
    const posX = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const posY = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setRadialPos({ x: posX, y: posY });
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setRadialPos({ x: 50, y: 50 });
  };

  // Variant styling definitions
  let variantClasses = '';
  switch (variant) {
    case 'primary':
      variantClasses =
        'bg-teal-400 hover:bg-teal-300 text-slate-950 font-sans text-xs font-semibold tracking-wider shadow-[0_0_15px_rgba(45,212,191,0.2)] hover:shadow-[0_0_25px_rgba(45,212,191,0.35)] border border-teal-300/40';
      break;
    case 'secondary':
      variantClasses =
        'surface-card text-primary hover:text-heading border border-theme hover:border-teal-500/40 font-sans text-xs font-medium tracking-wider';
      break;
    case 'ghost':
    default:
      variantClasses =
        'option-card-theme hover:bg-[var(--border-subtle)] text-secondary hover:text-heading border border-theme font-sans text-xs font-medium tracking-wider';
      break;
  }

  const baseContent = (
    <motion.div
      style={{
        x: canHover ? springX : 0,
        y: canHover ? springY : 0,
      }}
      whileHover={canHover ? { scale: 1.02 } : undefined}
      whileTap={{ scale: 0.96, transition: { type: 'spring', stiffness: 450, damping: 20 } }}
      className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full cursor-pointer select-none transition-colors duration-200 overflow-hidden ${variantClasses} ${className}`}
    >
      {/* Dynamic Specular Tracking Radial Glow */}
      {canHover && (
        <span
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${radialPos.x}% ${radialPos.y}%, rgba(255, 255, 255, 0.15), transparent 60%)`,
          }}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </motion.div>
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block relative"
    >
      {href ? (
        <Link
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] rounded-full"
        >
          {baseContent}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] rounded-full bg-transparent border-none p-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {baseContent}
        </button>
      )}
    </div>
  );
};

export default MagneticButton;
