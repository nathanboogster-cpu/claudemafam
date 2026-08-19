"use client";

import { useState, type FormEvent } from "react";
import { business } from "@/lib/site-data";
import { trackEvent } from "@/lib/track";

// No booking backend/API has been supplied for this build (booking is phone + this
// form only — see the client handoff §2). Submitting composes an email to
// pamperedpuppies.dn@gmail.com via the visitor's own mail client, which is an honest
// mechanism given the current constraints rather than a fabricated online booking
// system. Swap this for a real form handler if/when Ellen provides one.

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  breed: string;
  petName: string;
  message: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  breed: "",
  petName: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    trackEvent("book_click", { location: "contact_form" });

    const subject = encodeURIComponent(
      `Appointment request from ${form.firstName} ${form.lastName}`.trim()
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.firstName} ${form.lastName}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Pet name: ${form.petName}`,
        `Breed: ${form.breed}`,
        "",
        "Message:",
        form.message,
      ].join("\n")
    );

    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputClasses =
    "w-full rounded-lg border border-border bg-white px-3 py-2 text-base text-ink placeholder:text-ink-soft/50 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/30 min-h-[44px]";
  const labelClasses = "block text-sm font-medium text-ink mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-describedby="form-help">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClasses}>
            First Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            autoComplete="given-name"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClasses}>
            Last Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            autoComplete="family-name"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="petName" className={labelClasses}>
            Pet Name
          </label>
          <input
            id="petName"
            name="petName"
            type="text"
            value={form.petName}
            onChange={(e) => update("petName", e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="breed" className={labelClasses}>
            Breed
          </label>
          <input
            id="breed"
            name="breed"
            type="text"
            value={form.breed}
            onChange={(e) => update("breed", e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputClasses}
        />
      </div>

      <p id="form-help" className="text-xs text-ink-soft">
        Submitting opens your email app with these details ready to send to{" "}
        {business.email}. Prefer to talk now? Call {business.phoneDisplay}.
      </p>

      <button
        type="submit"
        className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-terracotta px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-terracotta-dark"
      >
        Request Appointment
      </button>

      {sent && (
        <p role="status" className="text-sm font-medium text-sage-dark">
          Your email app should now be open with your request pre-filled — just hit
          send. If it didn&rsquo;t open, email us directly at {business.email}.
        </p>
      )}
    </form>
  );
}
