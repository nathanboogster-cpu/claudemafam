import Link from "next/link";
import { faqs, PATHS, SITE_URL } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";
import { BookButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata = pageMetadata({
  title: "Mobile Pet Grooming FAQ | Sky Pet Grooming",
  description:
    "Answers about Sky Pet Grooming: how mobile grooming works, areas served across California, licensing and insurance, pricing and how to book.",
  path: PATHS.faq,
});

const related = [
  { label: "Mobile Pet Grooming", href: PATHS.mobileGrooming },
  { label: "About", href: PATHS.about },
  { label: "Request an Appointment", href: PATHS.book },
];

export default function FaqPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "FAQ", href: PATHS.faq }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "FAQ", url: `${SITE_URL}${PATHS.faq}` },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <section className="mx-auto max-w-3xl px-4 py-10">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">Mobile Pet Grooming FAQ</h1>
          <p className="mt-3 text-lg text-ink-soft">
            New to mobile grooming?
            <br />
            Start here.
          </p>
          <div className="mt-5 flex justify-center">
            <BookButton location="faq_top" />
          </div>
        </div>

        <dl className="mt-10 space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <dt className="font-display text-lg font-bold text-ink">{item.question}</dt>
              <dd className="mt-2 leading-relaxed text-ink-soft">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 text-center">
        <h2 className="font-display text-2xl font-bold text-ink">Still have a question?</h2>
        <p className="mt-2 text-ink-soft">Ask it in your request. We will answer when we get back to you.</p>
        <div className="mt-5 flex justify-center">
          <BookButton location="faq_bottom" />
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 text-sm">
          {related.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="inline-flex min-h-[44px] items-center font-semibold text-brand hover:underline">
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
