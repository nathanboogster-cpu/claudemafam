import { SiteShell, Hero } from "@/components/SiteShell";
import { CallButton } from "@/components/Cta";
import { FaqList } from "@/components/Faq";
import { breadcrumbSchema, faqSchema, JsonLd, localBusinessSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";
import { PATHS } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Dog Grooming FAQ | I Love Dogs, Bryn Mawr PA",
  description:
    "Answers about dog grooming at I Love Dogs in Bryn Mawr, PA: what is included, pickup and delivery, products, location and how to book.",
  path: PATHS.faq,
});

export default function FaqPage() {
  return (
    <SiteShell path={PATHS.faq}>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={faqSchema()} />
      <JsonLd data={breadcrumbSchema(PATHS.faq)} />
      <Hero title="Dog Grooming FAQ" lines={["Not sure what to ask before your first visit?", "Start here."]}>
        <div className="actions">
          <CallButton where="hero" />
        </div>
      </Hero>

      <section className="section">
        <div className="wrap narrow">
          <FaqList />
          <h2>Still have a question?</h2>
          <CallButton where="body" />
        </div>
      </section>
    </SiteShell>
  );
}
