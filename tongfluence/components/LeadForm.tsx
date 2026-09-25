"use client";

import { useState } from "react";
import { EVENTS, trackEvent, attribution } from "@/lib/track";

type Status = "idle" | "sending" | "sent" | "error";

const businessTypes = [
  "Grooming salon",
  "Mobile grooming",
  "Salon and mobile",
  "Grooming plus daycare or boarding",
  "Not open yet",
];

// The single conversion form on the site. Progressive-enhancement minded:
// every field is a real labelled input inside a real <form>, errors are
// announced, and a failure tells the visitor what to do instead rather than
// pretending to have worked.
export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [started, setStarted] = useState(false);

  const markStarted = () => {
    if (started) return;
    setStarted(true);
    trackEvent(EVENTS.formStart, { form: "book_a_call" });
  };

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const source = attribution();

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          businessName: data.get("businessName"),
          email: data.get("email"),
          phone: data.get("phone"),
          businessType: data.get("businessType"),
          currentSite: data.get("currentSite"),
          message: data.get("message"),
          website: data.get("website"), // honeypot
          landingPage: source.landing_page,
          referrer: source.referrer,
          utmSource: source.utm_source ?? "",
          utmCampaign: source.utm_campaign ?? "",
        }),
      });

      const result = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setError(result.error ?? "Something went wrong. Please try again.");
        trackEvent(EVENTS.formError, { form: "book_a_call" });
        return;
      }

      setStatus("sent");
      trackEvent(EVENTS.formSubmit, { form: "book_a_call" });
      form.reset();
    } catch {
      setStatus("error");
      setError("We couldn't reach the server. Please check your connection and try again.");
      trackEvent(EVENTS.formError, { form: "book_a_call" });
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-3xl border border-tf-brown/40 bg-tf-brown-wash p-8 text-center"
      >
        <h2 className="font-tf-display text-2xl font-bold text-tf-ink">Got it — thank you.</h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-tf-ink-soft">
          We&rsquo;ll reply within one working day with a couple of times for a call. Before then we&rsquo;ll
          have a look at your Google Business Profile, so the call starts with something useful rather than
          with questions you&rsquo;ve already answered.
        </p>
      </div>
    );
  }

  const inputClasses =
    "mt-1.5 block w-full rounded-xl border border-tf-border-strong bg-white px-3.5 py-2.5 text-base text-tf-ink placeholder:text-tf-ink-soft focus:border-tf-brown-dark focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-tf-brown-dark";
  const labelClasses = "block text-sm font-semibold text-tf-ink";

  return (
    <form onSubmit={onSubmit} onFocus={markStarted} className="rounded-3xl border border-tf-border bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className={labelClasses}>
            Your name <span className="font-normal text-tf-ink-soft">(required)</span>
          </label>
          <input id="lead-name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </div>

        <div>
          <label htmlFor="lead-business" className={labelClasses}>
            Grooming business name
          </label>
          <input
            id="lead-business"
            name="businessName"
            type="text"
            autoComplete="organization"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="lead-email" className={labelClasses}>
            Email <span className="font-normal text-tf-ink-soft">(required)</span>
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="lead-phone" className={labelClasses}>
            Phone
          </label>
          <input id="lead-phone" name="phone" type="tel" autoComplete="tel" className={inputClasses} />
        </div>

        <div>
          <label htmlFor="lead-type" className={labelClasses}>
            What kind of grooming business?
          </label>
          <select id="lead-type" name="businessType" defaultValue="" className={inputClasses}>
            <option value="">Select one</option>
            {businessTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="lead-site" className={labelClasses}>
            Current website <span className="font-normal text-tf-ink-soft">(if you have one)</span>
          </label>
          <input
            id="lead-site"
            name="currentSite"
            type="text"
            inputMode="url"
            placeholder="yourgroomingbusiness.com"
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="lead-message" className={labelClasses}>
            Anything you want us to look at first?
          </label>
          <textarea
            id="lead-message"
            name="message"
            rows={4}
            placeholder="e.g. we show up in our own town but nowhere else, or our Google profile hasn't had a review in a year"
            className={inputClasses}
          />
        </div>
      </div>

      {/* Honeypot. Hidden from sight and from assistive technology, but a real
          field a form-filling bot will complete. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="lead-website-hp">Leave this field empty</label>
        <input id="lead-website-hp" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-5 rounded-xl border border-tf-warn/40 bg-tf-warn-wash px-4 py-3 text-sm text-tf-ink">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="tf-cta mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-tf-brown-dark px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-tf-brown-darker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tf-brown-dark disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Request a call"}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-tf-ink-soft">
        We use what you send here to reply to you and nothing else. No list, no sequence, no sharing it with
        anyone.
      </p>
    </form>
  );
}
