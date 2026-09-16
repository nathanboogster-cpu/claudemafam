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

// The Tongfluence mark: a search-result underline crossed by a grooming comb.
// Drawn rather than shipped as an image so it is crisp at every size, costs
// one request fewer, and can inherit currentColor in the footer.
export function TongfluenceMark({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M9 12.5h14M9 16.5h10"
        stroke="var(--color-tf-paper)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M11 20.5v3M14.5 20.5v3M18 20.5v3M21.5 20.5v3"
        stroke="var(--color-tf-paper)"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}
