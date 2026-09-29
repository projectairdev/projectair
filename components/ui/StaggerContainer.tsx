'use client';

import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

export interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayStart?: number;
  viewportMargin?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.07,
  delayStart = 0,
  viewportMargin = '-32px',
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayStart,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  scale?: boolean | number;
  blur?: boolean;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
  direction = 'up',
  distance = 10,
  scale = false,
  blur = false,
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  let initialX = 0;
  let initialY = 0;

  switch (direction) {
    case 'up':
      initialY = distance;
      break;
    case 'down':
      initialY = -distance;
      break;
    case 'left':
      initialX = distance;
      break;
    case 'right':
      initialX = -distance;
      break;
    case 'none':
      initialX = 0;
      initialY = 0;
      break;
  }

  const initialScale = typeof scale === 'number' ? scale : scale ? 0.988 : 1;

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: initialX,
      y: initialY,
      scale: initialScale,
      filter: blur ? 'blur(2.5px)' : 'none',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.48,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
