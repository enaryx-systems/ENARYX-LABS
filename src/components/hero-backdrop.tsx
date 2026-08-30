"use client";

import { useEffect, useRef } from "react";

/**
 * Full-bleed ambient backdrop for the hero — a slow-drifting node mesh
 * (the Enaryx "intelligent system" motif) rendered very faintly behind the
 * content. GPU-light: one canvas, capped node count, paused off-screen and
 * under prefers-reduced-motion. Falls back to the static gradient + grid
 * that sit behind it in the DOM.
 */
export function HeroBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;

    type P = { x: number; y: number; vx: number; vy: number };
    let nodes: P[] = [];

    const brand = getComputedStyle(document.documentElement)
      .getPropertyValue("--brand")
      .trim() || "#7c3aed";

    function resize() {
      if (!canvas) return;
      const r = canvas.parentElement!.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = coarse ? 24 : Math.min(Math.max(Math.round((w * h) / 26000), 28), 60);
      nodes = Array.from({ length: target }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.14,
      }));
    }

    function frame() {
      if (!running) return;
      ctx!.clearRect(0, 0, w, h);

      for (const p of nodes) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 150) {
            ctx!.strokeStyle = brand;
            ctx!.globalAlpha = (1 - d / 150) * 0.1;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      ctx!.fillStyle = brand;
      for (const p of nodes) {
        ctx!.globalAlpha = 0.28;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.3, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;

      raf = requestAnimationFrame(frame);
    }

    resize();
    frame();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(frame);
        } else {
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_80%_75%_at_50%_35%,#000_35%,transparent_85%)]"
    />
  );
}
