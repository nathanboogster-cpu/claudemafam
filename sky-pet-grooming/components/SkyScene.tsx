// Decorative hero illustration (inline SVG, no image request): a sun and
// clouds over a front door, for "grooming delivered to your doorstep". It is
// art, not a photo of the business, so it carries no claims and is hidden
// from screen readers. Swap for real photos once the client supplies them.
export function SkyScene({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 360" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="sky-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bcd9f2" />
          <stop offset="1" stopColor="#eaf3fb" />
        </linearGradient>
      </defs>
      <rect width="480" height="360" rx="28" fill="url(#sky-bg)" />
      <circle cx="356" cy="92" r="46" fill="#f2b632" />
      <circle cx="356" cy="92" r="64" fill="#f2b632" opacity=".18" />
      <path d="M58 118a22 22 0 0 1 6-43 30 30 0 0 1 57 6 19 19 0 0 1 9 37z" fill="#fff" />
      <path d="M262 150a18 18 0 0 1 5-35 25 25 0 0 1 47 5 16 16 0 0 1 7 30z" fill="#fff" opacity=".9" />
      {/* House front and door */}
      <path d="M120 330V214l120-82 120 82v116z" fill="#12406b" />
      <path d="M104 222 240 128l136 94" fill="none" stroke="#0b2c4b" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="208" y="238" width="64" height="92" rx="8" fill="#f9d987" />
      <circle cx="259" cy="288" r="4" fill="#8a5a00" />
      <rect x="146" y="236" width="40" height="38" rx="6" fill="#d6e7f7" />
      <rect x="294" y="236" width="40" height="38" rx="6" fill="#d6e7f7" />
      <rect x="0" y="330" width="480" height="30" fill="#d6e7f7" opacity=".6" />
      {/* Paw prints leading to the door */}
      <g fill="#12406b" opacity=".55">
        <PawPrint x={36} y={354} />
        <PawPrint x={66} y={348} />
        <PawPrint x={96} y={354} />
      </g>
    </svg>
  );
}

function PawPrint({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y - 22})`}>
      <ellipse cx="0" cy="8" rx="7" ry="6" />
      <circle cx="-8" cy="-2" r="3" />
      <circle cx="-3" cy="-7" r="3" />
      <circle cx="3" cy="-7" r="3" />
      <circle cx="8" cy="-2" r="3" />
    </g>
  );
}
