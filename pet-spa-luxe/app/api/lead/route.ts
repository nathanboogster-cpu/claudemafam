import { NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/lib/site-data";

// Contact-form lead notifications. Unlike lib/analytics-store.ts, failures
// here are real problems (a missed lead), so this reports success/failure
// back to the caller instead of always returning ok — the form shows an
// error and tells the visitor to just call instead.

const MAX_FIELD_LENGTH = 2000;

function clean(value: unknown, maxLength = MAX_FIELD_LENGTH): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot — real visitors never fill this hidden field, bots often do.
  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 200);
  const phone = clean(body.phone, 50);
  const email = clean(body.email, 200);
  const service = clean(body.service, 200);
  const city = clean(body.city, 200);
  const dogInfo = clean(body.dogInfo, 300);
  const message = clean(body.message, MAX_FIELD_LENGTH);

  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Name and phone are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[lead] RESEND_API_KEY is not set — cannot send lead notification email.");
    return NextResponse.json({ ok: false, error: "Email is not configured yet." }, { status: 500 });
  }

  const rows = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email || "(not provided)"],
    ["Service interested in", service || "(not specified)"],
    ["City", city || "(not specified)"],
    ["Dog info", dogInfo || "(not provided)"],
  ];

  const html = `
    <h2>New lead from petspaluxe.com</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="font-weight:bold;vertical-align:top">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>
    ${message ? `<p><strong>Message</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>` : ""}
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${business.name} Website <onboarding@resend.dev>`,
      to: business.leadNotificationEmail,
      replyTo: email || undefined,
      subject: `New Lead: ${name}${service ? ` — ${service}` : ""}`,
      html,
    });

    if (error) {
      console.error("[lead] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Failed to send." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] Unexpected error sending lead email:", err);
    return NextResponse.json({ ok: false, error: "Failed to send." }, { status: 500 });
  }
}
