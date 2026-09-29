'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  spotlightColor?: string;
  maxTilt?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  onClick,
  spotlightColor = 'rgba(45, 212, 191, 0.22)',
  maxTilt = 8,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [canHover, setCanHover] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
      setCanHover(mq.matches);

      const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, []);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);

  // Calibrated spring physics for smooth, heavy spatial feel
  const springConfig = { stiffness: 220, damping: 20 };
  const rotateX = useSpring(rawRotateX, springConfig);
  const rotateY = useSpring(rawRotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlightPos({ x, y });

    // Normalized coordinates from -0.5 to +0.5 across both axes
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    // Pitch & Yaw rotation
    const rx = -normY * maxTilt;
    const ry = normX * maxTilt;

    rawRotateX.set(rx);
    rawRotateY.set(ry);
  };

  const handleMouseEnter = () => {
    if (canHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rawRotateX.set(0);
    rawRotateY.set(0);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="relative w-full h-full"
    >
      <motion.div
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: canHover ? rotateX : 0,
          rotateY: canHover ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        className={`relative rounded-2xl surface-card surface-card-hover overflow-hidden transition-shadow duration-300 group cursor-default select-none ${className}`}
      >
        {/* 1. Specular Border Illumination: Concentrated spotlight tracking along the border */}
        {canHover && (
          <div
            className="pointer-events-none absolute -inset-[1px] rounded-2xl transition-opacity duration-300 z-20"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(350px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${spotlightColor}, transparent 65%)`,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              padding: '1px',
            }}
          />
        )}

        {/* 2. Soft Surface Ambient Spotlight: Inner surface glare */}
        {canHover && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-10"
            style={{
              opacity: isHovered ? 0.75 : 0,
              background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255, 255, 255, 0.08), transparent 70%)`,
            }}
          />
        )}

        {/* 3. Card Depth Stacking: Child elements elevated into 3D space */}
        <div
          style={{
            transform: canHover && isHovered ? 'translateZ(16px)' : 'translateZ(0px)',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="relative z-10 w-full h-full flex flex-col justify-between"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default TiltCard;
