"use client";

import { useEffect, useState } from "react";
import { BookButton, CallButton } from "./CTAButton";

// How far the page has to scroll before the bar slides in.
const SCROLL_THRESHOLD = 40;

// Sticky Book Online + Call bar for small screens only. On every page it stays
// hidden at the top, so it doesn't repeat the hero's own Book Online button,
// and slides in once the visitor starts scrolling. `globals.css` reserves
// matching bottom padding on <body> so it never covers page content, and it
// sits below the mobile menu overlay (z-40).
export function StickyMobileCTA() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const update = () => setShown(window.scrollY > SCROLL_THRESHOLD);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      id="sticky-cta"
      data-shown={shown}
      aria-hidden={!shown}
      inert={!shown}
      className={`fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-border bg-white p-2 transition-[translate,visibility] duration-200 motion-reduce:transition-none md:hidden ${
        shown ? "visible translate-y-0" : "invisible translate-y-full"
      }`}
    >
      <BookButton location="sticky_mobile_bar" className="flex-[3] px-3" />
      <CallButton location="sticky_mobile_bar" label="Call" className="flex-[2] px-3" />
    </div>
  );
}
