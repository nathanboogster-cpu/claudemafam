import { BookButton, CallButton } from "./CTAButton";

// Sticky Book Online + Call bar for small screens only. `globals.css`
// reserves matching bottom padding on <body> so this never covers page
// content, and it sits below the mobile menu overlay (z-40).
export function StickyMobileCTA() {
  return (
    <div id="sticky-cta" className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-border bg-white p-2 md:hidden">
      <BookButton location="sticky_mobile_bar" className="flex-[3] px-3" />
      <CallButton location="sticky_mobile_bar" label="Call" className="flex-[2] px-3" />
    </div>
  );
}
