import Image from "next/image";
import { business } from "@/lib/site-data";
import { TongfluenceMark, Wordmark } from "./icons";

// The brand lockup. Uses the real logo artwork when `business.logo` points at
// a file that exists in public/, and otherwise renders the drawn mark next to
// the two-tone wordmark — which matches the logo's construction closely
// enough to stand in, and never 404s.
//
// Both paths produce the same accessible name, so swapping one for the other
// changes nothing for a screen reader.
export function Logo({
  size = "header",
  className = "",
}: {
  size?: "header" | "footer";
  className?: string;
}) {
  const wordmarkSize = size === "header" ? "text-lg sm:text-xl" : "text-lg";
  const markSize = size === "header" ? "h-9 w-9" : "h-8 w-8";

  if (business.logo && business.logoWidth && business.logoHeight) {
    return (
      <Image
        src={business.logo}
        alt={business.name}
        width={business.logoWidth}
        height={business.logoHeight}
        className={`h-9 w-auto ${className}`}
        priority={size === "header"}
      />
    );
  }

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <TongfluenceMark className={markSize} />
      {/* The wordmark is live text, so it is already the accessible name —
          no sr-only duplicate, which would read the brand twice. */}
      <Wordmark className={wordmarkSize} />
    </span>
  );
}
