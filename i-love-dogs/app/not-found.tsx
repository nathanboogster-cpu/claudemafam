import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell, Hero } from "@/components/SiteShell";
import { CallButton } from "@/components/Cta";
import { PATHS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: { absolute: "Page not found | I Love Dogs Pet Grooming" },
  robots: { index: false },
};

export default function NotFound() {
  return (
    <SiteShell>
      <Hero
        title="Page not found"
        lines={[
          "That page isn't here.",
          <>
            <Link href={PATHS.home}>Go to the home page</Link> or call us.
          </>,
        ]}
      >
        <div className="actions">
          <CallButton where="hero" />
        </div>
      </Hero>
    </SiteShell>
  );
}
