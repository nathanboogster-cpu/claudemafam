import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

// ---------------------------------------------------------------------------
// REAL LOGO DETECTION
//
// The brand logo is used the moment the artwork exists in the repo — no code
// change, no flag to flip. Drop the file at:
//
//     tongfluence/public/images/logo.(png|jpg|jpeg|svg)
//
// and the header and footer switch from the drawn fallback to it on the next
// build. Nothing else has to happen.
//
// Dimensions are read out of the file itself so next/image always gets the
// real intrinsic size and never causes layout shift. This runs at build time
// in a server component, so it costs nothing at runtime, and it deliberately
// returns null rather than guessing when the file is absent or unreadable —
// a broken <img> is worse than the drawn mark.
// ---------------------------------------------------------------------------

export type BrandLogo = { src: string; width: number; height: number };

const CANDIDATES = ["logo.png", "logo.jpg", "logo.jpeg", "logo.svg"];

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

let cached: BrandLogo | null | undefined;

export function getBrandLogo(): BrandLogo | null {
  if (cached !== undefined) return cached;
  cached = CANDIDATES.map(read).find((found) => found !== null) ?? null;
  return cached;
}
