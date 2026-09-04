import Link from "next/link";

export function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-4 text-sm text-fh-ink-soft font-fh-sans">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className="font-medium text-fh-ink">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-fh-amber-dark">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
