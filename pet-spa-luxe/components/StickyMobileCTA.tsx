import { CallButton, RequestButton } from "./CTAButton";

// Sticky Call + Request bar for small screens only. `globals.css` reserves
// matching bottom padding on <body> so this never covers page content.
export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-psl-border bg-white p-2 md:hidden">
      <CallButton
        location="psl_sticky_mobile_bar"
        variant="primary"
        label="Call"
        className="flex-1"
      />
      <RequestButton
        location="psl_sticky_mobile_bar"
        variant="secondary"
        label="Request Appointment"
        className="flex-1"
      />
    </div>
  );
}
