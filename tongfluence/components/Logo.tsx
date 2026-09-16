import Image from "next/image";
import { business } from "@/lib/site-data";
import { getBrandLogo } from "@/lib/brand-logo";
import { TongfluenceMark, BrandLockup, Wordmark } from "./icons";

// The brand lockup.
//
// The real artwork is used automatically as soon as it exists at
// public/images/logo.(png|jpg|svg) — see lib/brand-logo.ts. No flag to set
// and no code change: drop the file in and the next build picks it up, at its
// true intrinsic size so there is no layout shift.
//
// Until then this composes the drawn mark with the two-tone wordmark. The
// wordmark is live text rather than an outline, so it stays crisp at any
// size, is selectable, and is read correctly as the brand name.
export function Logo({
  variant = "compact",
  className = "",
}: {
  // "compact" — mark plus wordmark, for the header and footer.
  // "full" — the complete lockup with swoosh and rising bars, for places
  // with room to show it.
  variant?: "compact" | "full";
  className?: string;
}) {
  const logo = getBrandLogo();

  if (logo) {
    return (
      <Image
        src={logo.src}
        alt={business.name}
        width={logo.width}
        height={logo.height}
        className={variant === "full" ? `h-20 w-auto ${className}` : `h-10 w-auto ${className}`}
        priority={variant === "compact"}
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
