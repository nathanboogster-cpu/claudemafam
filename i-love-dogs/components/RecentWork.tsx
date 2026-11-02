import Link from "next/link";
import { beforeAfterPhotos, PATHS } from "@/lib/site-data";
import { Eyebrow } from "./Eyebrow";
import { GalleryPhotoCard } from "./GalleryPhotoCard";

// Three before-and-after photos plus a link to the gallery. `offset` rotates
// which photos show, so pages that use this block don't all repeat the same three.
export function RecentWork({ offset = 0, title = "A Look at Our Grooms" }: { offset?: number; title?: string }) {
  const photos = [0, 1, 2].map((i) => beforeAfterPhotos[(i + offset) % beforeAfterPhotos.length]);
  return (
    <section>
      <div className="text-center">
        <Eyebrow>Recent Work</Eyebrow>
        <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {photos.map((p) => (
          <GalleryPhotoCard key={p.src} photo={p} label="Before & After" sizes="(max-width: 640px) 100vw, 33vw" />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href={PATHS.gallery} className="inline-flex min-h-[44px] items-center font-semibold text-brand hover:underline">
          See the full gallery →
        </Link>
      </div>
    </section>
  );
}
