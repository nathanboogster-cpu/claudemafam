"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/track";
import { services, serviceAreas } from "@/lib/site-data";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-psl-border bg-white px-3 py-2.5 text-sm text-psl-ink placeholder:text-psl-ink-soft/60 focus:border-psl-brass focus:outline-none focus:ring-1 focus:ring-psl-brass";
const labelClasses = "block text-sm font-semibold text-psl-ink";

export function LeadForm({ location = "contact_page" }: { location?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      service: data.get("service"),
      city: data.get("city"),
      dogInfo: data.get("dogInfo"),
      message: data.get("message"),
      company: data.get("company"), // honeypot
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please call us instead.");
        return;
      }

      trackEvent("psl_lead_form_submit", { location });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please call us instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-psl-border bg-white p-6 text-center">
        <p className="font-psl-display text-xl font-bold text-psl-ink">Thanks — we got it!</p>
        <p className="mt-2 text-sm text-psl-ink-soft">
          We&apos;ll call you back to confirm availability and schedule your appointment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-psl-border bg-white p-6 text-left">
      {/* Honeypot — hidden from real visitors via CSS, not display:none (which some screen readers skip inconsistently for form fields), and unreachable by tab. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name <span className="text-psl-brass-dark">*</span>
          </label>
          <input required id="name" name="name" type="text" autoComplete="name" className={`mt-1.5 ${inputClasses}`} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span className="text-psl-brass-dark">*</span>
          </label>
          <input required id="phone" name="phone" type="tel" autoComplete="tel" className={`mt-1.5 ${inputClasses}`} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={`mt-1.5 ${inputClasses}`} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className={labelClasses}>
            Service
          </label>
          <select id="service" name="service" defaultValue="" className={`mt-1.5 ${inputClasses}`}>
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className={labelClasses}>
            City
          </label>
          <select id="city" name="city" defaultValue="" className={`mt-1.5 ${inputClasses}`}>
            <option value="">Select your city</option>
            {serviceAreas.map((a) => (
              <option key={a.slug} value={a.city}>
                {a.city}
              </option>
            ))}
            <option value="Other">Other / not listed</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="dogInfo" className={labelClasses}>
          About your dog
        </label>
        <input
          id="dogInfo"
          name="dogInfo"
          type="text"
          placeholder="Breed, size, and any coat notes"
          className={`mt-1.5 ${inputClasses}`}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Anything else?
        </label>
        <textarea id="message" name="message" rows={3} className={`mt-1.5 ${inputClasses}`} />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-psl-brass-dark px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-psl-brass-darker disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Book Appointment"}
      </button>
      <p className="text-center text-xs text-psl-ink-soft">
        This isn&apos;t instant booking — we&apos;ll call you back to confirm availability.
      </p>
    </form>
  );
}
