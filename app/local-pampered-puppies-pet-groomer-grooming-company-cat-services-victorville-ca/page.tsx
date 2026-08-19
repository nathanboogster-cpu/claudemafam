import type { Metadata } from "next";
import { PATHS, SITE_URL, catServices } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { CheckIcon } from "@/components/icons";

const pageUrl = `${SITE_URL}${PATHS.cat}`;

export const metadata: Metadata = {
  title: "Cat Grooming in Victorville, CA | Pampered Puppies",
  description:
    "Gentle cat grooming in Victorville, CA — full baths, deshedding, nail clipping, and moisturizing treatments. Pricing provided after a quick consultation.",
  alternates: { canonical: PATHS.cat },
};

export default function CatGroomingPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Cat Grooming", href: PATHS.cat }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Cat Grooming", url: pageUrl },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          pageUrl,
          name: "Cat Grooming",
          description:
            "Cat grooming including full baths, spot shampooing, fur trimming, nail clipping, deshedding, and moisturizing treatments, in Victorville, CA.",
        })}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Cat Grooming in Victorville, CA
          </h1>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Cats need a groomer who moves at their pace. Donna Nichols brings
            35+ years of hands-on grooming experience and a calm, patient
            touch to every cat, whether it&rsquo;s a full bath and trim or
            just a deshedding session to cut down on hairballs and shedding
            at home.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton location="cat_top" label="Book Now" />
            <BookButton location="cat_top" />
          </div>
        </div>
        <PhotoPlaceholder caption="Photo of a freshly groomed cat — real photo pending from client" aspect="portrait" />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-2xl font-bold text-ink">Cat Grooming Services</h2>
          <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {catServices.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-dark" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-2xl font-bold text-ink">Pricing</h2>
        <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
          Cat grooming pricing is provided after a quick consultation, since
          needs vary a lot by coat and temperament. Call us and we&rsquo;ll
          give you a clear price before any work begins.
        </p>
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <TestimonialCard
            quote="My cat loves to be groomed and he is very chill, so I am not sure why I had a hard time finding a regular groomer... Donna was able to brush him out and made him look and feel fantastic."
            attribution="Kristen L."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 text-center">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Ready to book your cat&rsquo;s groom?
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallButton location="cat_bottom" label="Call Now" />
          <BookButton location="cat_bottom" />
        </div>
      </section>
    </div>
  );
}
