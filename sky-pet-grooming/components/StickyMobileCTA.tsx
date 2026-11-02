import { BookButton } from "./CTAButton";

// Sticky Book Online bar for small screens only. `globals.css` reserves
// matching bottom padding on <body> so this never covers page content, and it
// sits below the mobile menu overlay (z-40).
export function StickyMobileCTA() {
  return (
    <div id="sticky-cta" className="fixed inset-x-0 bottom-0 z-30 flex border-t border-border bg-white p-2 md:hidden">
      <BookButton location="sticky_mobile_bar" className="flex-1" />
    </div>
  );
}
