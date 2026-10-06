import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";
import { client, POST_BY_SLUG_QUERY, ALL_POST_SLUGS_QUERY } from "@/sanity/client";
import { PHONE, PHONE_LINK } from "@/data/content";
import CTABand from "@/components/CTABand";

type Ctx = { params: Promise<{ slug: string }> };

interface Block {
  _key: string;
  kind: "h2" | "h3" | "p" | "bullet" | "numbered" | "story";
  text: string;
}

interface Faq {
  _key: string;
  q: string;
  a: string;
}

interface Post {
  _id: string;
  title: string;
  slug: string;
  cluster?: string;
  answerFirst: string;
  body: Block[];
  faqs?: Faq[];
  metaDescription?: string;
  targetKeyword?: string;
  internalLink?: string;
  publishedAt: string;
  heroImage?: string;
}

// Approved posts appear without a redeploy
export const revalidate = 300;

export async function generateMetadata({ params }: Ctx): Promise<Metadata> {
  const { slug } = await params;
  if (!client) return { title: "Blog — AVI Industriel" };
  const post: Post | null = await client.fetch(POST_BY_SLUG_QUERY, { slug });
  if (!post) return { title: "Not found" };

  return {
    title: `${post.title} | AVI Industriel`,
    description: post.metaDescription || post.answerFirst.slice(0, 160),
    alternates: { canonical: `https://avi-industriel.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.answerFirst.slice(0, 160),
      url: `https://avi-industriel.com/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export async function generateStaticParams() {
  if (!client) return [];
  const slugs: { slug: string }[] = await client.fetch(ALL_POST_SLUGS_QUERY);
  return slugs.map((s) => ({ slug: s.slug }));
}

export default async function BlogPostPage({ params }: Ctx) {
  const { slug } = await params;
  if (!client) return notFound();
  const post: Post | null = await client.fetch(POST_BY_SLUG_QUERY, { slug });
  if (!post) return notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription || post.answerFirst.slice(0, 160),
    datePublished: post.publishedAt,
    author: { "@id": "https://avi-industriel.com/#founder" },
    publisher: { "@id": "https://avi-industriel.com/#business" },
    mainEntityOfPage: `https://avi-industriel.com/blog/${slug}`,
  };

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main>
        <section className="bg-graphite grid-texture pt-32 pb-12 md:pt-40">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/blog"
              className="text-xs uppercase tracking-[0.15em] text-signal hover:text-bright transition-colors"
            >
              ← All posts
            </Link>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-[-0.02em] text-bright md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-3 text-sm text-steel-light">
              {new Date(post.publishedAt).toLocaleDateString("en-CA", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </section>

        <section className="bg-workshop py-16">
          <article className="mx-auto max-w-3xl px-6">
            {/* Answer-first */}
            <div className="border-l-4 border-signal pl-6 py-3 mb-12 bg-signal-subtle/40">
              <p className="text-xs uppercase tracking-[0.2em] text-signal-dark font-semibold mb-3">
                Answer
              </p>
              <p className="text-lg text-machine-black italic leading-relaxed">
                {post.answerFirst}
              </p>
            </div>

            {/* Body */}
            <div className="prose-style">
              {post.body?.map((b) => renderBlock(b))}
            </div>

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-16 pt-8 border-t border-border-light">
                <h2 className="text-2xl font-bold text-machine-black mb-6">
                  Frequently asked questions
                </h2>
                <div className="space-y-4">
                  {post.faqs.map((f) => (
                    <details
                      key={f._key}
                      className="group border border-border-light rounded-lg p-5 cursor-pointer"
                    >
                      <summary className="text-base font-semibold text-machine-black list-none flex items-start justify-between gap-4">
                        <span>{f.q}</span>
                        <span className="text-signal font-mono text-sm group-open:rotate-180 transition-transform flex-shrink-0">
                          ▼
                        </span>
                      </summary>
                      <p className="mt-3 text-sm text-shop-grey leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Service link */}
            {post.internalLink && (
              <div className="mt-12 p-6 bg-signal/5 border border-signal/20 rounded-xl">
                <p className="text-xs uppercase tracking-[0.2em] text-signal-dark font-semibold mb-2">
                  Related service
                </p>
                <Link
                  href={post.internalLink}
                  className="text-base font-semibold text-machine-black hover:text-signal-dark transition-colors"
                >
                  Learn about this service →
                </Link>
              </div>
            )}

            {/* Phone CTA */}
            <div className="mt-12 pt-8 border-t border-border-light text-center">
              <p className="text-sm text-shop-grey mb-4">Got a question on this? Call us.</p>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 rounded-lg bg-signal px-6 py-3 text-base font-bold text-white hover:bg-signal-dark transition-colors"
              >
                <Phone className="h-4 w-4" />
                {PHONE}
              </a>
            </div>
          </article>
        </section>

        <CTABand headline="CNC trouble? Let's diagnose it." />
      </main>
    </>
  );
}

function renderBlock(b: Block) {
  switch (b.kind) {
    case "h2":
      return (
        <h2 key={b._key} className="text-2xl font-bold text-machine-black mt-10 mb-3">
          {b.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={b._key} className="text-lg font-semibold text-machine-black mt-6 mb-2">
          {b.text}
        </h3>
      );
    case "p":
      return (
        <p key={b._key} className="text-base text-shop-grey leading-relaxed mb-4">
          {b.text}
        </p>
      );
    case "bullet":
      return (
        <p
          key={b._key}
          className="text-base text-shop-grey leading-relaxed pl-6 relative mb-2"
        >
          <span className="absolute left-0 top-0 text-signal font-bold">•</span>
          {b.text}
        </p>
      );
    case "numbered":
      return (
        <p
          key={b._key}
          className="text-base text-shop-grey leading-relaxed mb-2"
        >
          {b.text}
        </p>
      );
    case "story":
      return (
        <div
          key={b._key}
          className="my-6 bg-blue-50 border-l-4 border-blue-500 pl-6 py-4 rounded-r-lg"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-blue-700 font-semibold mb-2">
            From the shop
          </p>
          <p className="text-base text-machine-black italic leading-relaxed">{b.text}</p>
        </div>
      );
    default:
      return (
        <p key={b._key} className="text-base text-shop-grey">
          {b.text}
        </p>
      );
  }
}
