import Link from "next/link";
import { SiteShell, Hero } from "@/components/SiteShell";
import { CallButton } from "@/components/Cta";
import { breadcrumbSchema, JsonLd, localBusinessSchema, pickupServiceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { PATHS } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Dog Grooming Pickup & Delivery | Bryn Mawr, PA",
  description:
    "Dog grooming with pickup and delivery from I Love Dogs in Bryn Mawr, PA. Call 610-525-7387 to confirm we cover your address.",
  path: PATHS.pickup,
});

export default function PickupPage() {
  return (
    <SiteShell path={PATHS.pickup}>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={pickupServiceSchema()} />
      <JsonLd data={breadcrumbSchema(PATHS.pickup)} />
      <Hero
        title="Dog Grooming Pickup & Delivery"
        lines={[
          "What if getting your dog to the groomer wasn't your problem?",
          "We pick up your dog and bring them back clean.",
        ]}
      >
        <div className="actions">
          <CallButton where="hero" />
        </div>
      </Hero>

      <section className="section">
        <div className="wrap narrow">
          <h2>How it works</h2>
          <ol className="steps">
            <li>
              <strong>Call us.</strong> Tell us your address so we can confirm we cover it.
            </li>
            <li>
              <strong>We pick up your dog.</strong>
            </li>
            <li>
              <strong>We groom.</strong> Warm bath and chemical-free products.{" "}
              <Link href={`${PATHS.dogGrooming}#pricing`}>See packages and prices</Link>
            </li>
            <li>
              <strong>We bring your dog home.</strong>
            </li>
          </ol>
          <p>
            We serve Bryn Mawr, Gladwyne, Haverford, Ardmore, Havertown and the greater Eastern Main Line.{" "}
            <Link href={PATHS.serviceArea}>See the service area</Link>
          </p>
          <CallButton where="body" />
        </div>
      </section>
    </SiteShell>
  );
}
