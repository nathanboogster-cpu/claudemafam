import Image from "next/image";
import { business } from "@/lib/site-data";
import { getBrandLogo } from "@/lib/brand-logo";
import { TongfluenceMark, BrandLockup, Wordmark } from "./icons";

// The brand lockup, rendered from the real logo artwork in public/images/.
//
// Two variants, because the supplied logo is a stacked lockup that does not
// work in a 64px header bar — scaled to fit, its wordmark lands at about five
// pixels tall. "compact" therefore uses the horizontal arrangement of the same
// artwork; "full" uses the stacked lockup as supplied, where there is room.
//
// If the artwork is ever missing, this falls back to the drawn reproduction in
// components/icons.tsx rather than rendering a broken image. See
// lib/brand-logo.ts.
export function Logo({
  variant = "compact",
  className = "",
}: {
  variant?: "compact" | "full";
  className?: string;
}) {
  const logo = getBrandLogo(variant === "full" ? "lockup" : "horizontal");
  const sizeClass = variant === "full" ? "h-24 w-auto" : "h-10 w-auto sm:h-11";

  if (logo) {
    return (
      <Image
        src={logo.src}
        alt={business.name}
        width={logo.width}
        height={logo.height}
        className={`${sizeClass} ${className}`}
        // The header logo is above the fold on every page, so it is the one
        // image worth prioritising; the footer's is always below it.
        priority={variant === "compact"}
        sizes={variant === "full" ? "160px" : "240px"}
      />
    );
  }

  if (variant === "full") {
    return (
      <span className={`flex flex-col items-start gap-3 ${className}`}>
        <BrandLockup className="h-20 w-20" />
        <Wordmark className="text-xl" />
      </span>
    );
  }

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <TongfluenceMark className="h-10 w-10 shrink-0" />
      <Wordmark className="text-lg sm:text-xl" />
    </span>
  );
}
