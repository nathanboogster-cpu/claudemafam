import type { Photo } from "@/lib/photos";
import { Pic } from "./Pic";

// Photo grid. By default a masonry layout (CSS columns) that keeps every
// photo's own shape, for the gallery; `square` crops to an even grid, for
// short strips. Each photo links to its full-size file.
export function PhotoGrid({
  items,
  square = false,
  className = "",
}: {
  items: readonly Photo[];
  square?: boolean;
  className?: string;
}) {
  const link = "block overflow-hidden rounded-2xl border border-border bg-sky-deep transition hover:shadow-lg";
  if (square) {
    return (
      <ul className={`grid grid-cols-2 gap-3 sm:grid-cols-4 ${className}`}>
        {items.map((p) => (
          <li key={p.slug}>
            <a href={`/photos/${p.slug}.webp`} target="_blank" rel="noopener" className={`${link} relative aspect-square`} aria-label={`${p.alt} (full size)`}>
              <Pic slug={p.slug} fill sizes="(min-width: 640px) 280px, 50vw" className="object-cover" />
            </a>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className={`columns-2 gap-3 sm:columns-3 lg:columns-4 ${className}`}>
      {items.map((p) => (
        <li key={p.slug} className="mb-3 break-inside-avoid">
          <a href={`/photos/${p.slug}.webp`} target="_blank" rel="noopener" className={link} aria-label={`${p.alt} (full size)`}>
            <Pic slug={p.slug} sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw" className="h-auto w-full" />
          </a>
        </li>
      ))}
    </ul>
  );
}
