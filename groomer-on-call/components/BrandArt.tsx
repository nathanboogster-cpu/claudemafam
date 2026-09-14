// ---------------------------------------------------------------------------
// Original brand illustration, drawn inline as SVG in the Groomer On Call
// palette.
//
// WHY THIS EXISTS: no client photography has been supplied for this build.
// The two bad options would be (a) stock photos of somebody else's dogs
// presented as this groomer's work, or (b) grey placeholder boxes on a live
// site. Neither ships. These are honestly decorative brand illustrations —
// they never claim to show a real groom, and the site links to the business's
// real Facebook page for actual grooming results.
//
// WHEN REAL PHOTOS ARRIVE: replace a <BrandArt /> with a next/image, keep the
// same aspect ratio, and write literal alt text describing the real photo.
// Every usage is intentionally a single self-contained element to make that
// a one-line swap.
//
// All of these are aria-hidden with no text alternative, because they carry
// no information that isn't already in the adjacent copy.
// ---------------------------------------------------------------------------

type Scene = "route" | "bath" | "cat" | "tools";

const aspects = {
  wide: "aspect-[16/10]",
  square: "aspect-square",
  tall: "aspect-[4/5]",
} as const;

export function BrandArt({
  scene,
  aspect = "wide",
  className = "",
}: {
  scene: Scene;
  aspect?: keyof typeof aspects;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`goc-paw-pattern relative overflow-hidden rounded-3xl bg-goc-cream-deep ring-1 ring-goc-border ${aspects[aspect]} ${className}`}
    >
      <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        {scene === "route" ? <RouteScene /> : null}
        {scene === "bath" ? <BathScene /> : null}
        {scene === "cat" ? <CatScene /> : null}
        {scene === "tools" ? <ToolsScene /> : null}
      </svg>
    </div>
  );
}

/* A groomer's van travelling a dashed route to a customer's house. */
function RouteScene() {
  return (
    <g>
      <circle cx="330" cy="60" r="70" fill="#ec008c" opacity="0.12" />
      <circle cx="70" cy="200" r="80" fill="#fb8b24" opacity="0.14" />

      {/* Road */}
      <path d="M0 196h400" stroke="#171215" strokeWidth="2" opacity="0.12" />
      <path d="M10 196h30M60 196h30M110 196h30M160 196h30M210 196h30M260 196h30M310 196h30M360 196h30" stroke="#fb8b24" strokeWidth="3" strokeLinecap="round" />

      {/* Destination house */}
      <g transform="translate(292 108)">
        <path d="M0 34 34 6l34 28v46a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V34Z" fill="#ffffff" stroke="#171215" strokeWidth="3.2" strokeLinejoin="round" />
        <path d="M25 86V60h18v26" fill="#c0006f" stroke="#171215" strokeWidth="3.2" strokeLinejoin="round" />
        <path d="M-6 36 34 2l40 34" stroke="#c0006f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Grooming van */}
      <g transform="translate(46 116)">
        <rect x="0" y="8" width="104" height="58" rx="10" fill="#c0006f" stroke="#171215" strokeWidth="3.4" />
        <path d="M104 28h26l24 26v12a6 6 0 0 1-6 6h-44V28Z" fill="#fb8b24" stroke="#171215" strokeWidth="3.4" strokeLinejoin="round" />
        <rect x="110" y="34" width="22" height="16" rx="3" fill="#ffe9d8" stroke="#171215" strokeWidth="2.6" />
        <circle cx="34" cy="74" r="13" fill="#171215" />
        <circle cx="34" cy="74" r="5" fill="#ffe9d8" />
        <circle cx="122" cy="74" r="13" fill="#171215" />
        <circle cx="122" cy="74" r="5" fill="#ffe9d8" />
        {/* Heart badge on the side of the van — the brand motif. */}
        <path d="M52 46 38 33a9 9 0 0 1 13-12.4l1 1 1-1A9 9 0 0 1 66 33L52 46Z" fill="#ffffff" />
      </g>
    </g>
  );
}

/* A dog mid-bath, surrounded by suds. */
function BathScene() {
  return (
    <g>
      <circle cx="80" cy="56" r="66" fill="#ec008c" opacity="0.12" />
      <circle cx="330" cy="190" r="76" fill="#fb8b24" opacity="0.14" />

      {/* Suds */}
      <g fill="#ffffff" stroke="#171215" strokeWidth="2.6">
        <circle cx="96" cy="58" r="13" />
        <circle cx="128" cy="42" r="9" />
        <circle cx="286" cy="52" r="11" />
        <circle cx="312" cy="76" r="7" />
      </g>

      {/* Tub */}
      <path d="M84 152h232l-14 74a12 12 0 0 1-12 10H110a12 12 0 0 1-12-10L84 152Z" fill="#ffffff" stroke="#171215" strokeWidth="3.6" strokeLinejoin="round" />
      <rect x="72" y="138" width="256" height="20" rx="10" fill="#c0006f" stroke="#171215" strokeWidth="3.6" />

      {/* Dog */}
      <g transform="translate(152 44)">
        <ellipse cx="48" cy="74" rx="46" ry="42" fill="#ffe9d8" stroke="#171215" strokeWidth="3.6" />
        <path d="M8 44C0 22 6 8 18 12c8 3 12 14 13 24" fill="#ffe9d8" stroke="#171215" strokeWidth="3.6" strokeLinejoin="round" />
        <path d="M88 44c8-22 2-36-10-32-8 3-12 14-13 24" fill="#ffe9d8" stroke="#171215" strokeWidth="3.6" strokeLinejoin="round" />
        <circle cx="33" cy="68" r="4.6" fill="#171215" />
        <circle cx="63" cy="68" r="4.6" fill="#171215" />
        <ellipse cx="48" cy="84" rx="8" ry="6" fill="#171215" />
        <path d="M48 90v6M40 100a8 8 0 0 0 16 0" stroke="#171215" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      </g>

      {/* Shower head + water */}
      <g transform="translate(300 12)">
        <rect x="0" y="0" width="46" height="18" rx="9" fill="#171215" transform="rotate(24 23 9)" />
        <path d="M6 30v22M18 34v22M30 38v22" stroke="#ec008c" strokeWidth="4" strokeLinecap="round" />
      </g>
    </g>
  );
}

