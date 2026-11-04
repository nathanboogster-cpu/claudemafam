"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/site-data";
import { BookButton, CallButton } from "./CTAButton";

// How far the page has to scroll before the bar slides in.
const SCROLL_THRESHOLD = 40;

// Sticky Book Online + Call bar for small screens only. It stays hidden at the
// top of the page so it doesn't repeat the hero's own Book Online button, and
// slides in once the visitor starts scrolling. A page with no Book Online
// button in its first screen shows it straight away. `globals.css` reserves
// matching bottom padding on <body> so it never covers page content, and it
// sits below the mobile menu overlay (z-40).
export function StickyMobileCTA() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const bookOnScreen = () =>
      [...document.querySelectorAll<HTMLAnchorElement>(`a[href="${BOOKING_URL}"]`)].some((a) => {
        if (a.closest("#sticky-cta")) return false;
        const r = a.getBoundingClientRect();
        return r.width > 0 && r.height > 0 && r.top >= 0 && r.bottom <= window.innerHeight;
      });
    const update = () => setShown(window.scrollY > SCROLL_THRESHOLD || !bookOnScreen());
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
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
