import type { ReactNode } from "react";

const toneClasses = {
  // Default: dark gold on light backgrounds (cream, cream-deep, white).
  default: "text-psl-brass-dark",
  // For use on dark backgrounds (e.g. the psl-ink CTA sections).
  onDark: "text-psl-brass",
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
      className={`font-psl-sans text-xs font-semibold uppercase tracking-[0.2em] ${toneClasses[tone]} ${className}`}
    >
      {children}
    </p>
  );
}
