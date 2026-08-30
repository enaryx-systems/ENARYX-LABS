"use client";

import { cn } from "@/lib/utils";

/**
 * The one card primitive used across the site: a lightly tinted surface with
 * a masked gradient border (electric → deep purple) that intensifies on
 * hover, a cursor-following radial glow (desktop only), and a soft lift.
 */
export function GradientCard({
  children,
  className,
  glow = true,
  as: Comp = "div",
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  as?: "div" | "li" | "article";
}) {
  function onMove(e: React.PointerEvent<HTMLElement>) {
    if (!glow || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <Comp
      onPointerMove={onMove}
      className={cn(
        "card-grad group relative overflow-hidden rounded-[24px] p-7 shadow-[var(--card-shadow)] transition-[transform,box-shadow] duration-300",
        "hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)]",
        glow && "glow-follow",
        className
      )}
    >
      <div className="relative">{children}</div>
    </Comp>
  );
}
