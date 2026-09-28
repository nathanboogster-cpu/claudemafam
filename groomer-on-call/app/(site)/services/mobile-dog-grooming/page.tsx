import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageShell, Prose, CheckList } from "@/components/ServicePageShell";
import { Section, SectionHeading } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { serviceFaqs } from "@/lib/faq-data";
import { business, market, servicePath, PATHS, blogPostPath } from "@/lib/site-data";

// -----------------------------------------------------------------------------
// PRIMARY COMMERCIAL PAGE.
//
// Search intent owned here: the head term — "mobile dog grooming [city]",
// "mobile dog groomer near me", "dog groomer that comes to your home" — plus
// "full service dog grooming" and "dog grooming and styling", which are the
// same buying intent expressed differently. Deliberately ONE page rather than
// three near-identical ones: separate /full-service-dog-grooming and
// /dog-grooming-and-styling pages would cannibalise this one, and neither
// could be written without repeating it.
//
// Distinct from /services/dog-bath-and-blow-dry, which owns the no-haircut
// intent, and from /services/dog-nail-trimming, which owns the standalone
// quick-service intent.
// -----------------------------------------------------------------------------

export const metadata: Metadata = pageMetadata({
  title: `Mobile Dog Grooming in ${market.cityState}`,
  description:
    `Full-service mobile dog grooming in the ${market.cityState} area — bath, blow dry, haircut and styling, nails and ears, all at your home. ` +
    `Call ${business.phoneDisplay} to book.`,
  path: servicePath("mobile-dog-grooming"),
});

