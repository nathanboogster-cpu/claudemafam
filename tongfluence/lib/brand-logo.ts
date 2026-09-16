import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

// ---------------------------------------------------------------------------
// REAL LOGO DETECTION
//
// The brand logo artwork lives in public/images/, cut out of the supplied
// file so it sits on any background. Three variants, because the supplied
// lockup is stacked (mark above wordmark) and renders the wordmark about 5px
// tall in a 64px header bar:
//
//   logo-horizontal.png  mark and wordmark side by side — the header
//   logo-lockup.png      the stacked lockup as supplied — the footer
//   logo-mark.png        the emblem alone — square contexts
//
// Any of these can be replaced in place with better artwork (a vector export
// would be ideal) and the site picks the new file up with no code change:
// dimensions are read from the file itself, so next/image always gets the
// true intrinsic size and there is no layout shift. If a file is missing or
// unreadable this returns null and components/Logo.tsx falls back to the
// drawn mark rather than rendering a broken image.
//
// Dimensions are read out of the file itself so next/image always gets the
// real intrinsic size and never causes layout shift. This runs at build time
// in a server component, so it costs nothing at runtime, and it deliberately
// returns null rather than guessing when the file is absent or unreadable —
// a broken <img> is worse than the drawn mark.
// ---------------------------------------------------------------------------

export type BrandLogo = { src: string; width: number; height: number };

export type LogoVariant = "horizontal" | "lockup" | "mark";

// Each variant falls back to a plain `logo.*` if the specific crop is absent,
// so dropping in a single replacement file still works.
const CANDIDATES: Record<LogoVariant, string[]> = {
  horizontal: ["logo-horizontal.svg", "logo-horizontal.png", "logo.svg", "logo.png", "logo.jpg"],
  lockup: ["logo-lockup.svg", "logo-lockup.png", "logo.svg", "logo.png", "logo.jpg"],
  mark: ["logo-mark.svg", "logo-mark.png", "logo.svg", "logo.png", "logo.jpg"],
};

function pngSize(buf: Buffer): { width: number; height: number } | null {
  // PNG signature, then an IHDR chunk whose width/height are big-endian
  // uint32s at byte offsets 16 and 20.
  if (buf.length < 24) return null;
  if (buf.toString("ascii", 1, 4) !== "PNG") return null;
  if (buf.toString("ascii", 12, 16) !== "IHDR") return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function jpegSize(buf: Buffer): { width: number; height: number } | null {
  // Walk the JPEG marker segments to the first Start Of Frame, which carries
  // the dimensions. SOF0-SOF15, skipping the four that are not frame headers.
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 9 < buf.length) {
    if (buf[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buf[offset + 1];
    const isSof = marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc, 0xd8].includes(marker);
    if (isSof) {
      return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
    }
    offset += 2 + buf.readUInt16BE(offset + 2);
  }
  return null;
}

function svgSize(buf: Buffer): { width: number; height: number } | null {
  const head = buf.toString("utf8", 0, 2048);
  const viewBox = head.match(/viewBox\s*=\s*["']\s*[\d.-]+[,\s]+[\d.-]+[,\s]+([\d.]+)[,\s]+([\d.]+)/i);
  if (viewBox) return { width: Math.round(+viewBox[1]), height: Math.round(+viewBox[2]) };
  const w = head.match(/\bwidth\s*=\s*["']([\d.]+)/i);
  const h = head.match(/\bheight\s*=\s*["']([\d.]+)/i);
  if (w && h) return { width: Math.round(+w[1]), height: Math.round(+h[1]) };
  return null;
}

function read(file: string): BrandLogo | null {
  const abs = path.join(process.cwd(), "public", "images", file);
  if (!existsSync(abs)) return null;

  try {
    const buf = readFileSync(abs);
    const size = file.endsWith(".png")
      ? pngSize(buf)
      : file.endsWith(".svg")
        ? svgSize(buf)
        : jpegSize(buf);
    if (!size || !size.width || !size.height) return null;
    return { src: `/images/${file}`, width: size.width, height: size.height };
  } catch {
    return null;
  }
}

const cache = new Map<LogoVariant, BrandLogo | null>();

export function getBrandLogo(variant: LogoVariant = "horizontal"): BrandLogo | null {
  const hit = cache.get(variant);
  if (hit !== undefined) return hit;
  const found = CANDIDATES[variant].map(read).find((f) => f !== null) ?? null;
  cache.set(variant, found);
  return found;
}
