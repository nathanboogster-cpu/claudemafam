"use client";

import { business } from "@/lib/site-data";
import { trackEvent } from "@/lib/track";
import { PhoneIcon } from "./icons";

export function MobileHeaderCall() {
  return (
    <a
      href={business.phoneHref}
      aria-label={`Call ${business.name} at ${business.phoneDisplay}`}
      onClick={() => trackEvent("bb_call_click", { location: "header_mobile" })}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-bb-border text-bb-ink-soft"
    >
      <PhoneIcon className="h-5 w-5" />
    </a>
  );
}
