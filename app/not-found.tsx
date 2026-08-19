import Link from "next/link";
import { PATHS } from "@/lib/site-data";
import { BookButton } from "@/components/CTAButton";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">Page Not Found</h1>
      <p className="mt-4 text-ink-soft">
        Looks like this page wandered off. Let&rsquo;s get you back on track.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href={PATHS.home}
          className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-terracotta px-6 py-3 text-base font-semibold text-white hover:bg-terracotta-dark"
        >
          Back to Home
        </Link>
        <BookButton location="404" />
      </div>
    </div>
  );
}
