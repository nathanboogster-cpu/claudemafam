import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageShell, Prose, CheckList } from "@/components/ServicePageShell";
import { Section, SectionHeading } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { serviceFaqs } from "@/lib/faq-data";
import { business, market, servicePath, blogPostPath } from "@/lib/site-data";

// -----------------------------------------------------------------------------
// Search intent owned here: "dog bath near me", "dog bath and brush",
// "deshedding bath", "mobile dog bath" — owners who do NOT want a haircut.
// Deliberately does not compete with /services/mobile-dog-grooming: this page
// is about the appointment WITHOUT a cut, and says so in the first paragraph.
// -----------------------------------------------------------------------------

export const metadata: Metadata = pageMetadata({
  title: `Mobile Dog Bath & Blow Dry in ${market.cityState}`,
  description:
    `A thorough bath and full blow dry for your dog, at your home in the ${market.cityState} area — no haircut, no drop-off. ` +
    `Call ${business.phoneDisplay} to book.`,
  path: servicePath("dog-bath-and-blow-dry"),
});

export default function DogBathAndBlowDryPage() {
  return (
    <ServicePageShell
      slug="dog-bath-and-blow-dry"
      eyebrow="Bath & Blow Dry · At Your Home"
      h1={`Mobile Dog Bath & Blow Dry in ${market.cityState}`}
      intro="The appointment for dogs who don't need a haircut — a proper bath, a full blow dry and a brush-out, done at your address. It's the service that keeps a coat manageable between full grooms, and the one most double-coated dogs actually need."
      heroBullets={[
        "Bath worked down to the skin",
        "Full blow dry, not air-dried",
        "Brush-out to clear dead coat",
        "No haircut — and no haircut price",
      ]}
      art="bath"
      schemaDescription={`Mobile dog bathing and blow dry carried out at the customer's home in the ${market.cityState} area: a thorough bath, a full blow dry and a brush-out, without a haircut.`}
      faqs={serviceFaqs["dog-bath-and-blow-dry"]}
    >
      <Section tone="white">
        <Prose title="What This Appointment Is — And Isn't">
          <p>
            A bath and blow dry is a complete wash and dry, without a cut. If your dog&rsquo;s coat is in reasonable
            condition and the problem is that they are dirty, smelly, or dropping hair all over the house, this is the
            appointment you want — not a full groom.
          </p>
          <p>
            If the coat has grown out and needs shortening, or there is matting that needs clipping through, that
            crosses into{" "}
            <Link
              href={servicePath("mobile-dog-grooming")}
              className="font-bold text-goc-magenta-darker underline underline-offset-4"
            >
              full-service grooming
            </Link>{" "}
            instead. Describe the coat on the phone and you&rsquo;ll be told which one your dog actually needs rather
            than sold the bigger one.
          </p>
        </Prose>
        <CheckList
          items={[
            "A thorough bath, worked down to the skin rather than over the top of the coat",
            "A full blow dry",
            "A brush-out while drying, to lift loose and dead coat",
            "Nails and ears can be added — just say when you book",
          ]}
        />
      </Section>

      <Section tone="deep">
        <div className="grid gap-10 lg:grid-cols-2">
          <Prose title="Why The Blow Dry Is The Part That Matters">
            <p>
              Most people think of the bath as the service and the drying as tidying up afterwards. For a
              double-coated dog it&rsquo;s the other way round.
            </p>
            <p>
              A shedding coat holds an enormous amount of dead undercoat trapped down near the skin. Washing loosens
              it; a proper blow dry is what actually drives it out. That is why a dog can come back from a professional
              bath shedding dramatically less than one bathed in the tub at home and left to dry on a towel.
            </p>
            <p>
              Air-drying also works against you in a second way: a coat left to dry on its own tightens as it dries,
              pulling small tangles into firmer ones. Drying properly while brushing is what prevents that.
            </p>
          </Prose>
          <Prose title="Which Dogs This Suits">
            <p>
              <strong className="text-goc-ink">Shedding double coats</strong> — Huskies, German Shepherds, Golden
              Retrievers, Labradors, Pomeranians. These coats generally shouldn&rsquo;t be clipped short, so a bath and
              blow dry, more often during heavy shedding periods, is the whole grooming plan.
            </p>
            <p>
              <strong className="text-goc-ink">Short smooth coats</strong> — Beagles, Boxers, Pit Bull types,
              Dachshunds. They don&rsquo;t need cutting at all, so this plus nails and ears is usually everything.
            </p>
            <p>
              <strong className="text-goc-ink">Growing coats between grooms</strong> — a doodle or Shih Tzu halfway
              through a grooming cycle who just needs freshening up, without losing the length you paid for last time.
            </p>
          </Prose>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Scheduling"
          title="How Often Is Reasonable"
          intro="More often than a full groom, less often than you'd think for most coats."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { title: "Double coats", body: "Every 6–12 weeks, tightening up through heavy shedding periods when the undercoat is releasing in quantity." },
            { title: "Short smooth coats", body: "Every 6–12 weeks, often paired with a nail trim which is usually the more urgent half." },
            { title: "Between full grooms", body: "A bath partway through a grooming cycle keeps a growing coat manageable without shortening it." },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border-2 border-goc-border bg-goc-cream p-6">
              <h3 className="font-goc-display text-lg font-extrabold text-goc-ink">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-goc-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <Prose>
          <p className="mt-8">
            There&rsquo;s a fuller breakdown by coat type in{" "}
            <Link href={blogPostPath("how-often-should-a-dog-be-groomed")}>how often should a dog be groomed?</Link> —
            and if you&rsquo;d rather just ask, call {business.phoneDisplay} and describe the coat.
          </p>
        </Prose>
      </Section>
    </ServicePageShell>
  );
}
