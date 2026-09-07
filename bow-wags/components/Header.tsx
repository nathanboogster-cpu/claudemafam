import Link from "next/link";
import Image from "next/image";
import { business, PATHS, mainNav } from "@/lib/site-data";
import { MobileNav } from "./MobileNav";
import { MobileHeaderCall } from "./MobileHeaderCall";
import { CallButton, ReserveButton } from "./CTAButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-bw-border bg-bw-cream/95 backdrop-blur supports-[backdrop-filter]:bg-bw-cream/80 font-bw-sans">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href={PATHS.home} className="flex items-center shrink-0 text-bw-ink">
          <span className="relative h-10 w-[96px] shrink-0 overflow-hidden rounded-lg border border-bw-border">
            <Image src="/images/logo-mark.jpg" alt="Bow Wags" fill className="object-cover" sizes="96px" priority />
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-5 text-sm font-medium text-bw-ink-soft">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-bw-red-dark whitespace-nowrap">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={business.phoneHref}
            className="text-sm font-semibold text-bw-ink-soft hover:text-bw-red-dark whitespace-nowrap"
          >
            {business.phoneDisplay}
          </a>
          <CallButton location="header" variant="ghost" className="px-4 py-2 text-sm" />
          <ReserveButton location="header" variant="primary" className="px-4 py-2 text-sm" />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <MobileHeaderCall />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