export default function MobileDogGroomingPage() {
  return (
    <ServicePageShell
      slug="mobile-dog-grooming"
      eyebrow="Full-Service Dog Grooming · At Your Home"
      h1={`Mobile Dog Grooming in ${market.cityState}`}
      intro="A complete groom — bath, full blow dry, brush-out, haircut and styling, nails and ears — carried out at your address. You don't drive anywhere, and your dog doesn't spend the day waiting for a slot."
      heroBullets={[
        "Bath, blow dry and brush-out",
        "Haircut and styling",
        "Nail trim and ear cleaning",
        "No drop-off, no pick-up",
      ]}
      art="tools"
      schemaDescription={`Full-service mobile dog grooming carried out at the customer's home in the ${market.cityState} area: bath, blow dry, brush-out, haircut and styling, nail trimming and ear cleaning.`}
      faqs={serviceFaqs["mobile-dog-grooming"]}
    >
      <Section tone="white">
        <Prose title="What A Full-Service Groom Includes">
          <p>
            A full-service groom is the whole dog, start to finish, in one appointment. It is the right booking when
            your dog needs a haircut — not just a wash — and when the coat needs properly working through rather than
            rinsing off.
          </p>
        </Prose>
        <CheckList
          items={[
            "A thorough bath, worked down to the skin",
            "A full blow dry — not air-drying",
            "A brush-out to clear loose and dead coat",
            "A haircut, cut to the length you ask for",
            "Styling and finish work around the face, feet and tail",
            "A nail trim",
            "Ear cleaning",
          ]}
        />
        <div className="mt-8 max-w-3xl rounded-3xl border-2 border-goc-border bg-goc-cream p-6">
          <p className="leading-relaxed text-goc-ink-soft">
            <strong className="text-goc-ink">Not sure your dog needs the haircut?</strong> If the coat is in good shape
            and you just want them clean and de-shedded, a{" "}
            <Link
              href={servicePath("dog-bath-and-blow-dry")}
              className="font-bold text-goc-magenta-darker underline underline-offset-4"
            >
              bath and blow dry
            </Link>{" "}
            is usually the better-value appointment. Say what you&rsquo;re after on the phone and you&rsquo;ll be
            pointed at whichever one actually fits.
          </p>
        </div>
      </Section>

      <Section tone="deep">
        <div className="grid gap-10 lg:grid-cols-2">
          <Prose title="Grooming & Styling: Getting The Cut You Wanted">
            <p>
              The part of a groom people care most about is how their dog looks afterwards, and the part that most
              often goes wrong is the description. &ldquo;Short&rdquo; means something different to everyone, and
              &ldquo;puppy cut&rdquo; means different things to different groomers.
            </p>
            <p>
              The fix is simple: say a length, or show a photo of a cut you liked. If there isn&rsquo;t a photo, say
              what you want to be able to do afterwards — walk on the beach, brush once a week, keep the feet out of
              the mud — and the cut can be built around that instead of around an adjective.
            </p>
            <p>
              Practical constraints get explained rather than worked around silently. A coat that is matted can&rsquo;t
              always be taken to the length you had in mind in one appointment, and you&rsquo;ll be told that before it
              happens, not after.
            </p>
          </Prose>
          <Prose title="Coat Types And What They Need">
            <p>
              <strong className="text-goc-ink">Growing coats</strong> — poodles, doodles, Shih Tzus, Bichons, Maltese
              and similar — never shed out on their own. Loose hair stays trapped against the skin, which is why these
              coats mat so readily and why they need a full groom on a regular cycle rather than when they look untidy.
            </p>
            <p>
              <strong className="text-goc-ink">Shedding double coats</strong> — Huskies, Shepherds, Goldens,
              Pomeranians — generally shouldn&rsquo;t be clipped short, but they do need a serious bath and blow dry to
              clear dead undercoat. The blow dry is the part that does the work here, and it is the part a home bath
              almost never achieves.
            </p>
            <p>
              <strong className="text-goc-ink">Short smooth coats</strong> need the least, and often the nail trim is
              the part that genuinely can&rsquo;t wait.
            </p>
            <p>
              <Link href={blogPostPath("how-often-should-a-dog-be-groomed")}>
                How often should a dog be groomed?
              </Link>{" "}
              goes through this in more detail.
            </p>
          </Prose>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Why At Home"
          title="What Changes When The Groomer Comes To You"
          intro="The grooming is the same professional grooming. The day around it is completely different."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "No two trips across town",
              body: "A salon groom usually costs you a morning drop-off and an afternoon pick-up. A mobile appointment costs you being home.",
            },
            {
              title: "No waiting for a slot",
              body: "Dogs dropped at a salon often wait before and after the actual grooming. Here, the appointment time and the grooming time are close to the same thing.",
            },
            {
              title: "A familiar place",
              body: "Your dog is groomed where they already live, rather than in an unfamiliar building full of other animals.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border-2 border-goc-border bg-goc-cream p-6">
              <h3 className="font-goc-display text-lg font-extrabold text-goc-ink">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-goc-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <Prose>
          <p className="mt-8">
            Worth being straight about one thing: mobile grooming is not a cure for a dog who finds being groomed
            frightening. The handling is the same handling. What it removes is the car journey and the unfamiliar
            room — and for a lot of dogs, that was a real part of what they found hard. Read more on{" "}
            <Link href={blogPostPath("mobile-grooming-vs-salon-grooming")}>
              how mobile and salon grooming actually compare
            </Link>
            .
          </p>
        </Prose>
      </Section>

      <Section tone="cream">
        <div className="grid gap-10 lg:grid-cols-2">
          <Prose title="Booking A Groom">
            <p>
              Appointments are made by phone. Call {business.phoneDisplay}, say what kind of dog you have, roughly how
              long since the last groom, and what you&rsquo;d like done. You&rsquo;ll get told whether we reach your
              address and what&rsquo;s realistic for your dog&rsquo;s coat in one appointment.
            </p>
            <p>
              If your dog has a sore spot, a hip they don&rsquo;t like handled, or a history of finding nail trims
              difficult — mention it then. None of that is a problem to know about in advance.
            </p>
            <p>
              <Link href={blogPostPath("how-to-prepare-for-a-mobile-grooming-appointment")}>
                How to prepare for a mobile grooming appointment
              </Link>{" "}
              is a short checklist if this is your first one.
            </p>
          </Prose>
          <Prose title="Where We Groom">
            <p>
              Groomer On Call covers the {market.cityState} area, including nearby {market.nearbyCity}. Because this is
              a mobile service, what matters isn&rsquo;t whether there is a salon near you — it&rsquo;s whether we
              travel to your address.
            </p>
            <p>
              Rather than publish a list of towns that may not be accurate for your street, call and ask.{" "}
              <Link href={PATHS.serviceAreas}>More about our service area</Link>.
            </p>
          </Prose>
        </div>
      </Section>
    </ServicePageShell>
  );
}
