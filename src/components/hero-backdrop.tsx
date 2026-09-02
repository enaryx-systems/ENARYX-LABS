"use client";

import { useEffect, useRef } from "react";

/**
 * Full-bleed ambient backdrop for the hero — a slow-drifting node mesh
 * (the Enaryx "intelligent system" motif) rendered faintly behind the
 * content, plus a couple of slow-drifting glow orbs for depth. The mesh
 * reacts to the pointer: nodes near the cursor light up and wire
 * themselves to it, so the "system" feels alive without being loud.
 *
 * GPU-light: one canvas, capped node count, paused off-screen and under
 * prefers-reduced-motion (where it paints a single static frame instead).
 * Falls back to the static gradient + grid that sit behind it in the DOM.
 */
export function HeroBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let t = 0;

    type P = { x: number; y: number; vx: number; vy: number; ph: number; big: boolean };
    let nodes: P[] = [];

    // pointer, in canvas-local px; -1 means "no pointer"
    const pointer = { x: -1, y: -1, tx: -1, ty: -1 };

    const styles = getComputedStyle(document.documentElement);
    const brand = styles.getPropertyValue("--brand").trim() || "#7c3aed";
    const bright = styles.getPropertyValue("--brand-bright").trim() || "#a78bfa";

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
      const target = coarse ? 20 : Math.min(Math.max(Math.round((w * h) / 28000), 26), 52);
      nodes = Array.from({ length: target }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.14,
        ph: Math.random() * Math.PI * 2,
        big: i % 7 === 0,
      }));
    }

    function draw(animate: boolean) {
      ctx!.clearRect(0, 0, w, h);
      t += 1;

      // ease the pointer toward its target for a soft trailing feel
      if (pointer.tx >= 0) {
        pointer.x = pointer.x < 0 ? pointer.tx : pointer.x + (pointer.tx - pointer.x) * 0.12;
        pointer.y = pointer.y < 0 ? pointer.ty : pointer.y + (pointer.ty - pointer.y) * 0.12;
      }

      for (const p of nodes) {
        if (animate) {
          p.x += p.vx;
          p.y += p.vy;
        }
        // gentle parallax pull toward the pointer
        if (pointer.x >= 0) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const d = Math.hypot(dx, dy);
          if (d < 180 && d > 0.001) {
            const f = (1 - d / 180) * 0.22;
            p.x += (dx / d) * f;
            p.y += (dy / d) * f;
          }
        }
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
      }

      // node-to-node links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 122) {
            ctx!.strokeStyle = brand;
            ctx!.globalAlpha = (1 - d / 122) * 0.12;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // pointer links — brighter, wired to the cursor
      if (pointer.x >= 0) {
        for (const p of nodes) {
          const d = Math.hypot(pointer.x - p.x, pointer.y - p.y);
          if (d < 200) {
            ctx!.strokeStyle = bright;
            ctx!.globalAlpha = (1 - d / 200) * 0.32;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(pointer.x, pointer.y);
            ctx!.lineTo(p.x, p.y);
            ctx!.stroke();
          }
        }
      }

      // nodes — soft pulse, a few larger "hub" nodes
      for (const p of nodes) {
        const pulse = animate ? 0.5 + 0.5 * Math.sin(t * 0.02 + p.ph) : 1;
        const near =
          pointer.x >= 0
            ? Math.max(0, 1 - Math.hypot(pointer.x - p.x, pointer.y - p.y) / 200)
            : 0;
        const base = p.big ? 2 : 1.4;
        ctx!.fillStyle = near > 0.4 ? bright : brand;
        ctx!.globalAlpha = 0.44 + pulse * 0.12 + near * 0.4;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, base + near * 1.4, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function frame() {
      if (!running) return;
      draw(true);
      raf = requestAnimationFrame(frame);
    }

    resize();

    if (reduced) {
      draw(false);
      const roStatic = new ResizeObserver(() => {
        resize();
        draw(false);
      });
      roStatic.observe(canvas.parentElement!);
      return () => roStatic.disconnect();
    }

    frame();

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.tx = e.clientX - r.left;
      pointer.ty = e.clientY - r.top;
    };
    const onLeave = () => {
      pointer.tx = -1;
      pointer.ty = -1;
      pointer.x = -1;
      pointer.y = -1;
    };
    const host = canvas.parentElement!;
    if (!coarse) {
      host.addEventListener("pointermove", onMove);
      host.addEventListener("pointerleave", onLeave);
    }

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
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      {/* slow-drifting glow orbs — depth behind the mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[10%] top-[6%] h-[26rem] w-[26rem] rounded-full blur-[150px] opacity-70 animate-hero-drift-a"
        style={{ background: "radial-gradient(circle, var(--glow-violet), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[8%] top-[30%] h-[22rem] w-[22rem] rounded-full blur-[140px] opacity-60 animate-hero-drift-b"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--brand-bright) 30%, transparent), transparent 70%)",
        }}
      />
      <canvas
        ref={canvasRef}
        aria-hidden
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_85%_78%_at_50%_38%,#000_38%,transparent_88%)]"
      />
    </>
  );
}
