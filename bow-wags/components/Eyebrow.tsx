import type { ReactNode } from "react";

const toneClasses = {
  // Default: dark red on light backgrounds (cream, cream-deep, white).
  default: "text-bw-red-dark",
  // For use on dark backgrounds (e.g. the bw-ink CTA sections).
  onDark: "text-bw-red",
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
