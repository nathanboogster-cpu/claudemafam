import { SiteShell, Hero } from "@/components/SiteShell";
import { CallButton, DirectionsLink, PhoneLink } from "@/components/Cta";
import { breadcrumbSchema, JsonLd, localBusinessSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, PATHS } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Contact I Love Dogs Pet Grooming | Bryn Mawr, PA",
  description: "Call I Love Dogs Pet Grooming at 610-525-7387 or visit 723 County Line Rd, Bryn Mawr, PA 19010.",
  path: PATHS.contact,
});

export default function ContactPage() {
  return (
    <SiteShell path={PATHS.contact}>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={breadcrumbSchema(PATHS.contact)} />
      <Hero title="Contact I Love Dogs" lines={["The fastest way to book is a phone call."]}>
        <div className="actions">
          <CallButton where="hero" />
        </div>
      </Hero>

      <section className="section">
        <div className="wrap narrow">
          <h2>Address</h2>
          <address>
            {business.street}
            <br />
            {business.city}, {business.region} {business.zip}
          </address>
          <p>
            <DirectionsLink where="body" />
          </p>
          <h2>Hours</h2>
          <p>{business.hoursNote}</p>
          <h2>Phone</h2>
          <p>
            <PhoneLink where="body" />
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
