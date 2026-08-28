import Link from "next/link";
import type { ReactNode } from "react";

export function ServiceCard({
  title,
  description,
  price,
  href,
  icon,
  badge,
}: {
  title: string;
  description: string;
  price?: string;
  href: string;
  icon: ReactNode;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      {badge && (
        <span className="absolute -top-2.5 right-4 rounded-full bg-gold px-2.5 py-1 text-xs font-semibold text-ink shadow-sm">
          {badge}
        </span>
      )}
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-terracotta-light/30 text-terracotta-dark">
        {icon}
      </div>
      <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
      <p className="text-sm text-ink-soft">{description}</p>
      {price && <p className="font-mono text-sm font-semibold text-sage-dark">{price}</p>}
      <span className="mt-1 text-sm font-semibold text-terracotta-dark group-hover:underline">
        Learn more →
      </span>
    </Link>
  );
}
