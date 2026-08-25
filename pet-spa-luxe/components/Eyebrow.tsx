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
      className={`font-psl-sans text-xs font-semibold uppercase tracking-[0.2em] text-psl-brass-dark ${className}`}
    >
      {children}
    </p>
  );
}
