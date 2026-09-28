import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageShell, Prose, CheckList } from "@/components/ServicePageShell";
import { Section, SectionHeading } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";
import { serviceFaqs } from "@/lib/faq-data";
import { business, market, servicePath, blogPostPath } from "@/lib/site-data";

// -----------------------------------------------------------------------------
// Search intent owned here: "dog nail trimming near me", "dog nail clipping",
// "mobile dog nail trim" — a standalone, urgent, low-consideration job. These
// searchers are not looking for a groom, which is why this is its own page
// rather than a section on the full-grooming page.
// -----------------------------------------------------------------------------

export const metadata: Metadata = pageMetadata({
  title: `Mobile Dog Nail Trimming in ${market.cityState}`,
  description:
    `Dog nail trimming at your home in the ${market.cityState} area — bookable on its own, no car ride and no waiting room. ` +
    `Call ${business.phoneDisplay}.`,
  path: servicePath("dog-nail-trimming"),
});

export default function DogNailTrimmingPage() {
  return (
    <ServicePageShell
      slug="dog-nail-trimming"
      eyebrow="Nail Trimming · At Your Home"
      h1={`Mobile Dog Nail Trimming in ${market.cityState}`}
      intro="A short, careful nail trim at your address — bookable on its own, or added to a bath or a full groom. No car journey, no waiting room, and no making a whole afternoon out of a ten-minute job."
      heroBullets={[
        "Bookable as a standalone appointment",
        "Or added to a bath or groom",
        "Dewclaws included",
        "At your home, not a salon",
      ]}
      art="tools"
      schemaDescription={`Mobile dog nail trimming carried out at the customer's home in the ${market.cityState} area, available as a standalone appointment or as part of a bath or full groom.`}
      faqs={serviceFaqs["dog-nail-trimming"]}
    >
      <Section tone="white">
        <Prose title="Why Nails Are The One Thing That Can't Wait">
          <p>
            Nails are the part of grooming that runs on its own clock. A short-coated dog may genuinely never need a
            haircut — but every dog&rsquo;s nails keep growing, and unlike a coat, overgrown nails change how a dog
            physically stands.
          </p>
          <p>
            Once a nail is long enough to touch the floor, it pushes back into the toe with every step. Over time that
            alters the angle the dog stands at, which shifts load up through the leg. It&rsquo;s the reason a nail trim
            sometimes visibly changes how an older dog moves.
          </p>
        </Prose>
        <SectionHeading eyebrow="Check Now" title="Signs They're Overdue" />
        <CheckList
          items={[
            "You can hear clicking on hard floors",
            "Nails touch the ground when your dog is standing still",
            "Toes look splayed, or weight is shifted backwards",
            "A nail has started curving towards the pad",
            "Dewclaws look long — the ones that never touch the ground",
            "It's been more than six weeks and your dog isn't walked on pavement",
          ]}
        />
      </Section>

      <Section tone="deep">
        <div className="grid gap-10 lg:grid-cols-2">
          <Prose title="If Your Dog Hates Having Their Feet Touched">
            <p>
              This is extremely common, and it is not a reason to skip trims — it&rsquo;s a reason to have someone do
              them who does them all day. Say it when you book. A groomer who knows in advance can plan for a short,
              calm, low-drama appointment rather than discovering it halfway through.
            </p>
            <p>
              Doing it at home helps here for a simple reason: there&rsquo;s no car journey beforehand, so your dog
              isn&rsquo;t already wound up before anyone touches a foot.
            </p>
          </Prose>
          <Prose title="If The Nails Are Very Overgrown">
            <p>
              When nails have been left a long time, the quick — the living part inside the nail — grows out with them.
              That means they can&rsquo;t safely be taken straight back to a normal length in one go, however much
              you&rsquo;d like them to be.
            </p>
            <p>
              The way through it is a series of smaller trims a couple of weeks apart, letting the quick recede between
              them. It&rsquo;s slower, and it&rsquo;s the reason it&rsquo;s worth getting onto a schedule rather than
              waiting until it becomes a project.
            </p>
            <p>
              <Link href={blogPostPath("how-often-should-you-trim-a-dogs-nails")}>
                How often should you trim a dog&rsquo;s nails?
              </Link>{" "}
              covers the schedule in more detail.
            </p>
          </Prose>
        </div>
      </Section>

      <Section tone="white">
        <Prose title="Booking A Nail Trim">
          <p>
            Call {business.phoneDisplay}. A nail trim is a short appointment and doesn&rsquo;t need to be attached to
            anything else — though if your dog is due a wash anyway, adding it to a{" "}
            <Link
              href={servicePath("dog-bath-and-blow-dry")}
              className="font-bold text-goc-magenta-darker underline underline-offset-4"
            >
              bath and blow dry
            </Link>{" "}
            or a{" "}
            <Link
              href={servicePath("mobile-dog-grooming")}
              className="font-bold text-goc-magenta-darker underline underline-offset-4"
            >
              full groom
            </Link>{" "}
            saves a separate visit. Ear cleaning can be added the same way.
          </p>
        </Prose>
      </Section>
    </ServicePageShell>
  );
}