/* A seated cat, for the cat bathing service. Drawn back-to-front — tail,
   body, paws, then head — so the head overlaps the body cleanly. */
function CatScene() {
  return (
    <g>
      <circle cx="322" cy="66" r="68" fill="#ec008c" opacity="0.12" />
      <circle cx="70" cy="196" r="66" fill="#fb8b24" opacity="0.14" />

      <g transform="translate(128 26)">
        {/* Tail: a dark stroke with a lighter stroke drawn over it, so the
            tail reads as an outlined shape without needing a closed path. */}
        <path d="M100 178c30 4 44-16 40-40" fill="none" stroke="#171215" strokeWidth="15" strokeLinecap="round" />
        <path d="M100 178c30 4 44-16 40-40" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" />

        {/* Body */}
        <path
          d="M56 96c-34 0-50 42-46 82 1 10 9 14 19 14h54c10 0 18-4 19-14 4-40-12-82-46-82Z"
          fill="#ffffff"
          stroke="#171215"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <ellipse cx="36" cy="184" rx="13" ry="8" fill="#ffe9d8" stroke="#171215" strokeWidth="4" />
        <ellipse cx="76" cy="184" rx="13" ry="8" fill="#ffe9d8" stroke="#171215" strokeWidth="4" />

        {/* Head */}
        <path
          d="M12 52 6 8l26 18a58 58 0 0 1 44 0L102 8l-6 44a44 44 0 0 1 6 22c0 24-22 42-48 42S6 98 6 74a44 44 0 0 1 6-22Z"
          fill="#ffffff"
          stroke="#171215"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <ellipse cx="36" cy="72" rx="5" ry="6.5" fill="#171215" />
        <ellipse cx="72" cy="72" rx="5" ry="6.5" fill="#171215" />
        <path d="M54 86 47 94h14l-7-8Z" fill="#c0006f" stroke="#171215" strokeWidth="3" strokeLinejoin="round" />
        <path d="M54 94v6M44 106a10 10 0 0 0 20 0" stroke="#171215" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M28 90 4 84M28 98 6 100M80 90l24-6M80 98l22 2" stroke="#171215" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Suds */}
      <g fill="#ffffff" stroke="#171215" strokeWidth="3">
        <circle cx="70" cy="64" r="13" />
        <circle cx="100" cy="44" r="8" />
        <circle cx="332" cy="170" r="10" />
      </g>
    </g>
  );
}

/* The brand's tool motifs: scissors, brush and heart.
   Every shape is placed with explicit margins inside the 400x250 viewBox, so
   nothing clips at the panel edge under `preserveAspectRatio="slice"`. */
function ToolsScene() {
  return (
    <g>
      <circle cx="200" cy="120" r="96" fill="#ec008c" opacity="0.1" />
      <circle cx="344" cy="40" r="50" fill="#fb8b24" opacity="0.16" />

      {/* Scissors */}
      <g transform="translate(56 46)">
        <path d="M34 126 82 14" stroke="#c0006f" strokeWidth="9" strokeLinecap="round" />
        <path d="M66 126 18 14" stroke="#c0006f" strokeWidth="9" strokeLinecap="round" />
        <circle cx="24" cy="138" r="15" fill="none" stroke="#171215" strokeWidth="7" />
        <circle cx="76" cy="138" r="15" fill="none" stroke="#171215" strokeWidth="7" />
        <circle cx="50" cy="88" r="6" fill="#171215" />
      </g>

      {/* Brush */}
      <g transform="translate(236 50)">
        <path d="M92 20h10a14 14 0 0 1 14 14v74" fill="none" stroke="#171215" strokeWidth="6" strokeLinecap="round" />
        <path d="M16 44v24M35 44v24M54 44v24M73 44v24" stroke="#171215" strokeWidth="6" strokeLinecap="round" />
        <rect x="0" y="0" width="92" height="48" rx="24" fill="#fb8b24" stroke="#171215" strokeWidth="6" />
      </g>

      {/* Heart */}
      <g transform="translate(162 148) scale(3.2)">
        <path
          d="M12 20.6 4.3 13.2a4.7 4.7 0 0 1 6.7-6.6l1 1 1-1a4.7 4.7 0 1 1 6.7 6.6L12 20.6Z"
          fill="#c0006f"
          stroke="#171215"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
    </g>
  );
}
