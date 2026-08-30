"use client";

import { cn } from "@/lib/utils";

/**
 * The one card primitive: a clean surface with a hairline gradient border
 * (electric → deep purple) that lifts subtly on hover. Restrained — no
 * always-on glow. Opt into the cursor-following glow with `glow` where a
 * section genuinely benefits from it.
 */
export function GradientCard({
  children,
  className,
  glow = false,
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
        "card-grad group relative overflow-hidden rounded-2xl p-6 shadow-[var(--card-shadow)] transition-[transform,box-shadow] duration-300",
        "hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)]",
        glow && "glow-follow",
        className
      )}
    >
      <div className="relative">{children}</div>
    </Comp>
  );
}
