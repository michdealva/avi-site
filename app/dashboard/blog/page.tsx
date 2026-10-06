import Link from "next/link";
import { freshClient as client, DASHBOARD_POSTS_QUERY } from "@/sanity/client";

export const dynamic = "force-dynamic";

interface PostRow {
  _id: string;
  title: string;
  slug: string;
  cluster?: string;
  reviewStatus: string;
  targetPublishDate?: string;
  publishedAt?: string;
  commentCount?: number;
  unresolvedCount?: number;
}

const STATUS_META: Record<string, { label: string; bg: string; text: string }> = {
  "pending-review": { label: "Pending review", bg: "bg-[rgba(245,158,11,0.12)]", text: "text-urgent" },
  "in-revision": { label: "In revision", bg: "bg-signal-subtle", text: "text-signal" },
  approved: { label: "Approved", bg: "bg-signal-subtle", text: "text-signal" },
  published: { label: "Published", bg: "bg-concrete", text: "text-shop-grey" },
};

function StatusBadge({ status }: { status: string }) {
  const meta = STATUS_META[status] || { label: status, bg: "bg-concrete", text: "text-shop-grey" };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${meta.bg} ${meta.text}`}
    >
      {meta.label}
    </span>
  );
}

const CLUSTER_LABEL: Record<string, string> = {
  "live-tooling": "Live Tooling",
  "cnc-repair": "CNC Repair",
  "used-cnc": "Used CNC",
};

export default async function BlogDashboardPage() {
  if (!client) {
    return (
      <div className="p-10">
        <p className="text-danger">Sanity client not configured.</p>
      </div>
    );
  }

  const posts: PostRow[] = await client.fetch(DASHBOARD_POSTS_QUERY);

  if (posts.length === 0) {
    return (
      <div className="p-10 max-w-7xl">
        <Header />
        <div className="bg-white border border-border-light rounded-xl p-12 text-center">
          <p className="text-shop-grey mb-3">No blog posts yet.</p>
          <p className="text-sm text-shop-grey/70 max-w-md mx-auto">
            Once Mich loads the article drafts into Sanity, they&apos;ll appear here for review.
          </p>
        </div>
      </div>
    );
  }

  // Group posts by status
  const pending = posts.filter((p) => p.reviewStatus === "pending-review");
  const inRevision = posts.filter((p) => p.reviewStatus === "in-revision");
  const approved = posts.filter((p) => p.reviewStatus === "approved");
  const published = posts.filter((p) => p.reviewStatus === "published");

  return (
    <div className="p-10 max-w-7xl">
      <Header />

      <Section title="Pending review" count={pending.length} accent="urgent">
        {pending.map((p) => <PostCard key={p._id} post={p} />)}
      </Section>

      {inRevision.length > 0 && (
        <Section title="In revision" count={inRevision.length} accent="signal">
          {inRevision.map((p) => <PostCard key={p._id} post={p} />)}
        </Section>
      )}

      {approved.length > 0 && (
        <Section title="Approved · scheduled" count={approved.length} accent="signal">
          {approved.map((p) => <PostCard key={p._id} post={p} />)}
        </Section>
      )}

      {published.length > 0 && (
        <Section title="Published" count={published.length} accent="muted">
          {published.map((p) => <PostCard key={p._id} post={p} />)}
        </Section>
      )}
    </div>
  );
}

function Header() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-semibold text-machine-black mb-1">Blog Posts</h1>
      <p className="text-sm text-shop-grey max-w-2xl leading-relaxed">
        Review drafts, leave comments on specific paragraphs, and approve when ready. Approved posts publish
        automatically on their target date.
      </p>
    </div>
  );
}

function Section({
  title,
  count,
  accent,
  children,
}: {
  title: string;
  count: number;
  accent: "urgent" | "signal" | "muted";
  children: React.ReactNode;
}) {
  const accentColor =
    accent === "urgent" ? "text-urgent" : accent === "signal" ? "text-signal" : "text-shop-grey";
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-base font-semibold text-machine-black">{title}</h2>
        <span className={`text-xs font-mono ${accentColor}`}>{count}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </section>
  );
}

function PostCard({ post }: { post: PostRow }) {
  const date = post.targetPublishDate
    ? new Date(post.targetPublishDate + "T12:00:00Z").toLocaleDateString("en-CA", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
    : "—";

  return (
    <Link
      href={`/dashboard/blog/${post.slug}`}
      className="group block bg-white border border-border-light hover:border-signal/40 rounded-xl p-5 transition-colors"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <StatusBadge status={post.reviewStatus} />
        {post.unresolvedCount && post.unresolvedCount > 0 ? (
          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-urgent">
            <span className="w-1.5 h-1.5 rounded-full bg-urgent" />
            {post.unresolvedCount} open
          </span>
        ) : null}
      </div>
      <h3 className="text-base font-semibold text-machine-black group-hover:text-signal-dark transition-colors mb-2 leading-snug">
        {post.title}
      </h3>
      <div className="flex items-center justify-between text-xs text-shop-grey">
        <span>{post.cluster ? CLUSTER_LABEL[post.cluster] || post.cluster : "—"}</span>
        <span className="font-mono">{date}</span>
      </div>
    </Link>
  );
}
