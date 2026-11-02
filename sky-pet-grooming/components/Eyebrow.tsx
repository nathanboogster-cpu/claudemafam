import type { ReactNode } from "react";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-display text-sm font-extrabold uppercase tracking-[0.18em] text-accent-dark ${className}`}>
      {children}
    </p>
  );
}
