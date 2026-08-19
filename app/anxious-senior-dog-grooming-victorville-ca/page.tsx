import type { Metadata } from "next";
import Link from "next/link";
import { PATHS, SITE_URL } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { CheckIcon, HeartIcon } from "@/components/icons";
import { FaqBlock } from "@/components/FaqBlock";

const pageUrl = `${SITE_URL}${PATHS.anxious}`;

export const metadata: Metadata = {
  title: "Grooming for Anxious, Senior & Difficult Dogs | Victorville, CA | Pampered Puppies",
  description:
    "Patient, advance-notice grooming for aggressive, anxious, senior, and difficult-to-handle dogs in Victorville, CA. First-aid trained owner-groomer, minimal cage time.",
  alternates: { canonical: PATHS.anxious },
};

const approach = [
  "Advance phone notice before the appointment, so we know what to expect and can prepare",
  "Minimal cage/kennel time — one-on-one attention instead of an assembly line",
  "A quick consultation before any clippers come out",
  "First-aid trained, including for seizures and heart attacks",
  "Work at your dog's pace — no rushing a nervous or difficult dog",
];

const anxiousFaqs = [
  {
    question: "Do you really groom aggressive dogs?",
    answer:
      "Yes — with advance phone notice so our staff can prepare and give your dog the extra time and patience they need.",
  },
  {
    question: "What should I tell you before booking?",
    answer:
      "Let us know about any aggression, anxiety, past grooming issues, or physical limitations (common with senior dogs) when you call. The more we know ahead of time, the better we can prepare.",
  },
  {
    question: "Is my senior dog too old to be groomed?",
    answer:
      "Most senior dogs do fine with a patient, gentle approach and minimal cage time. Call us to talk through your dog's specific needs.",
  },
  {
    question: "Can this be done as a mobile visit instead?",
    answer:
      'Yes — some anxious dogs do better at home. "Pampered Puppies At Your Door" is available for anxious, senior, and difficult dogs too.',
  },
];

export default function AnxiousSeniorDogGroomingPage() {
  return (
    <div>
      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Anxious & Senior Dogs", href: PATHS.anxious },
        ]}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Anxious & Senior Dogs", url: pageUrl },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          pageUrl,
          name: "Grooming for Anxious, Senior & Difficult Dogs",
          description:
            "Advance-notice, low-cage-time grooming for aggressive, anxious, senior, and difficult-to-handle dogs in Victorville, CA.",
        })}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <div className="flex items-center gap-2 text-terracotta-dark">
            <HeartIcon className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Specialty Grooming</span>
          </div>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Grooming for Anxious, Senior &amp; Difficult Dogs
          </h1>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Some dogs need more than a standard groom — a dog other groomers
            have turned away, a senior dog with sore joints, or a pup who
            just gets overwhelmed. Donna Nichols has 35+ years of hands-on
            experience and is first-aid trained, and welcomes these dogs
            with advance notice so she can prepare and give them the time
            they need.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton location="anxious_top" label="Call to Discuss Your Dog" />
            <BookButton location="anxious_top" />
          </div>
        </div>
        <PhotoPlaceholder caption="Photo of Donna calmly grooming a nervous dog — real photo pending from client" aspect="portrait" />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-2xl font-bold text-ink">Our Approach</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {approach.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-cream p-4">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-sage-dark" />
                <span className="text-ink-soft text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 space-y-6">
        <TestimonialCard
          quote="This review is specifically for groomer Donna - She is simply is the best dog groomer, period... The grooming itself has always been superb, which speaks a lot given that he is a double-coated German Shepherd and Terrier mix, with two different texture fur and three different colored hairs. His nails are dark and other groomers have made accidents which leads to bleeding, but never had that concern with Donna."
          attribution="Lila S."
        />
        <TestimonialCard
          quote="Took both my boxer babies to Donna. They came home looking amazing. She was so gentle and patient with my boy who was hesitant and moody... Shop was clean and the rest of the staff was also very nice and Informative."
          attribution="Cora D."
        />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <FaqBlock items={anxiousFaqs} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 text-center">
        <p className="text-ink-soft">
          Also see our{" "}
          <Link href={PATHS.dog} className="font-semibold text-terracotta-dark hover:underline">
            Dog Grooming
          </Link>{" "}
          and{" "}
          <Link href={PATHS.mobile} className="font-semibold text-terracotta-dark hover:underline">
            Mobile Grooming
          </Link>{" "}
          pages.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 text-center">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Let&rsquo;s talk about your dog&rsquo;s needs
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallButton location="anxious_bottom" label="Call Now" />
          <BookButton location="anxious_bottom" />
        </div>
      </section>
    </div>
  );
}
