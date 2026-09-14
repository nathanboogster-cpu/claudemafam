import { business } from "@/lib/site-data";
import { PhoneIcon } from "./icons";

/**
 * Persistent call bar, phones only. Server-rendered — click tracking is
 * handled by the delegated listener in components/ConversionTracking.tsx via
 * the data attributes below, so this bar costs no JavaScript.
 *
 * The brief makes calling the primary conversion until a real booking system
 * is verified, so this is one unambiguous action rather than a Book | Call
 * split. `body` carries matching bottom padding in globals.css so the bar
 * never covers page content, and it clears the safe-area inset on notched
 * devices.
 */
export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-goc-ink/95 px-3 py-2.5 backdrop-blur md:hidden [padding-bottom:calc(0.625rem+env(safe-area-inset-bottom))]">
      <a
        href={business.phoneHref}
        data-goc-event="call_click"
        data-goc-location="sticky_mobile_bar"
        className="flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-goc-orange px-5 py-3 text-base font-extrabold text-goc-ink"
      >
        <PhoneIcon className="h-5 w-5" />
        <span>Call To Book — {business.phoneDisplay}</span>
      </a>
    </div>
  );
}
