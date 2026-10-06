import { notFound } from "next/navigation";
import Link from "next/link";
import { freshClient as client, DASHBOARD_POST_QUERY } from "@/sanity/client";
import PostReviewer from "./PostReviewer";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ slug: string }> };

export default async function PostReviewPage({ params }: Ctx) {
  const { slug } = await params;
  if (!client) return notFound();

  const post = await client.fetch(DASHBOARD_POST_QUERY, { slug });
  if (!post) return notFound();

  return (
    <div className="p-10 max-w-7xl mx-auto">
      <div className="mb-6">
        <Link
          href="/dashboard/blog"
          className="text-xs uppercase tracking-[0.15em] text-shop-grey hover:text-signal-dark transition-colors"
        >
          ← All blog posts
        </Link>
      </div>
      <PostReviewer post={post} />
    </div>
  );
}
