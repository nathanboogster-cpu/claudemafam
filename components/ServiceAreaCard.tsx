import Link from "next/link";

export function ServiceAreaCard({
  city,
  href,
}: {
  city: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-2 rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-terracotta-dark">
          Mobile Grooming
        </p>
        <p className="font-display text-lg font-bold text-ink">{city}, CA</p>
      </div>
      <span className="text-terracotta-dark transition-transform group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
