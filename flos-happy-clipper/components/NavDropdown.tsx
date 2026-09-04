"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/site-data";

// Native <details>/<summary> disclosure — keyboard accessible by default.
export function NavDropdown({ label, items }: { label: string; items: NavItem[] }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        ref.current.open = false;
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <details ref={ref} className="relative">
      <summary className="flex cursor-pointer list-none items-center gap-1 whitespace-nowrap hover:text-fh-amber-dark [&::-webkit-details-marker]:hidden">
        {label}
        <svg viewBox="0 0 12 8" className="h-2.5 w-2.5 fill-current" aria-hidden="true">
          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="absolute left-0 top-full z-50 mt-2 max-h-96 w-64 overflow-y-auto rounded-xl border border-fh-border bg-white p-2 shadow-lg">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-3 py-2 text-sm text-fh-ink-soft hover:bg-fh-cream-deep hover:text-fh-amber-dark"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
