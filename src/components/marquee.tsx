import { cn } from "@/lib/utils";

/**
 * Infinite logo/label marquee. Pure CSS animation (keyframes in globals.css),
 * pauses on hover, and is disabled under prefers-reduced-motion.
 */
export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]",
        className
      )}
    >
      <div className="flex shrink-0 animate-marquee items-center gap-3 pr-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-[8px] border border-line bg-surface px-4 py-2 font-mono text-[0.8125rem] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 animate-marquee items-center gap-3 pr-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-[8px] border border-line bg-surface px-4 py-2 font-mono text-[0.8125rem] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
