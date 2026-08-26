"use client";

import { useEffect, useState } from "react";
import { CallButton, RequestButton } from "./CTAButton";

// Only fade in once the visitor has scrolled past the hero's own CTA
// buttons — showing it immediately made it look like a duplicate of the
// hero's Call/Request buttons on first load.
const SHOW_AFTER_PX = 480;

// Sticky Call + Request bar for small screens only. `globals.css` reserves
// matching bottom padding on <body> at all times (independent of the fade
// state below) so this never causes layout shift when it appears.
export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      // `inert` when hidden removes it from tab order and click/hover
      // interaction in one native attribute, on top of the opacity fade.
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-psl-border bg-white p-2 transition-opacity duration-300 md:hidden ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
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
