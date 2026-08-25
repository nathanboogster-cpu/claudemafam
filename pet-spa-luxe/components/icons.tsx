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

export function HeartIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 21s-7.5-4.6-10-9.3C.5 8.4 2.3 5 5.8 5c1.9 0 3.4 1 4.2 2.4C10.8 6 12.3 5 14.2 5 17.7 5 19.5 8.4 22 11.7 19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

export function PinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.3" />
    </svg>
  );
}

export function PuppyIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 11c0-1.7 1.3-3 3-3 .8 0 1.3.3 1.5.7.3-.4.9-.7 1.5-.7 1.7 0 3 1.3 3 3v2a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4z" />
      <path d="M8.5 8 7 5.5M13.5 8l1.5-2.5" />
      <circle cx="9.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="12.5" cy="10.5" r=".5" fill="currentColor" />
    </svg>
  );
}
