import Link from "next/link";
import { PATHS, SITE_URL } from "@/lib/site-data";
import { blogPostPath, blogPosts } from "@/lib/blog-data";
import { pageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Eyebrow } from "@/components/Eyebrow";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { BottomCta } from "@/components/BottomCta";

const dateFormat = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export const metadata = pageMetadata({
  title: "Dog Grooming Tips Blog | I Love Dogs, Bryn Mawr PA",
  description:
    "Dog grooming tips for Bryn Mawr and Main Line dog owners: bath time, nails, ears, coats, teeth and pickup and delivery, from I Love Dogs.",
  path: PATHS.blog,
});

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

      <section className="mx-auto max-w-6xl px-4 py-10 text-center">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">Grooming Tips for Main Line Dog Owners</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
          Plain advice on keeping your dog clean and comfortable between visits, from the I Love Dogs salon in Bryn Mawr.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={blogPostPath(post.slug)}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {post.category} · {post.tag}
              </span>
              <h2 className="mt-2 font-display text-lg font-bold text-ink">{post.title}</h2>
              <p className="mt-2 flex-1 text-sm text-ink-soft">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-ink-soft">
                <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
                <span className="font-semibold text-brand">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <BottomCta title="Ready to book your dog's groom?" location="blog_index_bottom" />
    </div>
  );
}
