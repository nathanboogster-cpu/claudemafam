import { NextResponse } from "next/server";
import { recordClick } from "@/lib/analytics-store";

// Self-hosted click tracker for the site's conversion CTAs, kept alongside
// (not instead of) Vercel Analytics — see lib/track.ts. Free-tier Vercel
// Web Analytics caps custom events at 2,500/month; this writes straight to
// Redis instead, with no cap. Always responds { ok: true } so a malformed
// or unconfigured request never surfaces as an error to the caller.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const type = typeof body?.type === "string" ? body.type : "";
    const location = typeof body?.location === "string" ? body.location : "";
    await recordClick(type, location);
  } catch {
    // Malformed JSON, etc. — never let this break the caller.
  }

  return NextResponse.json({ ok: true });
}
