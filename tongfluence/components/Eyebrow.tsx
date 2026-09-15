export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.14em] text-tf-green-dark ${className}`}>
      {children}
    </p>
  );
}
