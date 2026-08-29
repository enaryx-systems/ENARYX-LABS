import { cn } from "@/lib/utils";

/**
 * Hand-drawn approximation of the real Enaryx mark (a swoosh crescent with
 * an "E" built into it) — the closest I can get without the actual file:
 * this session has no way to save a pasted chat image to disk, only to see
 * it. To use the real asset instead: save it as public/logo-mark.png
 * (ideally cropped tight to just the mark, transparent background — not
 * the square dark card) and swap the <svg> below for
 * `<Image src="/logo-mark.png" alt="" width={28} height={28} />`.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 40 40" className="h-[28px] w-[28px]" aria-hidden="true">
        <defs>
          <linearGradient id="enaryx-mark" x1="4" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--brand-bright)" />
            <stop offset="1" stopColor="var(--cyan)" />
          </linearGradient>
          <mask id="enaryx-crescent-cut">
            <rect x="0" y="0" width="40" height="40" fill="white" />
            <circle cx="25" cy="20" r="13.5" fill="black" />
          </mask>
        </defs>

        {/* crescent body */}
        <circle
          cx="18.5"
          cy="20"
          r="15.5"
          fill="url(#enaryx-mark)"
          mask="url(#enaryx-crescent-cut)"
        />

        {/* E, built into the crescent's inner face */}
        <g stroke="url(#enaryx-mark)" strokeWidth="2.7" strokeLinecap="round">
          <path d="M11.8 12v16" />
          <path d="M11.8 12h8.6" />
          <path d="M11.8 20h6.4" />
          <path d="M11.8 28h8.6" />
        </g>
      </svg>
      <span className="flex items-baseline gap-1.5 font-display text-[1.05rem] tracking-[-0.01em] leading-none">
        Enaryx
        <span className="font-mono text-[0.68rem] font-medium tracking-[0.22em] text-brand-bright">
          LABS
        </span>
      </span>
    </span>
  );
}
