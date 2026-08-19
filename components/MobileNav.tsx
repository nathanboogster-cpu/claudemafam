"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerNav } from "@/lib/site-data";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Portal target (document.body) only exists client-side; this SSR-safe "mounted"
  // flip has no render-time alternative without a hydration mismatch.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Close the menu whenever the route changes (covers browser back/forward too).
  // Resetting during render (rather than in an effect) avoids an extra render pass.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  const menu = (
    <div
      id="mobile-menu"
      className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-cream"
    >
      <nav aria-label="Mobile" className="flex flex-col p-4">
        {footerNav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={active ? "page" : undefined}
              className={`min-h-[44px] flex items-center border-b border-border px-2 text-lg font-medium ${
                active ? "text-terracotta-dark" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-ink"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Portaled to <body> so it's never affected by the header's backdrop-blur,
          which otherwise becomes the containing block for fixed descendants and
          collapses this menu to the header's own height. */}
      {open && mounted ? createPortal(menu, document.body) : null}
    </div>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-6 w-6">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
