import { NextResponse } from "next/server";
import { recordClick } from "@/lib/analytics-store";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const type = typeof body?.type === "string" ? body.type : "";
    const location = typeof body?.location === "string" ? body.location : "unknown";
    await recordClick(type, location);
  } catch {
    // Never let a malformed or failed tracking beacon affect the page.
  }

  return NextResponse.json({ ok: true });
}
