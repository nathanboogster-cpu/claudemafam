import Link from "next/link";
import { PATHS, serviceNav, proofNav, business } from "@/lib/site-data";
import { MobileNav } from "./MobileNav";
import { NavDropdown } from "./NavDropdown";
import { BookCallButton } from "./CTAButton";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-tf-border bg-tf-paper/95 backdrop-blur supports-[backdrop-filter]:bg-tf-paper/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link
          href={PATHS.home}
          aria-label={`${business.name} — home`}
          className="shrink-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tf-brown-dark"
        >
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          <NavDropdown label="What we do" items={serviceNav} />
          <NavDropdown label="Proof" items={proofNav} />
          <Link
            href={PATHS.caseStudies}
            className="whitespace-nowrap text-sm font-medium text-tf-ink-soft hover:text-tf-brown-dark"
          >
            Case Studies
          </Link>
          <Link
            href={PATHS.resources}
            className="whitespace-nowrap text-sm font-medium text-tf-ink-soft hover:text-tf-brown-dark"
          >
            Resources
          </Link>
          <Link
            href={PATHS.about}
            className="whitespace-nowrap text-sm font-medium text-tf-ink-soft hover:text-tf-brown-dark"
          >
            About
          </Link>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <span className="text-sm font-semibold text-tf-ink-soft">$297/mo</span>
          <BookCallButton location="header" className="px-5 py-2 text-sm" showArrow={false} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
