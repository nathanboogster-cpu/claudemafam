import Link from "next/link";
import type { ReactNode } from "react";

export function ServiceCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-2xl border border-fh-border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-fh-pink-dark/30 hover:shadow-lg font-fh-sans"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-fh-pink/25 to-fh-blue/25 text-fh-pink-dark transition-transform duration-200 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="font-fh-display text-lg font-bold text-fh-ink">{title}</h3>
      <p className="text-sm text-fh-ink-soft">{description}</p>
      <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-fh-pink-dark">
        Learn more <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
