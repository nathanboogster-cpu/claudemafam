import Link from "next/link";
import { business, people, PATHS, SITE_URL, teamPhotos } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { CallButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { CheckIcon } from "@/components/icons";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Eyebrow } from "@/components/Eyebrow";
import { StatBand } from "@/components/StatBand";
import { BottomCta } from "@/components/BottomCta";
import { Photo } from "@/components/Photo";
import { RecentWork } from "@/components/RecentWork";

export const metadata = pageMetadata({
  title: "About I Love Dogs Pet Grooming | Bryn Mawr, PA",
  description:
    "I Love Dogs is a family-owned dog grooming business in Bryn Mawr, PA. Theresa Pelletier has over 50 years of experience caring for dogs.",
  path: PATHS.about,
});

const howWeGroom = [
  "Warm baths from a tankless heating system.",
  "Chemical-free washing products.",
  "Three packages, from $75.",
  "Pickup and delivery when you need it.",
];

export default function AboutPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "About", href: PATHS.about }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "About", url: `${SITE_URL}${PATHS.about}` },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">About I Love Dogs</h1>
          <p className="mt-4 text-lg text-ink-soft">
            Who will be handling your dog?
            <br />
            A family business with decades of hands-on experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton location="about_top" />
          </div>
        </div>
        <Photo
          photo={teamPhotos.theresaTwoDogs}
          aspect="portrait"
          position="top"
          preload
          caption="Theresa Pelletier, who runs I Love Dogs with Bob Pelletier."
        />
      </section>

      <StatBand />

      <section className="bg-white border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>The Family</Eyebrow>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink">The People Behind I Love Dogs</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              I Love Dogs is family-owned and run by {business.owners}.
              <br />
              {people.theresa}
              <br />
              {people.jolie}
            </p>
          </div>
          <div>
            <Eyebrow>Our Approach</Eyebrow>
            <h2 className="mt-1 font-display text-2xl font-bold text-ink">How We Groom</h2>
            <ul className="mt-4 space-y-3">
              {howWeGroom.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-cream p-4">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="text-sm text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              <Link href={`${PATHS.dogGrooming}#pricing`} className="inline-flex min-h-[44px] items-center font-semibold text-brand hover:underline">
                See packages and prices →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <Eyebrow>The Team</Eyebrow>
          <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">Who Will Be Handling Your Dog</h2>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <Photo
            photo={teamPhotos.jolieAndTheresa}
            aspect="square"
            sizes="(max-width: 640px) 100vw, 33vw"
            caption="Groomer Jolie (left), with 15 years of professional grooming experience, and Theresa Pelletier."
          />
          <Photo
            photo={teamPhotos.theresaHug}
            aspect="square"
            position="top"
            sizes="(max-width: 640px) 100vw, 33vw"
            caption="Theresa Pelletier in the grooming room."
          />
          <Photo
            photo={teamPhotos.theresaKiss}
            aspect="square"
            position="top"
            sizes="(max-width: 640px) 100vw, 33vw"
            caption="Theresa has over 50 years of experience caring for dogs."
          />
        </div>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <WhyChooseUs />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <RecentWork offset={2} />
      </section>

      <BottomCta title="Book with the I Love Dogs family" location="about_bottom" />
    </div>
  );
}
