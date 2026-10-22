// Placeholder mark (a plain heart) until the client supplies their logo.
// Swap this for the real logo file when it arrives.
export function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`shrink-0 ${className}`} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#1f4d3a" />
      <path
        d="M32 50S12 38 12 24.5C12 18 17 13 23 13c4 0 7 2.2 9 5.4C34 15.2 37 13 41 13c6 0 11 5 11 11.5C52 38 32 50 32 50z"
        fill="#d9822b"
      />
    </svg>
  );
}
