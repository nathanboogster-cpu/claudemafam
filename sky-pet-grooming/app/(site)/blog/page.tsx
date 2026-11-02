import { PATHS, SITE_URL } from "@/lib/site-data";
import { blogPosts } from "@/lib/blog-data";
import { pageMetadata } from "@/lib/metadata";
import { BookButton, CallButton } from "@/components/CTAButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { Eyebrow } from "@/components/Eyebrow";
import { PostCard } from "@/components/PostCard";
import { BottomCta } from "@/components/BottomCta";

export const metadata = pageMetadata({
  title: "Pet Grooming Blog & Guides | Sky Pet Grooming",
  description:
    "Grooming guides for dogs and cats, and tips for pet owners in San Bruno, Burlingame, San Mateo, Pacifica, Daly City and across the Peninsula.",
  path: PATHS.blog,
});

const serviceGuides = blogPosts.filter((p) => p.service);
const areaPosts = blogPosts.filter((p) => p.area);

export default function BlogIndexPage() {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Home", href: PATHS.home }, { name: "Blog", href: PATHS.blog }]} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Blog", url: `${SITE_URL}${PATHS.blog}` },
        ])}
      />

      <section className="mx-auto max-w-6xl px-4 pb-6 pt-10 text-center">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-ink sm:text-5xl">Grooming Tips &amp; Guides</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
          Practical advice for keeping dogs and cats clean, comfortable and tangle-free, from our grooming van.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <BookButton location="blog_index_top" />
          <CallButton location="blog_index_top" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Service Guides</h2>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceGuides.map((p) => (
            <li key={p.slug}>
              <PostCard post={p} />
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Around Our Service Areas</h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areaPosts.map((p) => (
              <li key={p.slug}>
                <PostCard post={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BottomCta title="Ready for a groom at your door?" location="blog_index_bottom" />
    </div>
  );
}
