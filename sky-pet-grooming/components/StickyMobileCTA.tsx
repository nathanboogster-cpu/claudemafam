"use client";

import { usePathname } from "next/navigation";
import { PATHS } from "@/lib/site-data";
import { BookButton } from "./CTAButton";

// Sticky Book bar for small screens only. `globals.css` reserves matching
// bottom padding on <body> so this never covers page content, and it sits
// below the mobile menu overlay (z-40). The booking page leaves it out: the
// form is already on screen there, and the bar would only link to itself.
export function StickyMobileCTA() {
  const pathname = usePathname();
  if (pathname === PATHS.book) return null;

  return (
    <div id="sticky-cta" className="fixed inset-x-0 bottom-0 z-30 flex border-t border-border bg-white p-2 md:hidden">
      <BookButton location="sticky_mobile_bar" className="flex-1" />
    </div>
  );
}
