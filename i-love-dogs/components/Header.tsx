import Link from "next/link";
import { business, PATHS, serviceNav, areaNavLinks } from "@/lib/site-data";
import { MobileNav } from "./MobileNav";
import { MobileHeaderCall } from "./MobileHeaderCall";
import { CallButton } from "./CTAButton";
import { NavDropdown } from "./NavDropdown";
import { BrandMark } from "./BrandMark";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-border bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-4">
        <Link href={PATHS.home} className="flex min-w-0 items-center gap-2 text-ink">
          <BrandMark size={44} className="h-9 w-9 sm:h-11 sm:w-11" />
          <span className="min-w-0 leading-tight">
            <span className="block whitespace-nowrap font-display text-[13px] font-bold uppercase tracking-[0.08em] text-ink sm:text-lg sm:tracking-[0.12em]">
              {business.shortName}
            </span>
            <span className="block whitespace-nowrap font-display text-[10px] font-medium uppercase tracking-[0.12em] text-ink-soft sm:text-[11px] sm:tracking-[0.2em]">
              Pet Grooming<span className="hidden sm:inline"> · Bryn Mawr</span>
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-5 text-sm font-medium text-ink-soft">
          <Link href={PATHS.home} className="hover:text-brand whitespace-nowrap">
            Home
          </Link>
          <Link href={PATHS.about} className="hover:text-brand whitespace-nowrap">
            About
          </Link>
          <NavDropdown label="Services" items={serviceNav} />
          <NavDropdown label="Service Areas" items={areaNavLinks} />
          <Link href={PATHS.gallery} className="hover:text-brand whitespace-nowrap">
            Gallery
          </Link>
          <Link href={PATHS.faq} className="hover:text-brand whitespace-nowrap">
            FAQ
          </Link>
          <Link href={PATHS.contact} className="hover:text-brand whitespace-nowrap">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <CallButton location="header" variant="primary" className="px-4 py-2 text-sm" />
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <MobileHeaderCall />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
