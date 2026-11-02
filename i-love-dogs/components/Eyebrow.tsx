import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand ${className}`}
    >
      {children}
    </p>
  );
}
