import Link from "next/link";

/**
 * Visible breadcrumb trail. Matched by a BreadcrumbList JSON-LD block on
 * every page that renders this (see lib/schema.tsx) — the visible trail and
 * the structured data are always built from the same array.
 */
export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-goc-border bg-goc-cream-deep/50">
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-3 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="font-semibold text-goc-ink">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.href} className="inline-block py-1 text-goc-ink-soft underline-offset-4 hover:text-goc-magenta-darker hover:underline">
                    {item.name}
                  </Link>
                  <span aria-hidden="true" className="text-goc-ink-soft/50">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
