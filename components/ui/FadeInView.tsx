'use client';

import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

export interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  blur?: boolean;
  scale?: boolean | number;
  threshold?: number;
}

export const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.52,
  yOffset,
  direction = 'up',
  distance = 10,
  blur = false,
  scale = false,
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const actualDistance = yOffset !== undefined ? yOffset : distance;
  let initialX = 0;
  let initialY = 0;

  switch (direction) {
    case 'up':
      initialY = actualDistance;
      break;
    case 'down':
      initialY = -actualDistance;
      break;
    case 'left':
      initialX = actualDistance;
      break;
    case 'right':
      initialX = -actualDistance;
      break;
    case 'none':
      initialX = 0;
      initialY = 0;
      break;
  }

  const initialScale = typeof scale === 'number' ? scale : scale ? 0.988 : 1;

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: initialX,
      y: initialY,
      scale: initialScale,
      filter: blur ? 'blur(3px)' : 'none',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-32px' }}
      variants={variants}
      className={className}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;
