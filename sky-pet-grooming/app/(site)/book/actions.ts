"use server";

import { headers } from "next/headers";
import { allowSubmission, saveRequest } from "@/lib/requests-store";

export type FieldName = "name" | "phone" | "email" | "location" | "pets" | "timing" | "notes";

export type BookingState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<Record<FieldName, string>>;
  // Echoed back on error so the form can refill what the visitor typed.
  values: Partial<Record<FieldName, string>>;
};

const LIMITS: Record<FieldName, number> = {
  name: 80,
  phone: 30,
  email: 120,
  location: 80,
  pets: 600,
  timing: 200,
  notes: 1000,
};

const FIELDS = Object.keys(LIMITS) as FieldName[];

function field(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitBookingRequest(_prev: BookingState, formData: FormData): Promise<BookingState> {
  const values = Object.fromEntries(FIELDS.map((f) => [f, field(formData, f).slice(0, LIMITS[f])])) as Record<
    FieldName,
    string
  >;

  // Honeypot: a field hidden from people. Bots that fill it get a normal
  // success message and nothing is stored.
  if (field(formData, "website")) {
    return { status: "success", message: "", fieldErrors: {}, values: {} };
  }

  const fieldErrors: BookingState["fieldErrors"] = {};
  if (!values.name) fieldErrors.name = "Please tell us your name.";
  if (values.phone.replace(/\D/g, "").length < 10) fieldErrors.phone = "Please enter a phone number we can reach you on.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) fieldErrors.email = "Please check your email address.";
  if (!values.location) fieldErrors.location = "Please tell us your city or ZIP code.";
  if (!values.pets) fieldErrors.pets = "Please tell us a little about your pet.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", fieldErrors, values };
  }

  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!(await allowSubmission(ip))) {
    return {
      status: "error",
      message: "We've received several requests from you already. Please try again in an hour.",
      fieldErrors: {},
      values,
    };
  }

  const saved = await saveRequest({
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    ...values,
  });

  if (!saved) {
    return {
      status: "error",
      message: "Sorry, we couldn't send your request just now. Please try again in a few minutes.",
      fieldErrors: {},
      values,
    };
  }

  return { status: "success", message: "", fieldErrors: {}, values: {} };
}
