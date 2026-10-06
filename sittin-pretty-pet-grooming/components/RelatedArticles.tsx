import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/Eyebrow";
import { photos, blogPostPath, PATHS, type ServiceSlug } from "@/lib/site-data";
import { blogPosts, formatBlogDate } from "@/lib/blog-data";

type Post = (typeof blogPosts)[number];

// Reverse of each post's relatedServiceSlugs: a service page links back to
// the posts that link to it, so every new post from the blog routine picks
// up internal links automatically instead of only being reachable from /blog.
export function RelatedArticles({ serviceSlug }: { serviceSlug: ServiceSlug }) {
  const posts = blogPosts
    .filter((p) => p.relatedServiceSlugs.includes(serviceSlug))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);
  return <ArticleCards posts={posts} heading="Grooming Tips & Advice" />;
}

// Other posts for the bottom of a blog post: the posts published just before
// and after this one (so every post, however old, is linked from two others),
// plus the closest topical match by shared services.
export function MorePosts({ currentSlug }: { currentSlug: string }) {
  const byDate = [...blogPosts].sort((a, b) => a.publishedAt.localeCompare(b.publishedAt));
  const i = byDate.findIndex((p) => p.slug === currentSlug);
  if (i === -1) return null;
  const current = byDate[i];
  const neighbors = [byDate[i + 1], byDate[i - 1]].filter((p): p is Post => Boolean(p));
  const shared = (p: Post) => p.relatedServiceSlugs.filter((s) => current.relatedServiceSlugs.includes(s)).length;
  const topical = byDate
    .filter((p) => p !== current && !neighbors.includes(p))
    .sort((a, b) => shared(b) - shared(a) || b.publishedAt.localeCompare(a.publishedAt));
  return <ArticleCards posts={[...neighbors, ...topical].slice(0, 3)} heading="More From the Blog" />;
}

function ArticleCards({ posts, heading }: { posts: Post[]; heading: string }) {
  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <Eyebrow>From the Blog</Eyebrow>
          <h2 className="mt-1 font-sp-display text-2xl font-bold text-sp-ink sm:text-3xl">{heading}</h2>
        </div>
        <Link href={PATHS.blog} className="text-sm font-semibold text-sp-purple-dark hover:underline">
          All articles →
        </Link>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const photo = photos[post.heroPhotoKey];
          return (
            <Link
              key={post.slug}
              href={blogPostPath(post.slug)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-sp-border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="font-sp-display text-lg font-bold text-sp-ink">{post.title}</p>
                <p className="flex-1 text-sm text-sp-ink-soft">{post.excerpt}</p>
                <div className="mt-2 flex items-center justify-between text-xs text-sp-ink-soft">
                  <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                  <span className="font-semibold text-sp-purple-dark transition-transform group-hover:translate-x-1">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
