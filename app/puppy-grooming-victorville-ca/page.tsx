import type { Metadata } from "next";
import Link from "next/link";
import { PATHS, SITE_URL } from "@/lib/site-data";
import { CallButton, BookButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { CheckIcon, PuppyIcon } from "@/components/icons";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FaqBlock } from "@/components/FaqBlock";

const pageUrl = `${SITE_URL}${PATHS.puppy}`;

export const metadata: Metadata = {
  title: "Puppy Grooming in Victorville, CA | Pampered Puppies",
  description:
    "A patient, low-stress start to grooming for your puppy in Victorville, CA. Gentle first visits from an owner-groomer with 35+ years of experience.",
  alternates: { canonical: PATHS.puppy },
};

const firstVisitIncludes = [
  "A gentle bath",
  "Light trim around feet, face, and rear as needed",
  "Nail trim & filing",
  "Ear cleaning",
  "Getting comfortable with clippers, water, and handling",
];

const puppyFaqs = [
  {
    question: "When should I start grooming my puppy?",
    answer:
      "It varies by breed and coat. Call us and we'll talk through the right timing for your puppy.",
  },
  {
    question: "Will my puppy's first visit be stressful?",
    answer:
      "We work at your puppy's pace, with minimal cage time and a calm, patient approach — the goal is a positive first experience.",
  },
  {
    question: "How much does puppy grooming cost?",
    answer:
      "Puppy grooming is priced the same as dog grooming — starting at $55–65 for small dogs and $65–85 for large dogs, depending on breed, coat, and temperament.",
  },
  {
    question: "Do you offer mobile puppy grooming?",
    answer:
      'Yes — "Pampered Puppies At Your Door" can bring your puppy\'s first groom right to your home.',
  },
];

export default function PuppyGroomingPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Puppy Grooming", href: PATHS.puppy }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Puppy Grooming", url: pageUrl },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          pageUrl,
          name: "Puppy Grooming",
          description:
            "A patient, low-stress introduction to grooming for puppies, including bathing, light trimming, nail trims, and ear cleaning, in Victorville, CA.",
        })}
      />

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <div className="flex items-center gap-2 text-terracotta-dark">
            <PuppyIcon className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Puppy Grooming</span>
          </div>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            A Gentle Start to Grooming, in Victorville, CA
          </h1>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Your puppy&rsquo;s first grooming visits set the tone for years of
            appointments to come. Donna Nichols brings 35+ years of hands-on
            grooming experience and a patient, low-cage-time approach, so
            your puppy learns that grooming is calm and safe — not
            something to fear.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CallButton location="puppy_top" label="Call Now" />
            <BookButton location="puppy_top" />
          </div>
        </div>
        <PhotoPlaceholder caption="Photo of a puppy's first grooming visit — real photo pending from client" aspect="portrait" />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-2xl font-bold text-ink">What a First Visit Typically Includes</h2>
          <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {firstVisitIncludes.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-dark" />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm text-ink-soft">
            As your puppy grows and gets more comfortable, grooms can expand
            to the full range of dog grooming services — see our{" "}
            <Link href={PATHS.dog} className="font-semibold text-terracotta-dark hover:underline">
              full Dog Grooming service list
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <WhyChooseUs title="Why Pet Parents Trust Us With Their Puppies" />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <TestimonialCard
            quote="Took both my boxer babies to Donna. They came home looking amazing. She was so gentle and patient with my boy who was hesitant and moody... Shop was clean and the rest of the staff was also very nice and Informative."
            attribution="Cora D."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <FaqBlock items={puppyFaqs} title="Puppy Grooming FAQ" />
      </section>

      <section className="bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">
          <p className="text-ink-soft">
            Prefer we come to you?{" "}
            <Link href={PATHS.mobile} className="font-semibold text-terracotta-dark hover:underline">
              Pampered Puppies At Your Door
            </Link>{" "}
            grooms puppies too.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 text-center">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Book your puppy&rsquo;s first groom
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <CallButton location="puppy_bottom" label="Call Now" />
          <BookButton location="puppy_bottom" />
        </div>
      </section>
    </div>
  );
}
