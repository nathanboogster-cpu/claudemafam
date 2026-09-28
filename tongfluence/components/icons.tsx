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

// ---------------------------------------------------------------------------
// BRAND ARTWORK
//
// These are vector reproductions of the Tongfluence logo, drawn from the
// supplied artwork: the brown arc, the two-tone TF monogram, the paw print,
// the rising bars and the swoosh beneath.
//
// They are a stand-in, not the asset. As soon as the real artwork exists at
// public/images/logo.(png|jpg|svg), lib/brand-logo.ts detects it and
// components/Logo.tsx uses it instead — none of this renders.
//
// Two sizes exist because the logo does not survive being scaled down
// uniformly — at header size the arc, bars and swoosh collide into a smudge.
// TongfluenceMark is the compact variant (arc, monogram, paw); BrandLockup is
// the full one, used where there is room for it.
// ---------------------------------------------------------------------------

// Compact variant — arc, TF monogram, paw. Used in the header.
export function TongfluenceMark({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Brown arc, open to the lower right, as in the logo */}
      <path
        d="M38 13.5A17.5 17.5 0 1 0 41.2 25"
        stroke="var(--color-tf-brown)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* TF monogram, split across the two brand colours */}
      <path d="M11.5 15.5h13.2v4.1h-4.4v14.9h-4.4V19.6h-4.4v-4.1z" fill="var(--color-tf-ink)" />
      <path
        d="M25.6 15.5h10.6v4.1h-6.2v3.5h5.5v4h-5.5v7.4h-4.4V15.5z"
        fill="var(--color-tf-brown-dark)"
      />
      {/* Paw, upper right */}
      <g fill="var(--color-tf-brown-dark)">
        <ellipse cx="35.6" cy="8.6" rx="1.8" ry="2.3" />
        <ellipse cx="40.1" cy="7.6" rx="1.6" ry="2.1" />
        <ellipse cx="43.4" cy="10.6" rx="1.4" ry="1.8" />
        <path d="M37.7 12.6c2.2 0 3.9 1.3 3.9 2.7s-1.7 2-3.9 2-3.9-.6-3.9-2 1.7-2.7 3.9-2.7z" />
      </g>
    </svg>
  );
}

// Full lockup — the complete mark with the swoosh and the rising bars,
// for places with room to show it: the footer, and the booking page.
export function BrandLockup({ className = "h-16 w-16" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 96 96" fill="none" aria-hidden="true">
      <path
        d="M74 24A34 34 0 1 0 81 48"
        stroke="var(--color-tf-brown)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Swoosh sweeping up through the monogram */}
      <path
        d="M12 74C33 80 57 72 80 44"
        stroke="var(--color-tf-ink)"
        strokeWidth="4.6"
        strokeLinecap="round"
      />
      <path d="M22 28h27v8.6h-9v31.6h-9V36.6h-9V28z" fill="var(--color-tf-ink)" />
      <path d="M51 28h22v8.6H60v7.2h11.4v8.4H60v16h-9V28z" fill="var(--color-tf-brown-dark)" />
      <g fill="var(--color-tf-brown-dark)">
        <ellipse cx="70.8" cy="15" rx="3.4" ry="4.3" />
        <ellipse cx="79.6" cy="13" rx="3" ry="3.9" />
        <ellipse cx="86.6" cy="19" rx="2.6" ry="3.4" />
        <path d="M74.7 23.2c4.3 0 7.6 2.5 7.6 5.3s-3.3 3.8-7.6 3.8-7.6-1-7.6-3.8 3.3-5.3 7.6-5.3z" />
      </g>
      {/* Rising bars, lower right */}
      <g fill="var(--color-tf-brown)">
        <rect x="66" y="80" width="6.4" height="8" rx="1.4" />
        <rect x="76" y="74" width="6.4" height="14" rx="1.4" />
        <rect x="86" y="67" width="6.4" height="21" rx="1.4" />
      </g>
      {/* Baseline rule the logo sits on */}
      <path d="M8 88h48" stroke="var(--color-tf-brown)" strokeWidth="2.4" strokeLinecap="round" />
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
