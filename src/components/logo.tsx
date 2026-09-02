import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Official Enaryx logo, theme-aware with no JS flash — globals.css shows the
 * right variant via .logo-light / .logo-dark (the dark lockup also shows
 * inside any .section-dark band, e.g. the footer).
 *
 *   light surface → purple metallic   (public/logo-*-light.png)
 *   dark surface  → silver metallic    (public/logo-*-dark.png)
 *
 * `wordmarkOnly` drops the mark — used in the header, where the wordmark
 * alone reads cleaner. The footer keeps the full lockup.
 */
export function Logo({
  className,
  wordmarkOnly = false,
}: {
  className?: string;
  wordmarkOnly?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <span className="logo-light items-center gap-2">
        {!wordmarkOnly && (
          <Image
            src="/logo-mark-light.png"
            alt=""
            width={474}
            height={482}
            priority
            className="h-7 w-auto shrink-0"
          />
        )}
        <Image
          src="/logo-wordmark-light.png"
          alt="Enaryx Labs"
          width={1450}
          height={158}
          priority
          className={wordmarkOnly ? "h-[19px] w-auto" : "h-[17px] w-auto"}
        />
      </span>
      <span className="logo-dark items-center gap-2">
        {!wordmarkOnly && (
          <Image
            src="/logo-mark-dark.png"
            alt=""
            width={347}
            height={332}
            priority
            className="h-7 w-auto shrink-0"
          />
        )}
        <Image
          src="/logo-wordmark-dark.png"
          alt="Enaryx Labs"
          width={1455}
          height={132}
          priority
          className={wordmarkOnly ? "h-[19px] w-auto" : "h-[17px] w-auto"}
        />
      </span>
    </span>
  );
}
