import Link from "next/link";
import { SiteShell, Hero } from "@/components/SiteShell";
import { CallButton } from "@/components/Cta";
import { FaqList } from "@/components/Faq";
import { JsonLd, localBusinessSchema, webSiteSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { business, PATHS } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Dog Grooming in Bryn Mawr, PA | I Love Dogs Pet Grooming",
  description:
    "Dog grooming in Bryn Mawr, PA from $75. Warm baths, chemical-free products and pickup and delivery. Call 610-525-7387.",
  path: PATHS.home,
});

export default function HomePage() {
  return (
    <SiteShell path={PATHS.home}>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={webSiteSchema()} />
      <Hero
        kicker="Family-owned on the Main Line"
        title="Dog Grooming in Bryn Mawr, PA"
        lines={[
          "Ever had a dog fight the bath the whole way through?",
          "A cold bath will do that.",
          "Ours never runs cold, because we heat the water with a tankless system.",
        ]}
      >
        <div className="actions">
          <CallButton where="hero" />
          <Link href={PATHS.dogGrooming} className="btn btn-outline">
            See what&apos;s included
          </Link>
        </div>
        <p className="note">Grooming packages from $75. Call for a quote and current hours.</p>
      </Hero>

      <section className="section">
        <div className="wrap">
          <h2>Why Main Line dog owners call us</h2>
          <div className="cards">
            <div className="card">
              <h3>Warm bath, every time</h3>
              <p>Tankless water heating means the bath stays warm from the first rinse to the last.</p>
            </div>
            <div className="card">
              <h3>Chemical-free washing products</h3>
              <p>We wash with chemical-free products.</p>
            </div>
            <div className="card">
              <h3>Clear starting prices</h3>
              <p>Bath &amp; Pamper from $75, The Works from $115, Full Spa Day from $150.</p>
              <p>
                <Link href={`${PATHS.dogGrooming}#pricing`}>See what each includes</Link>
              </p>
            </div>
            <div className="card">
              <h3>We&apos;ll pick up your dog</h3>
              <p>
                Busy day? We offer <Link href={PATHS.pickup}>pickup and delivery</Link>. Call to confirm your
                address.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap two-col">
          <div>
            <h2>Family-owned, with decades of experience</h2>
            <p>
              Theresa Pelletier has over 50 years of experience caring for dogs.
              <br />
              Groomer Jolie has 15 years of professional grooming experience.
            </p>
            <p>
              <Link href={PATHS.about}>Meet the family</Link>
            </p>
          </div>
          <div>
            <h2>Serving the Eastern Main Line</h2>
            <p>Bryn Mawr, Gladwyne, Haverford, Ardmore, Havertown and nearby.</p>
            <p>
              <Link href={PATHS.serviceArea}>See where we serve</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <h2>Common questions</h2>
          <FaqList only={[1, 2, 7]} />
          <p>
            <Link href={PATHS.faq}>More questions</Link>
          </p>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Ready to book your dog&apos;s groom?</h2>
          <p>{business.addressFull}</p>
          <CallButton where="bottom-cta" className="btn btn-accent" />
        </div>
      </section>
    </SiteShell>
  );
}
