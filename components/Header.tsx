import Link from "next/link";
import { business, PATHS, serviceNav, areaNavLinks } from "@/lib/site-data";
import { PawIcon } from "./PawIcon";
import { MobileNav } from "./MobileNav";
import { MobileHeaderCall } from "./MobileHeaderCall";
import { CallButton } from "./CTAButton";
import { NavDropdown } from "./NavDropdown";

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
          <Link href={PATHS.home} className="hover:text-terracotta-dark whitespace-nowrap">
            Home
          </Link>
          <Link href={PATHS.about} className="hover:text-terracotta-dark whitespace-nowrap">
            About
          </Link>
          <NavDropdown label="Services" items={serviceNav} />
          <NavDropdown label="Service Areas" items={areaNavLinks} />
          <Link href={PATHS.gallery} className="hover:text-terracotta-dark whitespace-nowrap">
            Gallery
          </Link>
          <Link href={PATHS.reviews} className="hover:text-terracotta-dark whitespace-nowrap">
            Reviews
          </Link>
          <Link href={PATHS.faq} className="hover:text-terracotta-dark whitespace-nowrap">
            FAQ
          </Link>
          <Link href={PATHS.contact} className="hover:text-terracotta-dark whitespace-nowrap">
            Contact
          </Link>
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
