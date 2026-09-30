import Script from "next/script";

// The booking calendar, embedded from GoHighLevel (served by LeadConnector).
// The visitor picks a time and enters their details inside the iframe; the
// booking lands in the Tongfluence GoHighLevel account, which sends the
// confirmation and reminders. form_embed.js resizes the iframe to fit its
// content, so the min-height only matters until that script has run.
const CALENDAR_ID = "DuAHWAyvnFB9Exj9nYQ9";
const CALENDAR_URL = `https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`;

export function BookingCalendar() {
  return (
    <div className="rounded-2xl border border-tf-border bg-tf-card p-2 sm:p-3">
      <p className="tf-caps px-3 pt-3 text-xs text-tf-brown">Pick a time</p>
      <iframe
        src={CALENDAR_URL}
        title="Book a call with Tongfluence"
        allow="payment"
        scrolling="no"
        id={`${CALENDAR_ID}_1790733373408`}
        className="mt-2 block min-h-[760px] w-full overflow-hidden rounded-xl border-0 bg-white"
      />
      <noscript>
        <p className="px-3 pb-3 text-sm text-tf-ink-soft">
          The calendar needs JavaScript.{" "}
          <a href={CALENDAR_URL} className="font-medium text-tf-brown-dark underline underline-offset-4">
            Open it in a new page
          </a>
          .
        </p>
      </noscript>
      <Script id="ghl-form-embed" src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
