import Link from "next/link";

// Visible breadcrumbs. Paired with BreadcrumbList structured data on every
// page that uses them (see lib/schema.tsx) so the visible trail and the
// markup always agree.
export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-6xl px-4 pt-5 text-sm text-tf-ink-soft">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-tf-border-strong">/</span> : null}
            {i === items.length - 1 ? (
              <span aria-current="page" className="font-medium text-tf-ink">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-tf-brown-dark">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
