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

export function DropletIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
      <path d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5" />
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

export function ShieldCheckIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
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

export function HeartIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 21s-7.5-4.6-10-9.3C.5 8.4 2.3 5 5.8 5c1.9 0 3.4 1 4.2 2.4C10.8 6 12.3 5 14.2 5 17.7 5 19.5 8.4 22 11.7 19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

export function NailIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M9 3c-1.5 2-2 4.5-1 7l1 2.5" />
      <path d="M15 3c1.5 2 2 4.5 1 7l-1 2.5" />
      <path d="M8 13c0-.6.5-1 1-1h6c.5 0 1 .4 1 1 0 3-2 7-4 8-2-1-4-5-4-8z" />
    </svg>
  );
}

export function BrushIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M14 4 8 10" />
      <path d="M17 7l-6 6-3 5 5-3 6-6z" />
      <path d="M4 20l3.5-3.5" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function CalendarCheckIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="m8.5 15 2 2 4.5-4.5" />
    </svg>
  );
}

export function TruckIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 7h11v9H3z" />
      <path d="M14 11h4l3 3v2h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </svg>
  );
}

export function ClockIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}
