"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

interface Comment {
  _key: string;
  author: string;
  paragraphId: string;
  comment: string;
  createdAt: string;
  resolved: boolean;
}

interface GbpPost {
  _id: string;
  title: string;
  reviewStatus: string;
  targetPublishDate?: string;
  publishedAt?: string;
  body: string;
  ctaType?: string;
  comments: Comment[];
  image?: string;
}

const STATUS_META: Record<string, { label: string; bg: string; text: string }> = {
  "pending-review": { label: "Pending review", bg: "bg-[rgba(245,158,11,0.12)]", text: "text-urgent" },
  "in-revision": { label: "In revision", bg: "bg-signal-subtle", text: "text-signal" },
  approved: { label: "Approved · ready to paste", bg: "bg-signal-subtle", text: "text-signal" },
  published: { label: "Posted to GBP", bg: "bg-concrete", text: "text-shop-grey" },
};

export default function GbpReviewer({ post: initialPost }: { post: GbpPost }) {
  const router = useRouter();
  const [post, setPost] = useState(initialPost);
  const [draftComment, setDraftComment] = useState("");
  const [author, setAuthor] = useState<"Alex" | "Mich">("Alex");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [, startTransition] = useTransition();

  const meta = STATUS_META[post.reviewStatus] || { label: post.reviewStatus, bg: "bg-concrete", text: "text-shop-grey" };
  const id = post._id;

  async function postComment() {
    if (!draftComment.trim()) return;
    setBusy(true);
    setError("");
    try {
      const res = await fetch(`/api/gbp-posts/${id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paragraphId: "body", comment: draftComment.trim(), author }),
      });
      if (!res.ok) throw new Error("Failed to add comment");
      const { comment } = await res.json();
      setPost({ ...post, comments: [...(post.comments || []), comment] });
      setDraftComment("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  async function approve() {
    if (!confirm(`Approve "${post.title}"?`)) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/gbp-posts/${id}/approve`, { method: "POST" });
      if (!res.ok) throw new Error("Approve failed");
      setPost({ ...post, reviewStatus: "approved" });
      startTransition(() => router.refresh());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  async function sendBack() {
    const note = prompt("Optional overall note:");
    if (note === null) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/gbp-posts/${id}/send-back`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ note }),
      });
      if (!res.ok) throw new Error("Send back failed");
      setPost({ ...post, reviewStatus: "in-revision" });
      startTransition(() => router.refresh());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(post.body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div>
      <div className="mb-6 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium mb-3 ${meta.bg} ${meta.text}`}
          >
            {meta.label}
          </span>
          <h1 className="text-2xl font-semibold text-machine-black leading-tight">{post.title}</h1>
          {post.targetPublishDate && (
            <p className="mt-2 text-sm text-shop-grey">
              Target post date:{" "}
              <span className="font-mono text-signal-dark">
                {new Date(post.targetPublishDate + "T12:00:00Z").toLocaleDateString("en-CA", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {post.reviewStatus === "approved" && (
            <button
              onClick={copyToClipboard}
              className="px-4 py-2.5 rounded-lg text-sm font-medium border border-signal/40 text-signal-dark hover:bg-signal/5 transition-colors"
            >
              {copied ? "✓ Copied" : "Copy body to paste in GBP"}
            </button>
          )}
          {post.reviewStatus === "pending-review" && (
            <>
              <button
                onClick={sendBack}
                disabled={busy}
                className="px-4 py-2.5 rounded-lg text-sm font-medium border border-urgent/40 text-urgent hover:bg-urgent/5 transition-colors disabled:opacity-50"
              >
                Send back
              </button>
              <button
                onClick={approve}
                disabled={busy}
                className="px-5 py-2.5 rounded-lg text-sm font-bold bg-signal text-machine-black hover:bg-signal-dark hover:text-white transition-colors disabled:opacity-50"
              >
                Approve
              </button>
            </>
          )}
        </div>
      </div>

      {error && (
        <div className="mb-4 px-4 py-3 rounded-lg bg-urgent/10 border border-urgent/30 text-urgent text-sm">
          {error}
        </div>
      )}

      {/* Post preview */}
      <div className="bg-white border border-border-light rounded-xl p-6 mb-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-signal-dark font-semibold mb-3">
          GBP Post preview
        </p>
        <p className="text-base text-machine-black leading-relaxed whitespace-pre-wrap mb-4">{post.body}</p>
        {post.ctaType && post.ctaType !== "none" && (
          <div className="pt-4 border-t border-border-light">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-signal-subtle text-signal-dark text-xs font-semibold">
              CTA: {post.ctaType.toUpperCase()}
            </span>
          </div>
        )}
        <p className="mt-4 text-xs text-shop-grey">
          {post.body.length} / 1500 characters
        </p>
      </div>

      {/* Comments */}
      <div className="bg-white border border-border-light rounded-xl p-5 mb-6">
        <h3 className="text-sm font-semibold text-machine-black mb-4">Comments</h3>

        <div className="flex gap-1 mb-4 p-1 bg-concrete rounded-lg">
          {(["Alex", "Mich"] as const).map((a) => (
            <button
              key={a}
              onClick={() => setAuthor(a)}
              className={`flex-1 py-1.5 rounded-md text-xs font-medium transition-colors ${
                author === a ? "bg-signal text-machine-black" : "text-shop-grey hover:text-machine-black"
              }`}
            >
              I am {a}
            </button>
          ))}
        </div>

        <textarea
          value={draftComment}
          onChange={(e) => setDraftComment(e.target.value)}
          placeholder="Leave a comment..."
          rows={3}
          className="w-full bg-workshop border border-border-light rounded-lg px-3 py-2 text-sm text-machine-black placeholder:text-shop-grey/60 focus:outline-none focus:border-signal mb-3 resize-none"
        />
        <button
          onClick={postComment}
          disabled={busy || !draftComment.trim()}
          className="px-4 py-2 rounded-lg text-xs font-semibold bg-signal text-machine-black hover:bg-signal-dark hover:text-white transition-colors disabled:opacity-50"
        >
          {busy ? "Posting..." : "Post comment"}
        </button>

        {(post.comments || []).length > 0 && (
          <ul className="mt-5 space-y-2">
            {[...post.comments].reverse().map((c) => (
              <li
                key={c._key}
                className={`p-3 rounded-lg border text-xs ${
                  c.resolved
                    ? "bg-concrete border-border-light opacity-60"
                    : "bg-workshop border-border-light"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-semibold text-machine-black">{c.author}</span>
                  <span className="text-[10px] text-shop-grey/70">
                    {new Date(c.createdAt).toLocaleDateString("en-CA", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <p className="text-shop-grey leading-relaxed">{c.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
