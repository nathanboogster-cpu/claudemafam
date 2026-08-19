import Link from "next/link";
import { business, mainNav, PATHS } from "@/lib/site-data";
import { PawIcon } from "./PawIcon";
import { MobileNav } from "./MobileNav";
import { MobileHeaderCall } from "./MobileHeaderCall";
import { CallButton } from "./CTAButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-border bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href={PATHS.home} className="flex items-center gap-2 shrink-0 text-ink">
          <PawIcon className="h-7 w-7 text-terracotta" />
          <span className="font-display text-lg font-bold leading-tight sm:text-xl">
            {business.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-5 text-sm font-medium text-ink-soft">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-terracotta-dark whitespace-nowrap">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a href={business.phoneHref} className="text-sm font-semibold text-ink-soft hover:text-terracotta-dark whitespace-nowrap">
            {business.phoneDisplay}
          </a>
          <CallButton location="header" variant="primary" className="px-4 py-2 text-sm" />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <MobileHeaderCall />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
