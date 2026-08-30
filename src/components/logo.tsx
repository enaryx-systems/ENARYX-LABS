import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Official Enaryx logo (mark + wordmark), theme-aware with no JS flash —
 * globals.css shows the right lockup via .logo-light / .logo-dark (the
 * dark lockup also shows inside any .section-dark band, e.g. the footer).
 *
 *   light surface → purple metallic lockup   (public/logo-*-light.png)
 *   dark surface  → silver metallic lockup    (public/logo-*-dark.png)
 *
 * PNGs were background-keyed from the supplied brand renders. For an even
 * crisper mark, drop tight transparent SVGs in at the same paths.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <span className="logo-light items-center gap-2">
        <Image
          src="/logo-mark-light.png"
          alt=""
          width={474}
          height={482}
          priority
          className="h-7 w-auto shrink-0"
        />
        <Image
          src="/logo-wordmark-light.png"
          alt="Enaryx Labs"
          width={1450}
          height={158}
          priority
          className="h-[17px] w-auto"
        />
      </span>
      <span className="logo-dark items-center gap-2">
        <Image
          src="/logo-mark-dark.png"
          alt=""
          width={347}
          height={332}
          priority
          className="h-7 w-auto shrink-0"
        />
        <Image
          src="/logo-wordmark-dark.png"
          alt="Enaryx Labs"
          width={1455}
          height={132}
          priority
          className="h-[17px] w-auto"
        />
      </span>
    </span>
  );
}
