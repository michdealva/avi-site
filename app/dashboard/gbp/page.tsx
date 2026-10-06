import Link from "next/link";
import { freshClient as client, DASHBOARD_GBP_POSTS_QUERY } from "@/sanity/client";

export const dynamic = "force-dynamic";

interface GbpRow {
  _id: string;
  title: string;
  reviewStatus: string;
  targetPublishDate?: string;
  publishedAt?: string;
  body: string;
  ctaType?: string;
  commentCount?: number;
  unresolvedCount?: number;
}

const STATUS_META: Record<string, { label: string; bg: string; text: string }> = {
  "pending-review": { label: "Pending review", bg: "bg-[rgba(245,158,11,0.12)]", text: "text-urgent" },
  "in-revision": { label: "In revision", bg: "bg-signal-subtle", text: "text-signal" },
  approved: { label: "Approved · ready to paste", bg: "bg-signal-subtle", text: "text-signal" },
  published: { label: "Posted", bg: "bg-concrete", text: "text-shop-grey" },
};

export default async function GbpDashboardPage() {
  if (!client) {
    return (
      <div className="p-10">
        <p className="text-danger">Sanity client not configured.</p>
      </div>
    );
  }

  const posts: GbpRow[] = await client.fetch(DASHBOARD_GBP_POSTS_QUERY);

  return (
    <div className="p-10 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-machine-black mb-1">GBP Posts</h1>
        <p className="text-sm text-shop-grey max-w-2xl leading-relaxed">
          Short posts for Google Business Profile. Review and approve, then paste to GBP on the target date.
          Two posts per week (Tuesday + Friday).
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="bg-white border border-border-light rounded-xl p-12 text-center">
          <p className="text-shop-grey mb-3">No GBP posts yet.</p>
          <p className="text-sm text-shop-grey/70 max-w-md mx-auto">
            Once Mich loads the GBP post drafts into Sanity, they&apos;ll appear here for review.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((p) => {
            const meta = STATUS_META[p.reviewStatus] || {
              label: p.reviewStatus,
              bg: "bg-concrete",
              text: "text-shop-grey",
            };
            const date = p.targetPublishDate
              ? new Date(p.targetPublishDate + "T12:00:00Z").toLocaleDateString("en-CA", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })
              : "—";
            return (
              <Link
                key={p._id}
                href={`/dashboard/gbp/${p._id}`}
                className="group block bg-white border border-border-light hover:border-signal/40 rounded-xl p-5 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${meta.bg} ${meta.text}`}
                  >
                    {meta.label}
                  </span>
                  {p.unresolvedCount && p.unresolvedCount > 0 ? (
                    <span className="text-[10px] font-mono text-urgent">{p.unresolvedCount} open</span>
                  ) : null}
                </div>
                <h3 className="text-sm font-semibold text-machine-black group-hover:text-signal-dark transition-colors mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-shop-grey line-clamp-3 mb-3 leading-relaxed">{p.body}</p>
                <div className="flex items-center justify-between text-[10px] text-shop-grey">
                  <span>CTA: {p.ctaType || "—"}</span>
                  <span className="font-mono">{date}</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
