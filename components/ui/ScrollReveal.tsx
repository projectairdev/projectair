'use client';

import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  yOffset?: number;
  duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  staggerChildren,
  yOffset = 12,
  duration = 0.5,
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: staggerChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-32px' }}
      variants={containerVariants}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
