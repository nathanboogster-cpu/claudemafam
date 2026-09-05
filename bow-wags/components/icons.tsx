const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
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

export function PinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.3" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85z" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function SunIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function MoonIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

export function ScissorsIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8.5 8 20 19M20 5 8.5 16" />
    </svg>
  );
}

export function HouseIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

export function ClipboardIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 11h6M9 15h6" />
    </svg>
  );
}

export function CalendarCallIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M9 15.2c0-1 1.3-1.8 3-1.8s3 .8 3 1.8-1.3 1.8-3 1.8-3-.8-3-1.8z" />
    </svg>
  );
}

export function SyringeIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M18 2l4 4M11 9l4-4 4 4-4 4M6 14l5-5M3 21l3-3M3 21l1.5-4.5L9 12l3 3-4.5 4.5z" />
    </svg>
  );
}

export function TreesIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3l4 6h-2l3 5h-3l2 4H8l2-4H7l3-5H8z" />
      <path d="M12 18v3" />
    </svg>
  );
}

export function BowlIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 12h18a8 6 0 0 1-8 6h-2a8 6 0 0 1-8-6z" />
      <path d="M12 12V8" />
      <path d="M9 6a3 3 0 0 1 6 0" />
    </svg>
  );
}
