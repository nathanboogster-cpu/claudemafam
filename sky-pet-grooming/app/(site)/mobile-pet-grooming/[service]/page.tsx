import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { confirmedPrices, PATHS, services, servicePath, SITE_URL, type Service } from "@/lib/site-data";
import { servicePages } from "@/lib/service-pages";
import { postForService } from "@/lib/blog-data";
import { pageMetadata } from "@/lib/metadata";
import { BookButton, CallButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { Pic } from "@/components/Pic";
import { PostCard } from "@/components/PostCard";
import { AreaLinks } from "@/components/AreaLinks";
import { BottomCta } from "@/components/BottomCta";
import { CheckIcon } from "@/components/icons";
import { PriceList } from "@/components/PriceList";

// One page per service: /mobile-pet-grooming/<key>/. Only the services in
// site-data are built; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ service: s.key }));
}

function serviceFromParam(key: string): Service {
  const s = services.find((x) => x.key === key);
  if (!s) notFound();
  return s;
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const s = serviceFromParam((await params).service);
  const page = servicePages[s.key];
  return pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: servicePath(s.key) });
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const s = serviceFromParam((await params).service);
  const page = servicePages[s.key];
  const url = `${SITE_URL}${servicePath(s.key)}`;
  const guide = postForService(s.key);
  const others = services.filter((x) => x.key !== s.key);
  const loc = `service_${s.key}`;

  return (
    <div>
      <Breadcrumbs
        items={[
          { name: "Home", href: PATHS.home },
          { name: "Services", href: PATHS.mobileGrooming },
          { name: s.title, href: servicePath(s.key) },
        ]}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Services", url: `${SITE_URL}${PATHS.mobileGrooming}` },
          { name: s.title, url },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          pageUrl: url,
          name: page.h1,
          description: page.metaDescription,
          catalog: false,
          offers: confirmedPrices[s.key],
        })}
      />

      <section className="bg-gradient-to-b from-sky-deep to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-6 md:grid-cols-[1.1fr_1fr]">
          <div>
            <Eyebrow>{s.kind === "add-on" ? "Add-On Service" : "Mobile Grooming Service"}</Eyebrow>
            <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">{page.h1}</h1>
            <p className="mt-4 inline-flex rounded-full bg-accent-light px-3 py-1 text-sm font-bold text-accent-dark">{s.availability}</p>
            {page.intro.map((p) => (
              <p key={p} className="mt-4 text-lg text-ink-soft">
                {p}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-3">
              <BookButton location={`${loc}_top`} />
              <CallButton location={`${loc}_top`} />
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl ring-4 ring-white">
            <Pic slug={s.photo} hero fill sizes="(min-width: 768px) 520px, 100vw" className="object-cover object-[50%_25%]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        {page.sections.map((sec) => (
          <div key={sec.h2} className="mt-10 first:mt-0">
            <h2 className="font-display text-3xl font-extrabold text-ink">{sec.h2}</h2>
            {"p" in sec ? (
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">{sec.p}</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {sec.list.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg text-ink-soft">
                    <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="mt-10 rounded-3xl border border-border bg-sky p-6">
          <h2 className="font-display text-2xl font-extrabold text-ink">Prices and Booking</h2>
          <p className="mt-2 text-ink-soft">
            {confirmedPrices[s.key]
              ? "Prices from our booking page. Your total, with any add-ons, shows before you confirm."
              : "Prices for this service depend on your pet and are shown on our booking page before you confirm. Other charges:"}
          </p>
          <PriceList service={s.key} className="mt-4" />
          <div className="mt-4 flex flex-wrap gap-3">
            <BookButton location={`${loc}_pricing`} label="See Prices & Book" />
            <CallButton location={`${loc}_pricing`} />
          </div>
        </div>

        <h2 className="mt-12 font-display text-3xl font-extrabold text-ink">Questions</h2>
        <dl className="mt-4 space-y-4">
          {page.faqs.map((f) => (
            <div key={f.question} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <dt className="font-display text-lg font-extrabold text-ink">{f.question}</dt>
              <dd className="mt-2 leading-relaxed text-ink-soft">{f.answer}</dd>
            </div>
          ))}
        </dl>

        {guide && (
          <div className="mt-12">
            <h2 className="font-display text-3xl font-extrabold text-ink">Read the Guide</h2>
            <div className="mt-4">
              <PostCard post={guide} />
            </div>
          </div>
        )}
      </section>

      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">
          <Eyebrow>More Services</Eyebrow>
          <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">Everything We Offer</h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {others.map((o) => (
              <li key={o.key}>
                <Link
                  href={servicePath(o.key)}
                  className="inline-flex min-h-[44px] items-center rounded-full border border-border bg-white px-4 text-sm font-bold text-brand shadow-sm hover:border-accent hover:text-accent-dark"
                >
                  {o.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 text-center">
        <Eyebrow>Service Areas</Eyebrow>
        <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">{s.title} at Your Door</h2>
        <AreaLinks className="mt-6 justify-center" />
      </section>

      <BottomCta title={`Book ${s.title.toLowerCase()} at your door`} location={`${loc}_bottom`} />
    </div>
  );
}
