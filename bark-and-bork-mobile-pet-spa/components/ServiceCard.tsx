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
      className="group flex flex-col gap-3 rounded-2xl border border-bb-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md font-bb-sans"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bb-coral/15 text-bb-coral-dark">
        {icon}
      </div>
      <h3 className="font-bb-display text-lg font-bold text-bb-ink">{title}</h3>
      <p className="text-sm text-bb-ink-soft">{description}</p>
      <span className="mt-1 text-sm font-semibold text-bb-coral-dark group-hover:underline">Learn more →</span>
    </Link>
  );
}
