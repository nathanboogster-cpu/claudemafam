"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/lib/site-data";
import { ChevronDownIcon } from "./icons";

// Hover-and-focus dropdown for the desktop header. The panel is rendered in
// the DOM at all times (hidden with CSS) so every link inside it is a real
// crawlable anchor — discovery never depends on JavaScript running.
export function NavDropdown({ label, items }: { label: string; items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
        className="inline-flex min-h-[44px] items-center gap-1 whitespace-nowrap px-1 text-sm font-medium text-tf-ink-soft hover:text-tf-brown-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tf-brown-dark"
      >
        {label}
        <ChevronDownIcon className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute left-0 top-full z-50 w-80 pt-2 ${open ? "block" : "hidden"}`}
      >
        <ul className="rounded-xl border border-tf-border bg-white p-2 shadow-lg">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 hover:bg-tf-paper-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tf-brown-dark"
              >
                <span className="block text-sm font-semibold text-tf-ink">{item.label}</span>
                {item.description ? (
                  <span className="mt-0.5 block text-xs leading-snug text-tf-ink-soft">{item.description}</span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
