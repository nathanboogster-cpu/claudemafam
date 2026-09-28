export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`tf-caps text-xs text-tf-brown-dark ${className}`}>
      {children}
    </p>
  );
}
