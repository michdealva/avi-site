import type { Metadata } from "next";
import Link from "next/link";
import { client, PUBLISHED_POSTS_QUERY } from "@/sanity/client";

export const metadata: Metadata = {
  title: "Blog | AVI Industriel — CNC repair & live tooling tips",
  description:
    "Notes from the bench: CNC repair tips, live tooling rebuild guides, used machine market insights from 22 years across Quebec and Ontario.",
  alternates: { canonical: "https://avi-industriel.com/blog" },
};

interface PublishedPost {
  _id: string;
  title: string;
  slug: string;
  cluster?: string;
  answerFirst: string;
  metaDescription?: string;
  publishedAt: string;
  heroImage?: string;
}

const CLUSTER_LABEL: Record<string, string> = {
  "live-tooling": "Live Tooling",
  "cnc-repair": "CNC Repair",
  "used-cnc": "Used CNC",
};

// Approved posts appear without a redeploy
export const revalidate = 300;

export default async function BlogIndex() {
  const posts: PublishedPost[] = client ? await client.fetch(PUBLISHED_POSTS_QUERY) : [];

  return (
    <main>
      <section className="bg-graphite grid-texture pt-32 pb-16 md:pt-40">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-signal mb-4">From the bench</p>
          <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.02em] text-bright md:text-6xl max-w-3xl">
            Notes on CNC repair, live tooling, and the used machine market.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-steel-light">
            Practical posts from 22 years of fixing CNC machines across Quebec and Ontario. Specific
            failures, real costs, and what we'd actually do.
          </p>
        </div>
      </section>

      <section className="bg-workshop py-20">
        <div className="mx-auto max-w-5xl px-6">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-shop-grey">First posts coming soon.</p>
            </div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((p) => (
                <li key={p._id}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group block bg-white border border-border-light hover:border-signal rounded-xl p-6 transition-colors h-full"
                  >
                    {p.cluster && (
                      <p className="text-[10px] uppercase tracking-[0.2em] text-signal font-semibold mb-3">
                        {CLUSTER_LABEL[p.cluster] || p.cluster}
                      </p>
                    )}
                    <h2 className="text-xl font-bold text-machine-black group-hover:text-signal-dark transition-colors mb-3 leading-tight">
                      {p.title}
                    </h2>
                    <p className="text-sm text-shop-grey leading-relaxed line-clamp-4 mb-4">
                      {p.answerFirst}
                    </p>
                    <p className="text-xs text-dust">
                      {new Date(p.publishedAt).toLocaleDateString("en-CA", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
