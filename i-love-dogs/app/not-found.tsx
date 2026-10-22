import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { CallButton } from "@/components/CTAButton";
import { PATHS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: "Page not found | I Love Dogs Pet Grooming" },
  robots: { index: false },
};

// Root-level so every unmatched URL gets it, with the same chrome as the site.
export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <section className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">Page not found</h1>
          <p className="mt-4 text-lg text-ink-soft">
            That page isn&rsquo;t here.
            <br />
            <Link href={PATHS.home} className="font-semibold text-brand hover:underline">
              Go to the home page
            </Link>{" "}
            or call us.
          </p>
          <div className="mt-6 flex justify-center">
            <CallButton location="not_found" />
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
