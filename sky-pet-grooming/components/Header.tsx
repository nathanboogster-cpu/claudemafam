import Link from "next/link";
import { business, mainNav, PATHS } from "@/lib/site-data";
import { MobileNav } from "./MobileNav";
import { BookButton, CallIconButton, PhoneLink } from "./CTAButton";
import { Logo } from "./Logo";

export function Header() {
  return (
    <>
      {/* Top strip: what, where and the phone number, on every page. */}
      <div className="bg-brand text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-x-4 px-4 py-1.5 text-xs font-semibold sm:justify-between sm:text-sm">
          <p>
            Mobile dog &amp; cat grooming <span className="hidden sm:inline">· {business.area}</span>
          </p>
          <p className="hidden sm:block">
            Call{" "}
            <PhoneLink location="top_strip" className="inline-flex min-h-6 items-center text-white underline underline-offset-2" />
          </p>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-4">
          <Link href={PATHS.home} className="shrink-0" aria-label={`${business.name} home`}>
            <Logo className="h-14 w-auto" preload />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 text-[15px] font-semibold text-ink-soft lg:flex">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-accent-dark">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <PhoneLink location="header" className="inline-flex min-h-6 items-center whitespace-nowrap" />
            <BookButton location="header" className="px-5 py-2.5 text-sm" />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <CallIconButton location="header_mobile" />
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
