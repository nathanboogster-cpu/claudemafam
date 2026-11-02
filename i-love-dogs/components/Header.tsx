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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href={PATHS.home} className="flex items-center gap-2 shrink-0 text-ink">
          <BrandMark />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold sm:text-xl">{business.shortName}</span>
            <span className="block text-xs text-ink-soft">Pet Grooming · Bryn Mawr, PA</span>
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

        <div className="flex items-center gap-2 lg:hidden">
          <MobileHeaderCall />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
