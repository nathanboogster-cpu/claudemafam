"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/site-data";

// Native <details>/<summary> disclosure: keyboard accessible by default. This
// only adds two conveniences: close on outside click, and close whenever the
// route changes (so it doesn't stay open after a nav click).
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
      <summary className="flex cursor-pointer list-none items-center gap-1 whitespace-nowrap hover:text-accent-dark [&::-webkit-details-marker]:hidden">
        {label}
        <svg viewBox="0 0 12 8" className="h-2.5 w-2.5" aria-hidden="true">
          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="absolute left-1/2 top-full z-50 mt-3 grid w-[30rem] -translate-x-1/2 grid-cols-2 gap-1 rounded-2xl border border-border bg-white p-3 shadow-xl">
        {items.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-lg px-3 py-2 text-sm hover:bg-sky-deep hover:text-accent-dark ${
              i === 0 ? "col-span-2 font-bold text-brand" : "text-ink-soft"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
