import type { ReactNode } from "react";

const toneClasses = {
  // Default: coral on light backgrounds (cream, cream-deep, white).
  default: "text-bb-coral-dark",
  // For use on dark backgrounds (e.g. the bb-ink CTA sections).
  onDark: "text-bb-coral",
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
    <p className={`font-bb-sans text-xs font-semibold uppercase tracking-[0.2em] ${toneClasses[tone]} ${className}`}>
      {children}
    </p>
  );
}
