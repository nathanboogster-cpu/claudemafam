type IconProps = { className?: string };

// Inline, currentColor SVGs. No icon library dependency — the whole set is a
// few hundred bytes and ships in the server-rendered HTML, so it costs no
// JavaScript and never causes a layout shift.
const base = "h-5 w-5";

export function ArrowRightIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CrossIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5.5 5.5l9 9M14.5 5.5l-9 9" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="9" cy="9" r="5.5" />
      <path d="M13.2 13.2L17 17" strokeLinecap="round" />
    </svg>
  );
}

export function MapPinIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M10 17.5s5.5-5 5.5-9a5.5 5.5 0 10-11 0c0 4 5.5 9 5.5 9z" strokeLinejoin="round" />
      <circle cx="10" cy="8.5" r="2" />
    </svg>
  );
}

export function StarIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M10 2.5l2.3 4.8 5.2.7-3.8 3.7.9 5.2-4.6-2.5-4.6 2.5.9-5.2L2.5 8l5.2-.7L10 2.5z" strokeLinejoin="round" />
    </svg>
  );
}

export function GlobeIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" />
      <path d="M2.5 10h15M10 2.5c2 2.4 3 4.9 3 7.5s-1 5.1-3 7.5c-2-2.4-3-4.9-3-7.5s1-5.1 3-7.5z" />
    </svg>
  );
}

export function ChartIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 17h14" strokeLinecap="round" />
      <path d="M5.5 17v-5M10 17V5M14.5 17v-8" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path
        d="M6.2 3.5L8 7l-1.6 1.6a10 10 0 004 4L12 11l3.5 1.8v3a1 1 0 01-1.1 1A13 13 0 013 5.6a1 1 0 011-1.1h2.2z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScissorsIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="5" cy="15" r="2.2" />
      <circle cx="15" cy="15" r="2.2" />
      <path d="M6.6 13.4L15 3M13.4 13.4L5 3" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// The Tongfluence mark — the small-size variant of the brand logo.
//
// The full logo lockup (TF monogram inside an arc, paw print, rising bars and
// a swoosh) carries far too much detail to survive at 36px in a header: the
// strokes collide and it renders as a dark smudge. This is the reduction that
// keeps what identifies the brand at a glance — the ink badge, the TF split
// across the brand's two colours, and the paw — and drops the rest.
//
// The real logo artwork is used instead wherever `business.logo` in
// lib/site-data.ts points at a file (see components/Logo.tsx); this is the
// fallback until that file is in the repo, and what the favicon is built from.
export function TongfluenceMark({ className = "h-9 w-9" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="var(--color-tf-ink)" />
      {/* TF monogram, split across the two brand colours as the wordmark is */}
      <path d="M7.5 12.5h11v3.4h-3.6v12.1h-3.8V15.9H7.5v-3.4z" fill="var(--color-tf-paper)" />
      <path
        d="M19.8 12.5h8.9v3.4h-5.1v2.9h4.6v3.3h-4.6v5.9h-3.8V12.5z"
        fill="var(--color-tf-bronze-light)"
      />
      {/* Paw, upper right — the one figurative element small enough to survive */}
      <g fill="var(--color-tf-bronze-light)" opacity="0.9">
        <circle cx="30.4" cy="8.6" r="1.5" />
        <circle cx="34.3" cy="7.6" r="1.3" />
        <circle cx="36.6" cy="10.4" r="1.1" />
        <path d="M32.3 12c1.8 0 3.2 1.1 3.2 2.3s-1.4 1.6-3.2 1.6-3.2-.4-3.2-1.6 1.4-2.3 3.2-2.3z" />
      </g>
    </svg>
  );
}

// The two-tone wordmark: "TONG" in the ink half, "FLUENCE" in brown, as the
// logo sets it. Rendered as live text rather than an image so it scales,
// stays selectable, and is read correctly by screen readers.
export function Wordmark({ className = "text-lg" }: IconProps) {
  return (
    <span className={`font-tf-display font-extrabold tracking-tight ${className}`}>
      <span className="text-tf-ink">TONG</span>
      <span className="text-tf-brown-dark">FLUENCE</span>
    </span>
  );
}

export function PawIcon({ className = base }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <ellipse cx="6.2" cy="6.4" rx="1.9" ry="2.4" />
      <ellipse cx="11" cy="5.2" rx="1.8" ry="2.3" />
      <ellipse cx="15.2" cy="7.8" rx="1.6" ry="2.1" />
      <path d="M10.2 10.2c3 0 5.2 2 5.2 4.2s-2.2 3.1-5.2 3.1S5 16.6 5 14.4s2.2-4.2 5.2-4.2z" />
    </svg>
  );
}
