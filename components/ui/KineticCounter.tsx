'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export interface KineticCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export const KineticCounter: React.FC<KineticCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  duration = 1.6,
  decimals = 0,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState<string>(
    decimals > 0 ? (0).toFixed(decimals) : '0'
  );

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 70,
    damping: 24,
    mass: 1,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (decimals > 0) {
        setDisplayValue(latest.toFixed(decimals));
      } else {
        setDisplayValue(Math.round(latest).toLocaleString());
      }
    });

    return () => unsubscribe();
  }, [springValue, decimals]);

  return (
    <span
      ref={ref}
      className={`font-mono font-bold tabular-nums inline-flex items-baseline ${className}`}
      style={{ willChange: isInView ? 'transform, opacity' : 'auto' }}
    >
      {prefix && <span>{prefix}</span>}
      <span>{displayValue}</span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
};

export default KineticCounter;
