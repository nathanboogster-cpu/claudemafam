// Inline SVG icon set. Every icon is decorative and marked aria-hidden —
// the meaning always lives in adjacent text, never in the icon alone.
// Drawn with currentColor so they inherit the surrounding text colour.

type IconProps = { className?: string };

const base = "shrink-0";

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M6.6 3.5h2.7l1.4 3.5-1.8 1.4a12.5 12.5 0 0 0 5.7 5.7l1.4-1.8 3.5 1.4v2.7a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PawIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`${base} ${className}`}>
      <ellipse cx="12" cy="16.4" rx="4.6" ry="3.7" />
      <ellipse cx="6.5" cy="10.4" rx="2.2" ry="2.8" />
      <ellipse cx="17.5" cy="10.4" rx="2.2" ry="2.8" />
      <ellipse cx="9.6" cy="6.2" rx="1.9" ry="2.5" />
      <ellipse cx="14.4" cy="6.2" rx="1.9" ry="2.5" />
    </svg>
  );
}

export function ScissorsIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <circle cx="6" cy="18" r="2.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="18" r="2.6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7.7 16.1 18.5 4M16.3 16.1 5.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function BrushIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <rect x="4.5" y="3.5" width="11" height="7" rx="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M6.6 10.5v2.2M9 10.5v2.2M11.4 10.5v2.2M13.8 10.5v2.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M15.5 7h2.6a2.4 2.4 0 0 1 2.4 2.4v9.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function DropletIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M12 3.2c3.4 4 5.6 6.9 5.6 9.6a5.6 5.6 0 1 1-11.2 0c0-2.7 2.2-5.6 5.6-9.6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VanIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M2.5 7.5A1.5 1.5 0 0 1 4 6h8.2a1.5 1.5 0 0 1 1.5 1.5V16H2.5V7.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M13.7 9.5h3.4l3.4 3.6V16h-6.8V9.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="7" cy="17.6" r="1.9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="17.6" r="1.9" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function HomeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M3.5 10.4 12 3.8l8.5 6.6V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19v-8.6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9.6 20.5v-6h4.8v6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function HeartIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M12 20.6 4.3 13.2a4.7 4.7 0 0 1 6.7-6.6l1 1 1-1a4.7 4.7 0 1 1 6.7 6.6L12 20.6Z" />
    </svg>
  );
}

export function CatIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M5 9.8 4.2 4.4l4 2.6a9.4 9.4 0 0 1 7.6 0l4-2.6L19 9.8a7.2 7.2 0 0 1 .8 3.3c0 4-3.5 6.9-7.8 6.9s-7.8-2.9-7.8-6.9A7.2 7.2 0 0 1 5 9.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9.4 12.6h.01M14.6 12.6h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function NailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M8.6 20.5V9.2a3.4 3.4 0 0 1 6.8 0v11.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M8.6 13.6h6.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6.2 6.3 8.9 8M17.8 6.3 15.1 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function EarIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M7 9.6a5 5 0 1 1 10 0c0 3.2-3 3.9-3 6.6a2.7 2.7 0 0 1-5.4 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M11 9.6a1.6 1.6 0 0 1 3.2 0c0 1.6-1.6 1.8-1.6 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path d="m4.8 12.4 4.6 4.6 9.8-10.4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <path
        d="M12 21.2c4.2-4.5 6.3-7.8 6.3-10.4a6.3 6.3 0 1 0-12.6 0c0 2.6 2.1 5.9 6.3 10.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="2.3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`${base} ${className}`}>
      <circle cx="12" cy="12" r="8.6" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.2V12l3.2 2.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`${base} ${className}`}>
      <path d="M14.2 21.9v-8.1h2.7l.4-3.2h-3.1V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.2a22 22 0 0 0-2.4-.1c-2.4 0-4 1.4-4 4.1v2.4H8.3v3.2h2.7v8.1h3.2Z" />
    </svg>
  );
}
