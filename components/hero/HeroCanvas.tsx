import React, { useEffect, useRef } from 'react';

interface HeroCanvasProps {
  mouseX?: number;
  mouseY?: number;
}

interface GridNode {
  // Screen-space coordinates
  baseX: number;
  baseY: number;
  curX: number;
  curY: number;
  vx: number;
  vy: number;
  depth: number; // 0 (near viewer) to 1 (at horizon)
  distToCenter: number;
}

interface EnergyBeam {
  type: 'ray' | 'rung';
  lineIndex: number;
  progress: number; // 0 to 1
  speed: number;
  length: number;
  color: string;
  glowColor: string;
}

interface RadarPulse {
  radius: number;
  maxRadius: number;
  speed: number;
  strength: number;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ mouseX: extMouseX, mouseY: extMouseY }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animId = 0;
    let isVisible = true;

    // Track mouse coordinates (internal fallback or external)
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isActive: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.isActive = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Grid configuration
    const NUM_RAYS = 31; // Vertical/perspective rays
    const NUM_RUNGS = 22; // Horizontal rungs
    let nodes: GridNode[][] = [];

    // Horizon configuration
    let horizonY = 0;
    let vanishingX = 0;

    const buildGrid = (w: number, h: number) => {
      horizonY = h * 0.38;
      vanishingX = w * 0.5;

      nodes = [];
      const bottomSpread = w * 1.5;
      const startX = vanishingX - bottomSpread * 0.5;
      const rayStep = bottomSpread / (NUM_RAYS - 1);

      for (let r = 0; r < NUM_RUNGS; r++) {
        const rowNodes: GridNode[] = [];
        // Non-linear power distribution for exponential perspective depth
        const t = Math.pow((r + 1) / NUM_RUNGS, 2.3);
        const y = horizonY + (h - horizonY + 80) * t;
        const depth = 1 - t; // 1 at horizon, 0 at bottom

        for (let c = 0; c < NUM_RAYS; c++) {
          const bottomX = startX + c * rayStep;
          // Interpolate from vanishing point to bottom edge
          const x = vanishingX + (bottomX - vanishingX) * t;
          const distToCenter = Math.hypot(x - vanishingX, y - horizonY);

          rowNodes.push({
            baseX: x,
            baseY: y,
            curX: x,
            curY: y,
            vx: 0,
            vy: 0,
            depth,
            distToCenter,
          });
        }
        nodes.push(rowNodes);
      }
    };

    // Responsive Canvas Resizing with Retina DevicePixelRatio
    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      buildGrid(width, height);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Intersection Observer to suspend rendering offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    // Energy Beams Matrix
    const BEAM_COLORS = [
      { core: '#3FD6D6', glow: 'rgba(63, 214, 214, 0.45)' }, // Signal Teal
      { core: '#3FD6D6', glow: 'rgba(63, 214, 214, 0.45)' },
      { core: '#FF7A4D', glow: 'rgba(255, 122, 77, 0.45)' }, // Accent Orange
      { core: '#3FD6D6', glow: 'rgba(63, 214, 214, 0.45)' },
      { core: '#00E5FF', glow: 'rgba(0, 229, 255, 0.5)' },
    ];

    const beams: EnergyBeam[] = [];
    const MAX_BEAMS = 7;

    const spawnBeam = (): EnergyBeam => {
      const isRay = Math.random() > 0.28; // Mostly perspective longitudinal beams
      const colorScheme = BEAM_COLORS[Math.floor(Math.random() * BEAM_COLORS.length)];
      return {
        type: isRay ? 'ray' : 'rung',
        lineIndex: isRay
          ? Math.floor(Math.random() * NUM_RAYS)
          : Math.floor(Math.random() * (NUM_RUNGS - 5)) + 4,
        progress: -0.15 - Math.random() * 0.4,
        speed: 0.009 + Math.random() * 0.018,
        length: 0.18 + Math.random() * 0.25,
        color: colorScheme.core,
        glowColor: colorScheme.glow,
      };
    };

    for (let i = 0; i < MAX_BEAMS; i++) {
      const b = spawnBeam();
      b.progress = Math.random(); // Pre-warm progress
      beams.push(b);
    }

    // Radar Verification Waves
    const radarPulses: RadarPulse[] = [
      { radius: 0, maxRadius: 1200, speed: 2.2, strength: 0.9 },
      { radius: 450, maxRadius: 1200, speed: 2.2, strength: 0.8 },
      { radius: 900, maxRadius: 1200, speed: 2.2, strength: 0.7 },
    ];

    // Main 60/120Hz Animation Loop
    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      // Smooth cursor interpolation
      if (extMouseX !== undefined && extMouseY !== undefined) {
        mouse.targetX = extMouseX;
        mouse.targetY = extMouseY;
        mouse.isActive = true;
      }
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      // 1. Clear background to obsidian
      ctx.fillStyle = '#0A0D12';
      ctx.fillRect(0, 0, width, height);

      // 2. Horizon Atmospheric Glow
      const horizonGrad = ctx.createLinearGradient(0, horizonY - 40, 0, horizonY + 120);
      horizonGrad.addColorStop(0, 'rgba(10, 13, 18, 0)');
      horizonGrad.addColorStop(0.35, 'rgba(0, 124, 135, 0.12)');
      horizonGrad.addColorStop(1, 'rgba(10, 13, 18, 0)');
      ctx.fillStyle = horizonGrad;
      ctx.fillRect(0, horizonY - 40, width, 160);

      // 3. Update Radar Pulses
      for (let i = 0; i < radarPulses.length; i++) {
        const pulse = radarPulses[i];
        pulse.radius += pulse.speed;
        if (pulse.radius > pulse.maxRadius) {
          pulse.radius = 0;
        }
      }

      // 4. Update Node Positions with Spring Physics & Cursor Warp
      const cursorRadius = 220;
      const cursorRadiusSq = cursorRadius * cursorRadius;

      for (let r = 0; r < NUM_RUNGS; r++) {
        for (let c = 0; c < NUM_RAYS; c++) {
          const node = nodes[r]?.[c];
          if (!node) continue;

          let targetX = node.baseX;
          let targetY = node.baseY;

          if (mouse.isActive && mouse.x > 0 && mouse.y > 0) {
            const dx = node.baseX - mouse.x;
            const dy = node.baseY - mouse.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < cursorRadiusSq) {
              const dist = Math.sqrt(distSq);
              const factor = (1 - dist / cursorRadius);
              const elevation = Math.pow(factor, 2) * -38; // Lift upward
              targetY += elevation;
              targetX += (dx / (dist || 1)) * factor * 14; // Gentle lateral displacement
            }
          }

          // Damped spring physics
          const ax = (targetX - node.curX) * 0.18;
          const ay = (targetY - node.curY) * 0.18;
          node.vx = (node.vx + ax) * 0.72;
          node.vy = (node.vy + ay) * 0.72;
          node.curX += node.vx;
          node.curY += node.vy;
        }
      }

      // 5. Draw Transverse Horizontal Rungs
      ctx.lineWidth = 1;
      for (let r = 0; r < NUM_RUNGS; r++) {
        const row = nodes[r];
        if (!row || row.length === 0) continue;

        const depth = row[0].depth;
        // Fade lines as they approach horizon
        const baseAlpha = Math.max(0.02, (1 - depth) * 0.14);
        ctx.strokeStyle = `rgba(255, 255, 255, ${baseAlpha.toFixed(3)})`;

        ctx.beginPath();
        ctx.moveTo(row[0].curX, row[0].curY);
        for (let c = 1; c < NUM_RAYS; c++) {
          ctx.lineTo(row[c].curX, row[c].curY);
        }
        ctx.stroke();
      }

      // 6. Draw Longitudinal Perspective Rays
      for (let c = 0; c < NUM_RAYS; c++) {
        ctx.beginPath();
        const topNode = nodes[0]?.[c];
        if (!topNode) continue;

        ctx.moveTo(topNode.curX, topNode.curY);
        for (let r = 1; r < NUM_RUNGS; r++) {
          const node = nodes[r]?.[c];
          if (node) ctx.lineTo(node.curX, node.curY);
        }

        // Center rays are slightly more luminous
        const centerProximity = 1 - Math.abs(c - (NUM_RAYS - 1) / 2) / ((NUM_RAYS - 1) / 2);
        const rayAlpha = 0.04 + centerProximity * 0.08;
        ctx.strokeStyle = `rgba(255, 255, 255, ${rayAlpha.toFixed(3)})`;
        ctx.stroke();
      }

      // 7. Render Energy Beams
      for (let b = 0; b < beams.length; b++) {
        const beam = beams[b];
        beam.progress += beam.speed;

        if (beam.progress - beam.length > 1.0) {
          Object.assign(beam, spawnBeam());
          continue;
        }

        if (beam.type === 'ray') {
          const rayIndex = Math.min(Math.max(0, beam.lineIndex), NUM_RAYS - 1);
          // Interpolate beam segment across rungs
          const startProgress = Math.max(0, beam.progress - beam.length);
          const endProgress = Math.min(1, beam.progress);

          if (endProgress > startProgress) {
            const startRung = startProgress * (NUM_RUNGS - 1);
            const endRung = endProgress * (NUM_RUNGS - 1);

            const r1 = Math.floor(startRung);
            const r2 = Math.min(NUM_RUNGS - 1, Math.ceil(endRung));

            const nStart = nodes[r1]?.[rayIndex];
            const nEnd = nodes[r2]?.[rayIndex];

            if (nStart && nEnd) {
              const grad = ctx.createLinearGradient(nStart.curX, nStart.curY, nEnd.curX, nEnd.curY);
              grad.addColorStop(0, 'rgba(63, 214, 214, 0)');
              grad.addColorStop(0.7, beam.glowColor);
              grad.addColorStop(1, '#FFFFFF');

              ctx.strokeStyle = grad;
              ctx.lineWidth = 2.2;
              ctx.beginPath();
              ctx.moveTo(nStart.curX, nStart.curY);
              for (let r = r1 + 1; r <= r2; r++) {
                const midNode = nodes[r]?.[rayIndex];
                if (midNode) ctx.lineTo(midNode.curX, midNode.curY);
              }
              ctx.stroke();

              // White-hot photon head
              ctx.fillStyle = '#FFFFFF';
              ctx.beginPath();
              ctx.arc(nEnd.curX, nEnd.curY, 2.5, 0, Math.PI * 2);
              ctx.fill();

              // Signal Teal / Orange outer glow
              ctx.strokeStyle = beam.color;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.arc(nEnd.curX, nEnd.curY, 6, 0, Math.PI * 2);
              ctx.stroke();
            }
          }
        } else {
          // Transverse Rung Beam
          const rungIndex = Math.min(Math.max(0, beam.lineIndex), NUM_RUNGS - 1);
          const startProgress = Math.max(0, beam.progress - beam.length);
          const endProgress = Math.min(1, beam.progress);

          if (endProgress > startProgress) {
            const startCol = Math.floor(startProgress * (NUM_RAYS - 1));
            const endCol = Math.min(NUM_RAYS - 1, Math.ceil(endProgress * (NUM_RAYS - 1)));

            const nStart = nodes[rungIndex]?.[startCol];
            const nEnd = nodes[rungIndex]?.[endCol];

            if (nStart && nEnd) {
              const grad = ctx.createLinearGradient(nStart.curX, nStart.curY, nEnd.curX, nEnd.curY);
              grad.addColorStop(0, 'rgba(63, 214, 214, 0)');
              grad.addColorStop(0.7, beam.glowColor);
              grad.addColorStop(1, '#FFFFFF');

              ctx.strokeStyle = grad;
              ctx.lineWidth = 2.2;
              ctx.beginPath();
              ctx.moveTo(nStart.curX, nStart.curY);
              for (let c = startCol + 1; c <= endCol; c++) {
                const midNode = nodes[rungIndex]?.[c];
                if (midNode) ctx.lineTo(midNode.curX, midNode.curY);
              }
              ctx.stroke();
            }
          }
        }
      }

      // 8. Render Grid Nodes (Intersection Vertices & Radar Waves)
      for (let r = 0; r < NUM_RUNGS; r++) {
        for (let c = 0; c < NUM_RAYS; c++) {
          const node = nodes[r]?.[c];
          if (!node) continue;

          // Depth-based size and opacity
          const depthFactor = 1 - node.depth; // 1 near viewer, 0 at horizon
          let nodeRadius = 1.0 + depthFactor * 1.5;
          let nodeAlpha = 0.12 + depthFactor * 0.35;
          let isPulseHit = false;

          // Check radar waves
          for (let p = 0; p < radarPulses.length; p++) {
            const pulse = radarPulses[p];
            const diff = Math.abs(node.distToCenter - pulse.radius);
            if (diff < 65) {
              const waveBoost = (1 - diff / 65) * pulse.strength;
              nodeAlpha += waveBoost * 0.6;
              nodeRadius += waveBoost * 1.6;
              isPulseHit = true;
            }
          }

          // Check mouse proximity boost
          if (mouse.isActive && mouse.x > 0) {
            const d = Math.hypot(node.curX - mouse.x, node.curY - mouse.y);
            if (d < 160) {
              const mouseBoost = (1 - d / 160) * 0.7;
              nodeAlpha += mouseBoost;
              nodeRadius += mouseBoost * 2;
            }
          }

          nodeAlpha = Math.min(1, nodeAlpha);

          if (isPulseHit) {
            // Signal Teal luminous vertex
            ctx.fillStyle = `rgba(63, 214, 214, ${nodeAlpha.toFixed(2)})`;
            ctx.beginPath();
            ctx.arc(node.curX, node.curY, nodeRadius, 0, Math.PI * 2);
            ctx.fill();

            // Micro-halo
            ctx.strokeStyle = `rgba(63, 214, 214, ${(nodeAlpha * 0.4).toFixed(2)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.arc(node.curX, node.curY, nodeRadius + 2.5, 0, Math.PI * 2);
            ctx.stroke();
          } else {
            // Normal subtle white / cyan vertex
            ctx.fillStyle = `rgba(255, 255, 255, ${(nodeAlpha * 0.65).toFixed(2)})`;
            ctx.beginPath();
            ctx.arc(node.curX, node.curY, nodeRadius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 9. Vignette / Horizon Edge Blend
      const topFade = ctx.createLinearGradient(0, 0, 0, horizonY + 80);
      topFade.addColorStop(0, '#0A0D12');
      topFade.addColorStop(0.5, '#0A0D12');
      topFade.addColorStop(0.85, 'rgba(10, 13, 18, 0.4)');
      topFade.addColorStop(1, 'rgba(10, 13, 18, 0)');
      ctx.fillStyle = topFade;
      ctx.fillRect(0, 0, width, horizonY + 80);

      // Lateral Vignettes
      const leftVignette = ctx.createLinearGradient(0, 0, width * 0.15, 0);
      leftVignette.addColorStop(0, 'rgba(10, 13, 18, 0.85)');
      leftVignette.addColorStop(1, 'rgba(10, 13, 18, 0)');
      ctx.fillStyle = leftVignette;
      ctx.fillRect(0, 0, width * 0.15, height);

      const rightVignette = ctx.createLinearGradient(width, 0, width * 0.85, 0);
      rightVignette.addColorStop(0, 'rgba(10, 13, 18, 0.85)');
      rightVignette.addColorStop(1, 'rgba(10, 13, 18, 0)');
      ctx.fillStyle = rightVignette;
      ctx.fillRect(width * 0.85, 0, width * 0.15, height);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, [extMouseX, extMouseY]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-[#0A0D12] select-none"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
