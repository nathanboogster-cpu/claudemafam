const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function DogIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 10c0-2 1.5-4 4-4 1 0 1.7.4 2 1 .3-.6 1-1 2-1 2.5 0 4 2 4 4v3a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5z" />
      <path d="M8 6 6 3M16 6l2-3" />
      <circle cx="10" cy="11" r=".6" fill="currentColor" />
      <circle cx="14" cy="11" r=".6" fill="currentColor" />
      <path d="M10.5 14a2 2 0 0 0 3 0" />
    </svg>
  );
}

export function CatIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M6 9 4 4l4 2.5h8L20 4l-2 5" />
      <path d="M6 9a2 2 0 0 0-2 2v3a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6v-3a2 2 0 0 0-2-2z" />
      <circle cx="10" cy="13" r=".6" fill="currentColor" />
      <circle cx="14" cy="13" r=".6" fill="currentColor" />
      <path d="M9 16h6" />
    </svg>
  );
}

export function TruckIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
