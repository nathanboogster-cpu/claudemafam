import { SiteShell, Hero } from "@/components/SiteShell";
import { CallButton } from "@/components/Cta";
import { breadcrumbSchema, JsonLd, localBusinessSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { PATHS } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "About I Love Dogs Pet Grooming | Bryn Mawr, PA",
  description:
    "I Love Dogs is a family-owned dog grooming business in Bryn Mawr, PA. Theresa Pelletier has over 50 years of experience caring for dogs.",
  path: PATHS.about,
});

export default function AboutPage() {
  return (
    <SiteShell path={PATHS.about}>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={breadcrumbSchema(PATHS.about)} />
      <Hero
        title="About I Love Dogs"
        lines={["Who will be handling your dog?", "A family business with decades of hands-on experience."]}
      >
        <div className="actions">
          <CallButton where="hero" />
        </div>
      </Hero>

      <section className="section">
        <div className="wrap narrow">
          <h2>The people behind I Love Dogs</h2>
          <p>
            I Love Dogs is family-owned and run by Bob and Theresa Pelletier.
            <br />
            Theresa has over 50 years of experience caring for dogs.
            <br />
            Groomer Jolie has 15 years of professional grooming experience.
          </p>
        </div>
      </section>

      <section className="section band">
        <div className="wrap narrow">
          <h2>How we groom</h2>
          <ul className="check">
            <li>Warm baths from a tankless heating system.</li>
            <li>Chemical-free washing products.</li>
            <li>Three packages, from $75.</li>
            <li>Pickup and delivery when you need it.</li>
          </ul>
          <CallButton where="body" />
        </div>
      </section>
    </SiteShell>
  );
}
