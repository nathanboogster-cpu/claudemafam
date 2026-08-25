import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallButton, RequestButton } from "@/components/CTAButton";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { CheckIcon } from "@/components/icons";
import { business, differentiators, serviceFeatures, photos, PATHS, SITE_URL } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Pet Spa Luxe",
  description:
    "Pet Spa Luxe is a mobile dog grooming business based in El Sobrante, CA, offering cage-free, one-on-one grooming brought directly to your home.",
  alternates: { canonical: PATHS.about },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}${PATHS.home}` },
          { name: "About", url: `${SITE_URL}${PATHS.about}` },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "About", href: PATHS.about }]} />

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <Eyebrow>About Pet Spa Luxe</Eyebrow>
          <h1 className="mt-1 font-psl-display text-4xl font-bold text-psl-ink sm:text-5xl">
            Luxury Mobile Grooming, Based in El Sobrante
          </h1>
          <p className="mt-4 text-lg text-psl-ink-soft">
            Pet Spa Luxe provides luxury mobile dog grooming directly at your
            home. Instead of a traditional salon visit, your dog is groomed in
            a fully equipped mobile setup — cage-free, one-on-one, and brought
            right to your door.
          </p>
          <p className="mt-4 text-psl-ink-soft">
            Every appointment can include a warm-water bath with premium
            shampoo and conditioner, a full groom or breed-specific haircut,
            deshedding, nail trimming or grinding, ear cleaning, and hand blow
            drying — tailored to what your dog needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton location="about" variant="primary" />
            <RequestButton location="about" variant="secondary" />
          </div>
        </div>
        <PhotoPlaceholder caption={photos.huskyGroomed.alt} src={photos.huskyGroomed.src} aspect="portrait" className="w-full" />
      </section>

      <section className="bg-psl-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">
            What Makes Pet Spa Luxe Different
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {differentiators.map((d) => (
              <div key={d.title} className="rounded-2xl border border-psl-border bg-white p-6">
                <p className="font-semibold text-psl-ink">{d.title}</p>
                <p className="mt-1 text-sm text-psl-ink-soft">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-psl-display text-2xl font-bold text-psl-ink sm:text-3xl">
          Every Appointment Includes
        </h2>
        <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {serviceFeatures.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-psl-ink-soft">
              <CheckIcon className="h-4 w-4 shrink-0 text-psl-pink-dark" />
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-psl-ink text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-14 text-center">
          <h2 className="font-psl-display text-3xl font-bold">Ready to Meet Pet Spa Luxe?</h2>
          <p className="text-white/80">Call {business.phoneDisplay} to schedule your dog&apos;s mobile grooming appointment.</p>
          <CallButton location="about_cta" variant="primary" className="mt-2" />
        </div>
      </section>
    </>
  );
}
