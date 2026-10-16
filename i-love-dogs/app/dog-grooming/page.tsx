import Link from "next/link";
import { SiteShell, Hero } from "@/components/SiteShell";
import { CallButton } from "@/components/Cta";
import { breadcrumbSchema, groomingServiceSchema, JsonLd, localBusinessSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { packages, PATHS, priceNote } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Dog Grooming Prices & Packages | Bryn Mawr, PA",
  description:
    "Dog grooming packages in Bryn Mawr, PA: Bath & Pamper from $75, The Works from $115, Full Spa Day from $150. Call 610-525-7387.",
  path: PATHS.dogGrooming,
});

export default function DogGroomingPage() {
  return (
    <SiteShell path={PATHS.dogGrooming}>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={groomingServiceSchema()} />
      <JsonLd data={breadcrumbSchema(PATHS.dogGrooming)} />
      <Hero
        title="Dog Grooming in Bryn Mawr"
        lines={["Not sure which groom your dog needs?", "Three packages, with starting prices up front."]}
      >
        <div className="actions">
          <CallButton where="hero" />
        </div>
      </Hero>

      <section className="section">
        <div className="wrap">
          <h2 id="pricing">Grooming packages and prices</h2>
          <div className="cards pricing">
            {packages.map((p) => (
              <div className="card" key={p.name}>
                <h3>{p.name}</h3>
                <p className="price">{`From $${p.price}`}</p>
                <p>{p.description}</p>
                {p.plus.length > 0 ? (
                  <ul className="check">
                    {p.plus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
          <p className="muted small">{priceNote}</p>
        </div>
      </section>

      <section className="section band">
        <div className="wrap narrow">
          <h2>How we wash</h2>
          <p>
            We use chemical-free washing products.
            <br />
            The water is heated by a tankless system, so the bath stays warm throughout.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <h2>Booking</h2>
          <p>Call 610-525-7387 to book and to get a quote for your dog.</p>
          <p>
            Can&apos;t drop off? <Link href={PATHS.pickup}>Ask about pickup and delivery.</Link>
          </p>
          <CallButton where="body" />
        </div>
      </section>
    </SiteShell>
  );
}
