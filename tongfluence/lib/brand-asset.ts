import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

// Inlines a brand image as a data URI for use inside an ImageResponse.
//
// The generated favicon and share card are rendered by Satori, which cannot
// reach back into the app to fetch /images/... over HTTP at build time. Reading
// the file off disk and inlining it is the reliable way to put the real logo
// into them. Returns null when the file is absent so the caller can fall back
// to drawn artwork rather than emitting a broken image.
export function brandAssetDataUri(file: string): string | null {
  try {
    const abs = path.join(process.cwd(), "public", "images", file);
    if (!existsSync(abs)) return null;
    const ext = path.extname(file).toLowerCase();
    const mime = ext === ".svg" ? "image/svg+xml" : ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : "image/png";
    return `data:${mime};base64,${readFileSync(abs).toString("base64")}`;
  } catch {
    return null;
  }
}
