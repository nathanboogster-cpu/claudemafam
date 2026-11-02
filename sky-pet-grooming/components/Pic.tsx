import Image from "next/image";
import { photo } from "@/lib/photos";

// An owner photo by slug (see lib/photos.ts), served by next/image so each
// screen gets a right-sized AVIF/WebP. `fill` crops it into a sized parent;
// otherwise it keeps its own aspect ratio.
export function Pic({
  slug,
  sizes,
  fill = false,
  hero = false,
  className = "",
}: {
  slug: string;
  sizes: string;
  fill?: boolean;
  hero?: boolean;
  className?: string;
}) {
  const p = photo(slug);
  const common = {
    src: `/photos/${p.slug}.webp`,
    alt: p.alt,
    sizes,
    className,
    // The hero photo is the likely LCP element: fetch it first, never lazily.
    ...(hero ? { loading: "eager" as const, fetchPriority: "high" as const } : {}),
  };
  return fill ? <Image {...common} alt={p.alt} fill /> : <Image {...common} alt={p.alt} width={p.w} height={p.h} />;
}
