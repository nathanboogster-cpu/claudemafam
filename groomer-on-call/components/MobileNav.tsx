"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PATHS, services, servicePath, business } from "@/lib/site-data";
import { PhoneIcon } from "./icons";

const primaryLinks = [
  { href: PATHS.services, label: "Services" },
  { href: PATHS.serviceAreas, label: "Service Areas" },
  { href: PATHS.about, label: "About" },
  { href: PATHS.faq, label: "FAQ" },
  { href: PATHS.blog, label: "Grooming Guides" },
  { href: PATHS.contact, label: "Contact" },
];

/**
 * Mobile navigation drawer.
 *
 * The whole menu is duplicated as plain crawlable <a> links in the footer,
 * so Google never has to execute this component to discover a URL — this is
 * a convenience layer for phone users only.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  // Navigating closes the drawer. Handled on the links themselves rather than
  // by watching the pathname in an effect — setState inside an effect triggers
  // a second render pass for every navigation, for no benefit here.
  const close = () => setOpen(false);

  // Lock background scroll while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape closes the drawer.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="goc-mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid h-11 w-11 place-items-center rounded-xl border-2 border-goc-ink/10 bg-white text-goc-ink lg:hidden"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
          {open ? (
            <path d="M5.5 5.5 18.5 18.5M18.5 5.5 5.5 18.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      <div
        id="goc-mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[var(--goc-header-h,4.5rem)] z-40 overflow-y-auto border-t border-goc-border bg-goc-cream px-4 pb-28 pt-4 lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="space-y-1">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block rounded-xl px-4 py-3.5 text-lg font-bold text-goc-ink hover:bg-white"
                >
                  {link.label}
                </Link>
                {link.href === PATHS.services ? (
                  <ul className="mb-2 ml-4 space-y-0.5 border-l-2 border-goc-border pl-3">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={servicePath(service.slug)}
                          onClick={close}
                          className="block rounded-lg px-3 py-2.5 font-semibold text-goc-ink-soft hover:bg-white hover:text-goc-magenta-darker"
                        >
                          {service.navLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={business.phoneHref}
          onClick={close}
          data-goc-event="call_click"
          data-goc-location="mobile_menu"
          className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-full bg-goc-magenta-dark px-6 py-3.5 text-base font-bold text-white"
        >
          <PhoneIcon className="h-5 w-5" />
          Call {business.phoneDisplay}
        </a>
      </div>
    </>
  );
}
