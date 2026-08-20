import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.15em] text-terracotta-dark ${className}`}>
      {children}
    </p>
  );
}
