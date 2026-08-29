"use client";

import { cn } from "@/lib/utils";

/**
 * Glass card — translucent surface, hairline border, a radial glow that
 * follows the cursor on hover (desktop only, CSS custom properties updated
 * on pointer move), and a soft lift. This is the one card primitive used
 * across the site.
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
        "glass group relative overflow-hidden rounded-[24px] p-7 transition-[transform,border-color,background-color,box-shadow] duration-300",
        "hover:-translate-y-1 hover:border-brand/35 hover:bg-surface hover:shadow-[var(--card-shadow-hover)]",
        glow && "glow-follow",
        className
      )}
    >
      <div className="relative">{children}</div>
    </Comp>
  );
}
