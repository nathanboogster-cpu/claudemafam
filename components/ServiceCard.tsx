import Link from "next/link";
import type { ReactNode } from "react";

export function ServiceCard({
  title,
  description,
  price,
  href,
  icon,
}: {
  title: string;
  description: string;
  price?: string;
  href: string;
  icon: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
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
