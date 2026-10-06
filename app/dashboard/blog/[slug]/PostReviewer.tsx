"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

interface Block {
  _key: string;
  kind: "h2" | "h3" | "p" | "bullet" | "numbered" | "story";
  text: string;
  paragraphId: string;
}

interface Faq {
  _key: string;
  q: string;
  a: string;
}

interface Comment {
  _key: string;
  author: string;
  paragraphId: string;
  comment: string;
  createdAt: string;
  resolved: boolean;
}

interface Post {
  _id: string;
  title: string;
  slug: string;
  cluster?: string;
  reviewStatus: string;
  targetPublishDate?: string;
  publishedAt?: string;
  answerFirst: string;
  body: Block[];
  faqs: Faq[];
  metaDescription?: string;
  targetKeyword?: string;
  internalLink?: string;
  comments: Comment[];
}

const STATUS_META: Record<string, { label: string; bg: string; text: string }> = {
  "pending-review": { label: "Pending review", bg: "bg-[rgba(245,158,11,0.12)]", text: "text-urgent" },
  "in-revision": { label: "In revision", bg: "bg-signal-subtle", text: "text-signal" },
  approved: { label: "Approved", bg: "bg-signal-subtle", text: "text-signal" },
  published: { label: "Published", bg: "bg-concrete", text: "text-shop-grey" },
};

