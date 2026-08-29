"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "ghost";
  strength?: number;
};

const base =
  "group relative inline-flex items-center gap-2 font-mono text-[0.8125rem] tracking-[0.02em] px-6 py-3.5 rounded-[14px] transition-[filter,background-color,border-color] duration-200";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  solid:
    "border border-transparent bg-[linear-gradient(120deg,var(--brand-bright),var(--brand)_55%,var(--cyan))] text-on-brand shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_12px_32px_-10px_var(--glow-violet)] hover:brightness-110",
  outline: "glass text-text hover:border-line-strong hover:bg-glass-strong",
  ghost: "text-muted hover:text-text px-0 py-1 rounded-none",
};

export function MagneticLink({
  href,
  children,
  className,
  variant = "solid",
  strength = 0.35,
}: Props) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const external = href.startsWith("http") || href.startsWith("mailto:");

  function onMove(e: React.PointerEvent) {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <MotionLink
      ref={ref}
      href={href}
      onPointerMove={onMove}
      onPointerLeave={reset}
      whileHover={reduced ? undefined : { y: -2 }}
      style={{ x: sx, y: sy }}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </MotionLink>
  );
}
