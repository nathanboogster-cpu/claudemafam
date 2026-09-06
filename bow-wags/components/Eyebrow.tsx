import type { ReactNode } from "react";

const toneClasses = {
  // Default: dark marigold on light backgrounds (cream, cream-deep, white).
  default: "text-bw-orange-dark",
  // For use on dark backgrounds (e.g. the bw-ink CTA sections).
  onDark: "text-bw-orange",
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
      className={`font-bw-sans text-xs font-semibold uppercase tracking-[0.2em] ${toneClasses[tone]} ${className}`}
    >
      {children}
    </p>
  );
}
