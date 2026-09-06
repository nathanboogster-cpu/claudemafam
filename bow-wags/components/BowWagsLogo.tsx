// Recreated from the client-provided Bow Wags logo (red background, white
// bone containing "BOW WAGS" in bold rounded lettering, black paw print,
// "BOARDING • DOGGY DAYCARE • GROOMING" wordmark). No source vector/raster
// file was available to embed directly, so this is a faithful SVG
// recreation — swap in the real logo file here once supplied by the client.
//
// The bone shape is built as two layers of identical circle+bar geometry:
// a black layer padded outward (the "outline") and a white layer at true
// size on top, which avoids visible seams where the rounded lobes meet the
// connecting bar.

function BoneShape({
  outline,
  fill,
}: {
  outline?: boolean;
  fill: string;
}) {
  const pad = outline ? 9 : 0;
  return (
    <>
      <circle cx={40} cy={50} r={34 + pad} fill={fill} />
      <circle cx={40} cy={150} r={34 + pad} fill={fill} />
      <circle cx={360} cy={50} r={34 + pad} fill={fill} />
      <circle cx={360} cy={150} r={34 + pad} fill={fill} />
      <rect x={40} y={70 - pad} width={320} height={60 + pad * 2} fill={fill} />
    </>
  );
}

function PawMark({ className = "", transform }: { className?: string; transform?: string }) {
  return (
    <g className={className} transform={transform}>
      <ellipse cx={0} cy={26} rx={17} ry={14} />
      <ellipse cx={-24} cy={4} rx={9} ry={11.5} />
      <ellipse cx={24} cy={4} rx={9} ry={11.5} />
      <ellipse cx={-9} cy={-16} rx={7.5} ry={9.5} />
      <ellipse cx={9} cy={-16} rx={7.5} ry={9.5} />
    </g>
  );
}

// Compact icon-only mark — bone + paw, no wordmark (illegible at small
// sizes). Transparent background: drop it into an existing colored badge
// (see Header.tsx / Footer.tsx, which wrap it in a bg-bw-red circle).
export function BowWagsMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={className} aria-hidden="true">
      <BoneShape outline fill="#000" />
      <BoneShape fill="#fff" />
      <PawMark className="fill-black" transform="translate(300,44) rotate(-18) scale(0.85)" />
    </svg>
  );
}

// Full logo lockup — red card, bone + "BOW WAGS" wordmark, paw print, and
// the three-service tagline. Used for larger, standalone brand placements
// (hero, About, the "Welcome to Wagsville" section) rather than the header.
export function BowWagsLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 460" className={className} role="img" aria-label="Bow Wags — Boarding, Doggy Daycare, Grooming">
      <rect x={0} y={0} width={400} height={460} rx={36} fill="#E4231F" />

      <g transform="translate(0,60)">
        <BoneShape outline fill="#000" />
        <BoneShape fill="#fff" />
        <text
          x={200}
          y={112}
          textAnchor="middle"
          fontSize={54}
          fontWeight={700}
          fill="#000"
          style={{ fontFamily: "var(--font-bw-display, sans-serif)" }}
        >
          BOW WAGS
        </text>
        <PawMark className="fill-black" transform="translate(300,-6) rotate(-18) scale(1.15)" />
      </g>

      <g fill="#000" style={{ fontFamily: "var(--font-bw-display, sans-serif)" }} textAnchor="middle">
        <text x={200} y={310} fontSize={38} fontWeight={700}>
          BOARDING
        </text>
        <PawMark className="fill-black" transform="translate(200,332) scale(0.28)" />
        <text x={200} y={372} fontSize={38} fontWeight={700}>
          DOGGY DAYCARE
        </text>
        <PawMark className="fill-black" transform="translate(200,394) scale(0.28)" />
        <text x={200} y={434} fontSize={38} fontWeight={700}>
          GROOMING
        </text>
      </g>
    </svg>
  );
}
