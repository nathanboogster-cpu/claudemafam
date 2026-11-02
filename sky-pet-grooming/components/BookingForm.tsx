"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import { submitBookingRequest, type BookingState, type FieldName } from "@/app/(site)/book/actions";
import { PATHS } from "@/lib/site-data";
import { trackEvent } from "@/lib/track";
import { buttonBaseClasses } from "./CTAButton";
import { CheckIcon } from "./icons";

const initialState: BookingState = { status: "idle", message: "", fieldErrors: {}, values: {} };

const inputClasses =
  "mt-1 block w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-brand";

export function BookingForm() {
  const [state, formAction, pending] = useActionState(submitBookingRequest, initialState);

  useEffect(() => {
    if (state.status === "success") trackEvent("booking_request", { location: "book_form" });
  }, [state]);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h2 className="mt-4 font-display text-2xl font-bold text-ink">Request sent. Thank you!</h2>
        <p className="mt-2 text-ink-soft">
          We have your request and will get back to you to confirm that we can reach you and to set a time.
        </p>
        <Link href={PATHS.home} className="mt-4 inline-flex min-h-[44px] items-center font-semibold text-brand hover:underline">
          Back to the home page
        </Link>
      </div>
    );
  }

  const err = state.fieldErrors;
  const val = state.values;

  return (
    <form action={formAction} noValidate className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
      {state.status === "error" && state.message && (
        <p role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Your name" error={err.name}>
          <input id="name" name="name" type="text" autoComplete="name" required maxLength={80} defaultValue={val.name} {...describe("name", err)} className={cls(err.name)} />
        </Field>
        <Field name="phone" label="Phone" error={err.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required maxLength={30} defaultValue={val.phone} {...describe("phone", err)} className={cls(err.phone)} />
        </Field>
        <Field name="email" label="Email" optional error={err.email}>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={120} defaultValue={val.email} {...describe("email", err)} className={cls(err.email)} />
        </Field>
        <Field name="location" label="City or ZIP code" hint="Anywhere in California." error={err.location}>
          <input id="location" name="location" type="text" autoComplete="postal-code" required maxLength={80} defaultValue={val.location} {...describe("location", err)} className={cls(err.location)} />
        </Field>
      </div>

      <div className="mt-5 space-y-5">
        <Field name="pets" label="About your pet" hint="Breed, size, age and coat. Anything we should know?" error={err.pets}>
          <textarea id="pets" name="pets" required rows={4} maxLength={600} defaultValue={val.pets} {...describe("pets", err)} className={cls(err.pets)} />
        </Field>
        <Field name="timing" label="Preferred days or times" optional error={err.timing}>
          <input id="timing" name="timing" type="text" maxLength={200} defaultValue={val.timing} {...describe("timing", err)} className={cls(err.timing)} />
        </Field>
        <Field name="notes" label="Anything else" optional error={err.notes}>
          <textarea id="notes" name="notes" rows={3} maxLength={1000} defaultValue={val.notes} {...describe("notes", err)} className={cls(err.notes)} />
        </Field>
      </div>

      {/* Honeypot: hidden from people and screen readers, left empty by them. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={pending}
        className={`${buttonBaseClasses} mt-6 w-full bg-accent text-on-accent hover:bg-accent-hover focus-visible:outline-brand disabled:opacity-60 sm:w-auto`}
      >
        {pending ? "Sending…" : "Send My Request"}
      </button>
      <p className="mt-3 text-sm text-ink-soft">We only use these details to reply to your request.</p>
    </form>
  );
}

function cls(error?: string) {
  return `${inputClasses} ${error ? "border-red-400" : "border-border"}`;
}

function describe(name: FieldName, errors: BookingState["fieldErrors"]) {
  return errors[name] ? { "aria-invalid": true as const, "aria-describedby": `${name}-error` } : {};
}

function Field({
  name,
  label,
  hint,
  optional,
  error,
  children,
}: {
  name: FieldName;
  label: string;
  hint?: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="block font-semibold text-ink">
        {label}
        {optional && <span className="ml-1 text-sm font-normal text-ink-soft">(optional)</span>}
      </label>
      {hint && <p className="text-sm text-ink-soft">{hint}</p>}
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
