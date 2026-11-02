// Placeholder mark (a sun behind a cloud) until the client supplies their
// logo. Swap this, and app/icon.svg, for the real logo file when it arrives.
export function BrandMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`shrink-0 ${className}`} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#12406b" />
      <circle cx="40" cy="25" r="10" fill="#f2b632" />
      <path d="M18 46a8 8 0 0 1 1.6-15.8A11 11 0 0 1 41 32a7 7 0 0 1 4 14z" fill="#ffffff" />
    </svg>
  );
}
