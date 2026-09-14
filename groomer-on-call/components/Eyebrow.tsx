/** Small uppercase kicker above a heading. Purely presentational. */
export function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p
      className={`text-xs font-extrabold uppercase tracking-[0.18em] ${
        onDark ? "text-goc-orange" : "text-goc-magenta-darker"
      }`}
    >
      {children}
    </p>
  );
}
