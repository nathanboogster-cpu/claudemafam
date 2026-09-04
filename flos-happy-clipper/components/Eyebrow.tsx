import type { ReactNode } from "react";

const toneClasses = {
  // Default: dark green on light backgrounds (cream, cream-deep, white).
  default: "text-fh-amber-dark",
  // For use on dark backgrounds (e.g. the fh-ink CTA sections).
  onDark: "text-fh-amber",
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
    <p className={`font-fh-sans text-xs font-semibold uppercase tracking-[0.2em] ${toneClasses[tone]} ${className}`}>
      {children}
    </p>
  );
}
