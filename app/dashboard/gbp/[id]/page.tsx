import { notFound } from "next/navigation";
import Link from "next/link";
import { freshClient as client, DASHBOARD_GBP_POST_QUERY } from "@/sanity/client";
import GbpReviewer from "./GbpReviewer";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };

export default async function GbpReviewPage({ params }: Ctx) {
  const { id } = await params;
  if (!client) return notFound();
  const post = await client.fetch(DASHBOARD_GBP_POST_QUERY, { id });
  if (!post) return notFound();

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href="/dashboard/gbp"
          className="text-xs uppercase tracking-[0.15em] text-shop-grey hover:text-signal-dark transition-colors"
        >
          ← All GBP posts
        </Link>
      </div>
      <GbpReviewer post={post} />
    </div>
  );
}
