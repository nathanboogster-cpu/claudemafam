import Link from "next/link";
import { business, PATHS, serviceNav, areaNav } from "@/lib/site-data";
import { MobileNav } from "./MobileNav";
import { MobileHeaderCall } from "./MobileHeaderCall";
import { BookButton } from "./CTAButton";
import { NavDropdown } from "./NavDropdown";
import { PawIcon } from "./PawIcon";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-bb-border bg-bb-cream/95 backdrop-blur supports-[backdrop-filter]:bg-bb-cream/80 font-bb-sans">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href={PATHS.home} className="flex shrink-0 items-center gap-2" aria-label={business.name}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-bb-coral-dark text-white">
            <PawIcon className="h-5 w-5" />
          </span>
          <span className="font-bb-display text-lg font-bold leading-none text-bb-ink sm:text-xl">
            Bark <span className="text-bb-coral-dark">&amp;</span> Bork
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-5 text-sm font-medium text-bb-ink-soft">
          <Link href={PATHS.home} className="hover:text-bb-coral-dark whitespace-nowrap">
            Home
          </Link>
          <Link href={PATHS.about} className="hover:text-bb-coral-dark whitespace-nowrap">
            About
          </Link>
          <NavDropdown label="Services" items={serviceNav} />
          <NavDropdown label="Service Areas" items={areaNav} />
          <Link href={PATHS.gallery} className="hover:text-bb-coral-dark whitespace-nowrap">
            Gallery
          </Link>
          <Link href={PATHS.faq} className="hover:text-bb-coral-dark whitespace-nowrap">
            FAQ
          </Link>
          <Link href={PATHS.contact} className="hover:text-bb-coral-dark whitespace-nowrap">
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a href={business.phoneHref} className="text-sm font-semibold text-bb-ink-soft hover:text-bb-coral-dark whitespace-nowrap">
            {business.phoneDisplay}
          </a>
          <BookButton location="header" variant="primary" className="px-4 py-2 text-sm" />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <MobileHeaderCall />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
