"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PATHS, serviceNav, proofNav, type NavItem } from "@/lib/site-data";
import { MenuIcon, CloseIcon } from "./icons";
import { BookCallButton } from "./CTAButton";

const coreLinks: NavItem[] = [
  { label: "Home", href: PATHS.home },
  { label: "Case Studies", href: PATHS.caseStudies },
  { label: "Resources", href: PATHS.resources },
  { label: "About", href: PATHS.about },
];

const groups: { label: string; items: NavItem[] }[] = [
  { label: "Menu", items: coreLinks },
  { label: "What we do", items: serviceNav },
  { label: "Proof", items: proofNav },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Close the menu on navigation, without an effect that fires after paint.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  const menu = (
    <div id="tf-mobile-menu" className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-tf-paper">
      <nav aria-label="Mobile" className="flex flex-col p-4 pb-24">
        {groups.map((group) => (
          <div key={group.label} className="mb-3">
            <p className="mt-3 px-2 text-xs font-semibold uppercase tracking-[0.14em] text-tf-ink-soft">
              {group.label}
            </p>
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-[48px] items-center border-b border-tf-border px-2 text-base font-medium ${
                    active ? "text-tf-green-dark" : "text-tf-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
        <BookCallButton location="mobile_nav" className="mt-4 w-full" />
      </nav>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="tf-mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-tf-border-strong text-tf-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tf-green-dark"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>
      {mounted && open ? createPortal(menu, document.body) : null}
    </div>
  );
}
