"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

type Particle = { x: number; y: number; vx: number; vy: number };

function subscribeToResize(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}

function getEnabledSnapshot() {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    window.innerWidth >= 768
  );
}

/**
 * Abstract particle network — nodes drifting slowly, connected by faint
 * lines when close, with a subtle mouse influence. Canvas is skipped
 * entirely on touch/small screens and under reduced-motion: the glow orb
 * (plain CSS) still renders so the hero never looks empty.
 */
export function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const enabled = useSyncExternalStore(subscribeToResize, getEnabledSnapshot, () => false);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    const styles = getComputedStyle(document.documentElement);
    const lineColor = "244,245,249";
    const nodeColor = styles.getPropertyValue("--brand-bright").trim() || "#a78bfa";

    function resize() {
      if (!canvas || !wrap) return;
      width = wrap.clientWidth;
      height = wrap.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((width * height) / 9000);
      particles = Array.from({ length: Math.min(Math.max(count, 40), 130) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
    }

    function onMove(e: PointerEvent) {
      const r = wrap!.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function tick() {
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        // gentle drift
        p.x += p.vx;
        p.y += p.vy;

        // subtle mouse influence — nudge, don't chase
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 14000) {
          const f = (14000 - d2) / 14000;
          p.x += (dx / (Math.sqrt(d2) || 1)) * f * 0.6;
          p.y += (dy / (Math.sqrt(d2) || 1)) * f * 0.6;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }

      // connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx!.strokeStyle = `rgba(${lineColor},${(1 - dist / 120) * 0.12})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // nodes
      ctx!.fillStyle = nodeColor;
      for (const p of particles) {
        ctx!.globalAlpha = 0.55;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;

      raf = requestAnimationFrame(tick);
    }

    resize();
    tick();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled]);

  return (
    <div ref={wrapRef} className="relative aspect-square w-full max-w-[480px]">
      <div
        className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
        style={{
          background:
            "radial-gradient(circle, var(--glow-violet), var(--glow-cyan) 60%, transparent 75%)",
        }}
        aria-hidden
      />
      {enabled && <canvas ref={canvasRef} className="absolute inset-0" aria-hidden />}
    </div>
  );
}
