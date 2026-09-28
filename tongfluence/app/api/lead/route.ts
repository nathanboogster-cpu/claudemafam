import { NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/lib/site-data";

// Lead notifications for the booking form.
//
// A missed lead is a real business problem, so this reports success or failure
// honestly back to the caller instead of always returning ok — the form then
// shows an error and tells the visitor what to do instead. A form that
// silently swallows submissions is worse than having no form at all.

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
  // Returns ok so the bot doesn't learn anything from the response.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 200);
  const businessName = clean(body.businessName, 200);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 50);
  const currentSite = clean(body.currentSite, 300);
  const businessType = clean(body.businessType, 100);
  const message = clean(body.message);
  const landingPage = clean(body.landingPage, 300);
  const referrer = clean(body.referrer, 300);
  const utmSource = clean(body.utmSource, 120);
  const utmCampaign = clean(body.utmCampaign, 120);

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, error: "Please include your name and email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = business.leadNotificationEmail;

  // Wording for the two failure paths, so we never tell someone to "email us
  // directly" when no public address is published.
  const fallback = business.publicContactEmail
    ? ` Please email ${business.publicContactEmail} instead.`
    : " Please try again in a moment.";

  if (!apiKey || !to) {
    // Configuration gap, not a visitor error. Logged loudly, and the visitor
    // is told plainly rather than shown a fake success message.
    console.error(
      "[lead] Missing RESEND_API_KEY or LEAD_NOTIFICATION_EMAIL — cannot deliver lead notification.",
    );
    return NextResponse.json(
      { ok: false, error: `This form isn't connected yet.${fallback}` },
      { status: 500 },
    );
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Grooming business", businessName || "(not provided)"],
    ["Email", email],
    ["Phone", phone || "(not provided)"],
    ["Business type", businessType || "(not provided)"],
    ["Current website", currentSite || "(none given)"],
    ["Message", message || "(none)"],
    // Source attribution, so organic Google, Meta, personal brand and referral
    // leads stay distinguishable once there are enough of them to compare.
    ["Landing page", landingPage || "(unknown)"],
    ["Referrer", referrer || "(unknown)"],
    ["utm_source", utmSource || "(none)"],
    ["utm_campaign", utmCampaign || "(none)"],
  ];

  const html = `<h2>New enquiry from the Tongfluence website</h2><table cellpadding="6">${rows
    .map(
      ([label, value]) =>
        `<tr><td style="vertical-align:top"><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(
          value,
        ).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("")}</table>`;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.LEAD_FROM_EMAIL ?? "Tongfluence <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `New enquiry — ${businessName || name}`,
      html,
      text,
    });

    if (error) {
      console.error("[lead] Resend returned an error:", error);
      return NextResponse.json(
        { ok: false, error: `We couldn't send that just now.${fallback}` },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[lead] Failed to send lead notification:", err);
    return NextResponse.json(
      { ok: false, error: `We couldn't send that just now.${fallback}` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
