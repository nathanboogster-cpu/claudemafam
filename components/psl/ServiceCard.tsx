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
      className="group flex flex-col gap-3 rounded-2xl border border-psl-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md font-psl-sans"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-psl-pink/15 text-psl-pink-dark">
        {icon}
      </div>
      <h3 className="font-psl-display text-lg font-bold text-psl-ink">{title}</h3>
      <p className="text-sm text-psl-ink-soft">{description}</p>
      <span className="mt-1 text-sm font-semibold text-psl-brass-dark group-hover:underline">
        Learn more →
      </span>
    </Link>
  );
}
