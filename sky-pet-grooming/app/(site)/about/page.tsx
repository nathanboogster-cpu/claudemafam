import { business, PATHS, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { BookButton, CallButton, PhoneLink } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { Pillars } from "@/components/Pillars";
import { Pic } from "@/components/Pic";
import { BottomCta } from "@/components/BottomCta";

export const metadata = pageMetadata({
  title: "About Sky Pet Grooming | Mobile Grooming, SF Peninsula",
  description:
    "Sky Pet Grooming is a licensed, insured and eco-friendly mobile grooming service for dogs and cats in San Francisco and the Peninsula.",
  path: PATHS.about,
});

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

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 md:grid-cols-[1.1fr_1fr]">
        <div>
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-2 font-display text-4xl font-extrabold text-ink sm:text-5xl">About {business.name}</h1>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              {business.name} is a mobile grooming service for dogs and cats. Instead of you taking your pet to a salon, our
              pink and blue grooming van comes to your home in {business.area}.
            </p>
            <p>
              The van has everything a salon has: a full bathtub, a grooming table and professional dryers. Your pet is
              groomed right outside your door, with no car ride and no waiting room.
            </p>
            <p>We are licensed and insured, and we run an eco-friendly grooming service.</p>
            <p>
              Call us at <PhoneLink location="about" className="inline-flex min-h-6 items-center" /> or{" "}
              <PhoneLink which="phoneAlt" location="about" className="inline-flex min-h-6 items-center" />, or book online
              any time.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <BookButton location="about_top" />
            <CallButton location="about_top" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-lg">
            <Pic slug="sky-pet-grooming-van" hero fill sizes="(min-width: 768px) 240px, 50vw" className="object-cover object-[50%_70%]" />
          </div>
          <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl shadow-lg">
            <Pic slug="white-dog-outside-grooming-van" fill sizes="(min-width: 768px) 240px, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Pillars eyebrow="What We Stand For" title={business.slogan} />
        </div>
      </section>

      <BottomCta title="Ready when you are" location="about_bottom" />
    </div>
  );
}
