"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PATHS, serviceNav, areaNav, type NavItem } from "@/lib/site-data";

const coreLinks: NavItem[] = [
  { label: "Home", href: PATHS.home },
  { label: "About", href: PATHS.about },
  { label: "Gallery", href: PATHS.gallery },
  { label: "Reviews", href: PATHS.reviews },
  { label: "FAQ", href: PATHS.faq },
  { label: "Contact", href: PATHS.contact },
];

const groups: { label: string; items: NavItem[] }[] = [
  { label: "Menu", items: coreLinks },
  { label: "Services", items: serviceNav },
  { label: "Service Areas", items: areaNav },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  const menu = (
    <div id="sp-mobile-menu" className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-sp-cream">
      <nav aria-label="Mobile" className="flex flex-col p-4 font-sp-sans">
        {groups.map((group) => (
          <div key={group.label} className="mb-2">
            <p className="mt-3 px-2 text-xs font-semibold uppercase tracking-wide text-sp-ink-soft">{group.label}</p>
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`min-h-[44px] flex items-center border-b border-sp-border px-2 text-lg font-medium ${
                    active ? "text-sp-green-dark" : "text-sp-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="sp-mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-sp-border text-sp-ink"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

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
