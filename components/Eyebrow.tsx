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
      className={`font-mono text-xs font-medium uppercase tracking-[0.2em] text-terracotta-dark ${className}`}
    >
      {children}
    </p>
  );
}
