export function PawIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" className={className} aria-hidden="true">
      <ellipse cx="32" cy="42" rx="16" ry="13" />
      <ellipse cx="12" cy="24" rx="7" ry="9" />
      <ellipse cx="52" cy="24" rx="7" ry="9" />
      <ellipse cx="24" cy="12" rx="6" ry="8" />
      <ellipse cx="40" cy="12" rx="6" ry="8" />
    </svg>
  );
}
