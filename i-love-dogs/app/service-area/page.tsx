import { SiteShell, Hero } from "@/components/SiteShell";
import { CallButton, DirectionsLink } from "@/components/Cta";
import { breadcrumbSchema, JsonLd, localBusinessSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, PATHS, towns } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Dog Groomer Serving the Eastern Main Line | Bryn Mawr, PA",
  description:
    "I Love Dogs serves Bryn Mawr, Gladwyne, Haverford, Ardmore, Havertown and the greater Eastern Main Line. Call 610-525-7387.",
  path: PATHS.serviceArea,
});

export default function ServiceAreaPage() {
  return (
    <SiteShell path={PATHS.serviceArea}>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={breadcrumbSchema(PATHS.serviceArea)} />
      <Hero
        title="Serving the Eastern Main Line"
        lines={["Our salon is on County Line Road in Bryn Mawr.", "We serve dog owners across the Eastern Main Line."]}
      >
        <div className="actions">
          <CallButton where="hero" />
        </div>
      </Hero>

      <section className="section">
        <div className="wrap narrow">
          <h2>Towns we serve</h2>
          <ul className="check">
            {towns.map((t) => (
              <li key={t}>{t}</li>
            ))}
            <li>The greater Eastern Main Line</li>
          </ul>
          <p>Not sure whether you&apos;re in range for pickup and delivery? Call 610-525-7387 with your address.</p>
        </div>
      </section>

      <section className="section band">
        <div className="wrap narrow">
          <h2>Find the salon</h2>
          <address>
            {business.street}
            <br />
            {business.city}, {business.region} {business.zip}
          </address>
          <p>
            <DirectionsLink where="body" />
          </p>
          <CallButton where="body" />
        </div>
      </section>
    </SiteShell>
  );
}
