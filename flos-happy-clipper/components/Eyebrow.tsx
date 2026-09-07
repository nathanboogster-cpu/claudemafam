import type { ReactNode } from "react";

const toneClasses = {
  // Default: pink on light backgrounds (cream, cream-deep, white).
  default: "text-fh-pink-dark bg-fh-pink/12 ring-1 ring-inset ring-fh-pink/25",
  // For use on dark backgrounds (e.g. the fh-ink CTA sections).
  onDark: "text-fh-pink bg-white/10 ring-1 ring-inset ring-white/20",
} as const;

const dotClasses = {
  default: "bg-fh-pink-dark",
  onDark: "bg-fh-pink",
} as const;

export function Eyebrow({
  children,
  tone = "default",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof toneClasses;
  className?: string;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-fh-sans text-xs font-semibold uppercase tracking-[0.15em] ${toneClasses[tone]} ${className}`}
    >
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotClasses[tone]}`} aria-hidden="true" />
      {children}
    </p>
  );
}
