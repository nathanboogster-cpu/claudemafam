"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/track";

// A plain, unstyled tracked anchor — for links that need to keep their own
// custom styling (header/footer text links, inline copy) rather than the
// button look of BookButton/CallButton, but should still fire the same
// bb_book_click / bb_call_click analytics events.
export function TrackedLink({
  href,
  event,
  params = {},
  className,
  target,
  rel,
  children,
}: {
  href: string;
  event: string;
  params?: Record<string, string | number | boolean>;
  className?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}) {
  return (
    <a href={href} target={target} rel={rel} className={className} onClick={() => trackEvent(event, params)}>
      {children}
    </a>
  );
}
