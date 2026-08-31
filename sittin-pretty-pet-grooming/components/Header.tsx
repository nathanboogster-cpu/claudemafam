import Link from "next/link";
import { business, PATHS, serviceNav, areaNav } from "@/lib/site-data";
import { MobileNav } from "./MobileNav";
import { MobileHeaderCall } from "./MobileHeaderCall";
import { CallButton } from "./CTAButton";
import { NavDropdown } from "./NavDropdown";
import { PawIcon } from "./PawIcon";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-sp-border bg-sp-cream/95 backdrop-blur supports-[backdrop-filter]:bg-sp-cream/80 font-sp-sans">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href={PATHS.home} className="flex items-center gap-2 shrink-0 text-sp-ink">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sp-green-dark text-sp-cream">
            <PawIcon className="h-6 w-6" />
          </span>
          <span className="font-sp-display text-lg font-bold leading-tight sm:text-xl">{business.shortName}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-5 text-sm font-medium text-sp-ink-soft">
          <Link href={PATHS.home} className="hover:text-sp-green-dark whitespace-nowrap">
            Home
          </Link>
          <Link href={PATHS.about} className="hover:text-sp-green-dark whitespace-nowrap">
            About
          </Link>
          <NavDropdown label="Services" items={serviceNav} />
          <NavDropdown label="Service Areas" items={areaNav} />
          <Link href={PATHS.gallery} className="hover:text-sp-green-dark whitespace-nowrap">
            Gallery
          </Link>
          <Link href={PATHS.reviews} className="hover:text-sp-green-dark whitespace-nowrap">
            Reviews
          </Link>
          <Link href={PATHS.faq} className="hover:text-sp-green-dark whitespace-nowrap">
            FAQ
          </Link>
          <Link href={PATHS.contact} className="hover:text-sp-green-dark whitespace-nowrap">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a href={business.phoneHref} className="text-sm font-semibold text-sp-ink-soft hover:text-sp-green-dark whitespace-nowrap">
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
