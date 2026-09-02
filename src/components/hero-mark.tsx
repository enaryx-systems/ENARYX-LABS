import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Oversized Enaryx mark sunk into the background — low opacity, soft blur,
 * radially masked so it dissolves into the surface. Theme-aware via the
 * shared .logo-light / .logo-dark toggle. Purely decorative.
 *
 * Defaults place it bleeding off the right edge of the hero; `position` and
 * `size` override that for other placements (e.g. the footer).
 */
export function HeroMark({
  position = "-z-[1] right-[-14%] top-1/2 -translate-y-1/2 sm:right-[-10%] lg:right-[-2%]",
  size = "w-[26rem] max-w-[38vw] opacity-[0.22] lg:w-[36rem]",
}: {
  position?: string;
  size?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute hidden select-none blur-[1px] sm:block",
        position,
      )}
    >
      <div className={cn("animate-mark-breathe", size)}>
        <span className="logo-light w-full">
          <Image
            src="/logo-mark-light.png"
            alt=""
            width={474}
            height={482}
            className="h-auto w-full [mask-image:radial-gradient(circle_at_50%_45%,#000_28%,transparent_70%)]"
          />
        </span>
        <span className="logo-dark w-full">
          <Image
            src="/logo-mark-dark.png"
            alt=""
            width={347}
            height={332}
            className="h-auto w-full [mask-image:radial-gradient(circle_at_50%_45%,#000_28%,transparent_70%)]"
          />
        </span>
      </div>
    </div>
  );
}
