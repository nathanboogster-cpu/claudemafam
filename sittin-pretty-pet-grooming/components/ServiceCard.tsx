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
      className="group flex flex-col gap-3 rounded-2xl border border-sp-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md font-sp-sans"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sp-purple/15 text-sp-purple-dark">
        {icon}
      </div>
      <h3 className="font-sp-display text-lg font-bold text-sp-ink">{title}</h3>
      <p className="text-sm text-sp-ink-soft">{description}</p>
      <span className="mt-1 text-sm font-semibold text-sp-purple-dark group-hover:underline">Learn more →</span>
    </Link>
  );
}