export default function PostReviewer({ post: initialPost }: { post: Post }) {
  const router = useRouter();
  const [post, setPost] = useState(initialPost);
  const [activePid, setActivePid] = useState<string | null>(null);
  const [draftComment, setDraftComment] = useState("");
  const [author, setAuthor] = useState<"Alex" | "Mich">("Alex");
  const [error, setError] = useState("");
  const [, startTransition] = useTransition();
  const [busy, setBusy] = useState(false);

  const meta = STATUS_META[post.reviewStatus] || { label: post.reviewStatus, bg: "bg-concrete", text: "text-shop-grey" };
  const slug = post.slug;

  function commentsFor(paragraphId: string): Comment[] {
    return (post.comments || []).filter((c) => c.paragraphId === paragraphId);
  }
  const unresolvedTotal = (post.comments || []).filter((c) => !c.resolved).length;

  async function postComment() {
    if (!activePid || !draftComment.trim()) return;
    setBusy(true);
    setError("");
    try {
      const res = await fetch(`/api/posts/${slug}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paragraphId: activePid, comment: draftComment.trim(), author }),
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

  async function resolveComment(key: string, resolved: boolean) {
    setBusy(true);
    try {
      await fetch(`/api/posts/${slug}/comments`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commentKey: key, resolved }),
      });
      setPost({
        ...post,
        comments: (post.comments || []).map((c) => (c._key === key ? { ...c, resolved } : c)),
      });
    } finally {
      setBusy(false);
    }
  }

  async function approve() {
    if (!confirm(`Approve "${post.title}" and schedule it to publish on ${post.targetPublishDate || "soon"}?`)) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/posts/${slug}/approve`, { method: "POST" });
      if (!res.ok) throw new Error("Approve failed");
      const { publishedAt } = await res.json();
      setPost({ ...post, reviewStatus: "approved", publishedAt });
      startTransition(() => router.refresh());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  async function sendBack() {
    const note = prompt("Optional overall note for Mich (specific feedback should go in paragraph comments):");
    if (note === null) return; // canceled
    setBusy(true);
    try {
      const res = await fetch(`/api/posts/${slug}/send-back`, {
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

  async function resubmit() {
    if (!confirm("Resubmit to Alex for review? Comments stay visible.")) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/posts/${slug}/resubmit`, { method: "POST" });
      if (!res.ok) throw new Error("Resubmit failed");
      setPost({ ...post, reviewStatus: "pending-review" });
      startTransition(() => router.refresh());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
      {/* MAIN ARTICLE COLUMN */}
      <div>
        <div className="mb-6 flex items-start justify-between gap-4 flex-wrap">
          <div>
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-3 ${meta.bg} ${meta.text}`}
            >
              {meta.label}
            </span>
            <h1 className="text-3xl font-semibold text-machine-black leading-tight max-w-2xl">{post.title}</h1>
            {post.targetPublishDate && (
              <p className="mt-2 text-sm text-shop-grey">
                Target publish:{" "}
                <span className="font-mono text-signal-dark">
                  {new Date(post.targetPublishDate + "T12:00:00Z").toLocaleDateString("en-CA", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </p>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            {post.reviewStatus === "pending-review" && (
              <>
                <button
                  onClick={sendBack}
                  disabled={busy}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium border border-urgent/40 text-urgent hover:bg-urgent/5 transition-colors disabled:opacity-50"
                >
                  Send back with notes
                </button>
                <button
                  onClick={approve}
                  disabled={busy}
                  className="px-5 py-2.5 rounded-lg text-sm font-bold bg-signal text-machine-black hover:bg-signal-dark hover:text-white transition-colors disabled:opacity-50"
                >
                  Approve & schedule
                </button>
              </>
            )}
            {post.reviewStatus === "in-revision" && (
              <button
                onClick={resubmit}
                disabled={busy}
                className="px-5 py-2.5 rounded-lg text-sm font-bold bg-signal text-machine-black hover:bg-signal-dark hover:text-white transition-colors disabled:opacity-50"
              >
                Resubmit to Alex
              </button>
            )}
          </div>
        </div>

        {error && (
          <div className="mb-4 px-4 py-3 rounded-lg bg-urgent/10 border border-urgent/30 text-urgent text-sm">
            {error}
          </div>
        )}

        {/* Answer-first */}
        <Paragraph
          paragraphId="answer-first"
          comments={commentsFor("answer-first")}
          isActive={activePid === "answer-first"}
          onActivate={() => setActivePid("answer-first")}
          unresolvedCount={commentsFor("answer-first").filter((c) => !c.resolved).length}
        >
          <div className="border-l-4 border-signal pl-5 py-2 bg-signal-subtle/30">
            <p className="text-[10px] uppercase tracking-[0.2em] text-signal-dark font-semibold mb-2">Answer-first</p>
            <p className="text-base text-machine-black italic leading-relaxed">{post.answerFirst}</p>
          </div>
        </Paragraph>

        {/* Body blocks */}
        {post.body?.map((b) => {
          const cs = commentsFor(b.paragraphId);
          const unresolved = cs.filter((c) => !c.resolved).length;
          return (
            <Paragraph
              key={b._key}
              paragraphId={b.paragraphId}
              comments={cs}
              isActive={activePid === b.paragraphId}
              onActivate={() => setActivePid(b.paragraphId)}
              unresolvedCount={unresolved}
            >
              {renderBlock(b)}
            </Paragraph>
          );
        })}

        {/* FAQs */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border-light">
            <h2 className="text-lg font-semibold text-machine-black mb-4">Frequently asked questions</h2>
            {post.faqs.map((faq, i) => {
              const pid = `faq-${i + 1}`;
              const cs = commentsFor(pid);
              const unresolved = cs.filter((c) => !c.resolved).length;
              return (
                <Paragraph
                  key={faq._key || pid}
                  paragraphId={pid}
                  comments={cs}
                  isActive={activePid === pid}
                  onActivate={() => setActivePid(pid)}
                  unresolvedCount={unresolved}
                >
                  <div>
                    <p className="text-base font-semibold text-machine-black mb-1">Q: {faq.q}</p>
                    <p className="text-base text-shop-grey leading-relaxed">A: {faq.a}</p>
                  </div>
                </Paragraph>
              );
            })}
          </div>
        )}
      </div>

      {/* SIDEBAR */}
      <aside className="lg:sticky lg:top-6 self-start">
        <div className="bg-white border border-border-light rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-machine-black">
              {activePid ? "Add a comment" : "Comments"}
            </h3>
            {unresolvedTotal > 0 && (
              <span className="text-[10px] font-mono text-urgent">{unresolvedTotal} open</span>
            )}
          </div>

          {/* Author selector */}
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

          {activePid ? (
            <>
              <p className="text-[10px] uppercase tracking-wider text-shop-grey mb-2">
                On <span className="font-mono text-signal-dark">{activePid}</span>
              </p>
              <textarea
                value={draftComment}
                onChange={(e) => setDraftComment(e.target.value)}
                placeholder="What's wrong, what to change, why..."
                rows={4}
                className="w-full bg-workshop border border-border-light rounded-lg px-3 py-2 text-sm text-machine-black placeholder:text-shop-grey/60 focus:outline-none focus:border-signal mb-3 resize-none"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setActivePid(null);
                    setDraftComment("");
                  }}
                  className="flex-1 py-2 rounded-lg text-xs text-shop-grey hover:text-machine-black transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={postComment}
                  disabled={busy || !draftComment.trim()}
                  className="flex-[2] py-2 rounded-lg text-xs font-semibold bg-signal text-machine-black hover:bg-signal-dark hover:text-white transition-colors disabled:opacity-50"
                >
                  {busy ? "Posting..." : "Post comment"}
                </button>
              </div>
            </>
          ) : (
            <p className="text-xs text-shop-grey leading-relaxed">
              Click on any paragraph in the article to leave a specific comment.
            </p>
          )}
        </div>

        {/* All comments list */}
        {(post.comments || []).length > 0 && (
          <div className="mt-4">
            <h3 className="text-xs uppercase tracking-[0.15em] text-shop-grey font-semibold mb-3 px-1">
              All comments
            </h3>
            <ul className="space-y-2">
              {[...post.comments].reverse().map((c) => (
                <li
                  key={c._key}
                  onClick={() => setActivePid(c.paragraphId)}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors text-xs ${
                    c.resolved
                      ? "bg-concrete border-border-light opacity-60"
                      : activePid === c.paragraphId
                        ? "bg-signal-subtle border-signal/40"
                        : "bg-white border-border-light hover:border-signal/30"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-semibold text-machine-black">{c.author}</span>
                    <span className="font-mono text-[10px] text-signal-dark">{c.paragraphId}</span>
                  </div>
                  <p className="text-shop-grey leading-relaxed mb-2">{c.comment}</p>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-shop-grey/70">
                      {new Date(c.createdAt).toLocaleDateString("en-CA", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        resolveComment(c._key, !c.resolved);
                      }}
                      className={`px-2 py-0.5 rounded-full font-medium ${
                        c.resolved
                          ? "text-shop-grey/60 hover:text-shop-grey"
                          : "text-signal-dark hover:bg-signal/10"
                      }`}
                    >
                      {c.resolved ? "Reopen" : "Mark resolved"}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </div>
  );
}

function Paragraph({
  paragraphId,
  comments,
  isActive,
  onActivate,
  unresolvedCount,
  children,
}: {
  paragraphId: string;
  comments: Comment[];
  isActive: boolean;
  onActivate: () => void;
  unresolvedCount: number;
  children: React.ReactNode;
}) {
  return (
    <div
      onClick={onActivate}
      className={`group relative my-3 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
        isActive
          ? "bg-signal/10 ring-1 ring-signal/40"
          : "hover:bg-concrete"
      }`}
    >
      {children}
      {comments.length > 0 && (
        <div className="absolute -right-1 top-2 flex flex-col items-end gap-1">
          {unresolvedCount > 0 ? (
            <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-urgent text-bright text-[10px] font-bold">
              {unresolvedCount}
            </span>
          ) : (
            <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-signal/30 text-signal text-[10px] font-bold">
              ✓
            </span>
          )}
        </div>
      )}
    </div>
  );
}

function renderBlock(b: Block) {
  switch (b.kind) {
    case "h2":
      return <h2 className="text-2xl font-bold text-machine-black mt-6 mb-2">{b.text}</h2>;
    case "h3":
      return <h3 className="text-lg font-semibold text-machine-black mt-4 mb-1">{b.text}</h3>;
    case "p":
      return <p className="text-base text-shop-grey leading-relaxed">{b.text}</p>;
    case "bullet":
      return (
        <p className="text-base text-shop-grey leading-relaxed pl-6 relative">
          <span className="absolute left-0 top-0 text-signal font-bold">•</span>
          {b.text}
        </p>
      );
    case "numbered":
      return <p className="text-base text-shop-grey leading-relaxed pl-2">{b.text}</p>;
    case "story":
      return (
        <div className="bg-blue-50 border-l-4 border-blue-500 pl-5 py-3 my-2 rounded-r-lg">
          <p className="text-[10px] uppercase tracking-[0.2em] text-blue-700 font-semibold mb-1">From the shop</p>
          <p className="text-base text-machine-black italic leading-relaxed">{b.text}</p>
        </div>
      );
    default:
      return <p className="text-base text-shop-grey">{b.text}</p>;
  }
}
