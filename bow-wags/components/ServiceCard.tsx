import Link from "next/link";
import type { ReactNode } from "react";

export function ServiceCard({
  title,
  description,
  href,
  icon,
  cta = "Learn more",
}: {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  cta?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-2xl border border-bw-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md font-bw-sans"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bw-orange/15 text-bw-orange-dark">
        {icon}
      </div>
      <h3 className="font-bw-display text-lg font-bold text-bw-ink">{title}</h3>
      <p className="text-sm text-bw-ink-soft">{description}</p>
      <span className="mt-1 text-sm font-semibold text-bw-orange-dark group-hover:underline">{cta} →</span>
    </Link>
  );
}
