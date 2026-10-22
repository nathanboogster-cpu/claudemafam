import Image from "next/image";
import type { Photo } from "@/lib/site-data";

// A gallery tile with a short label over the bottom of the photo. Labels use
// only what is true of every photo in the set ("Before & After", "Groomed
// at I Love Dogs").
export function GalleryPhotoCard({
  photo,
  label,
  aspect = "square",
  sizes = "(max-width: 640px) 50vw, 33vw",
}: {
  photo: Photo;
  label: string;
  aspect?: "square" | "portrait";
  sizes?: string;
}) {
  const aspectClass = { square: "aspect-square", portrait: "aspect-[3/4]" }[aspect];
  return (
    <figure className={`${aspectClass} relative overflow-hidden rounded-2xl border border-border bg-cream-deep`}>
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-3 pt-8 text-sm font-bold text-white">
        {label}
      </figcaption>
    </figure>
  );
}
