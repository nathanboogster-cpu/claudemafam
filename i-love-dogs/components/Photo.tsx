import Image from "next/image";
import type { Photo as PhotoData } from "@/lib/site-data";

// A real client photo in an aspect-locked frame (no layout shift), served by
// next/image as responsive WebP/AVIF. Optional caption renders as figcaption.
export function Photo({
  photo,
  aspect = "portrait",
  caption,
  preload = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  position = "center",
}: {
  photo: PhotoData;
  aspect?: "square" | "portrait" | "tall";
  caption?: string;
  preload?: boolean;
  sizes?: string;
  className?: string;
  position?: "center" | "top";
}) {
  const aspectClass = { square: "aspect-square", portrait: "aspect-[4/5]", tall: "aspect-[3/4]" }[aspect];
  return (
    <figure className={className}>
      <div className={`${aspectClass} relative overflow-hidden rounded-2xl border border-border bg-cream-deep`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          preload={preload}
          sizes={sizes}
          className={`object-cover ${position === "top" ? "object-top" : "object-center"}`}
        />
      </div>
      {caption ? <figcaption className="mt-2 text-sm text-ink-soft">{caption}</figcaption> : null}
    </figure>
  );
}
