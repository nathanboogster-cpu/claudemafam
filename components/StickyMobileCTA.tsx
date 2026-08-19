import { CallButton, BookButton } from "./CTAButton";

// Sticky Call + Book bar for small screens only. `globals.css` reserves matching
// bottom padding on <body> so this never covers page content, and it's positioned
// below the mobile menu overlay (z-40) so it never overlaps other CTAs/buttons.
export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-border bg-white p-2 md:hidden">
      <CallButton
        location="sticky_mobile_bar"
        variant="primary"
        label="Call"
        className="flex-1"
      />
      <BookButton
        location="sticky_mobile_bar"
        variant="secondary"
        label="Book Now"
        className="flex-1"
      />
    </div>
  );
}
