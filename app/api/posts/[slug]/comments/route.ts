import { NextResponse } from "next/server";
import { getSession } from "@/lib/getSession";
import { freshClient } from "@/sanity/client";
import { writeClient } from "@/sanity/writeClient";
import { sendReviewNotification } from "@/lib/reviewNotifications";

type Ctx = { params: Promise<{ slug: string }> };

export async function POST(request: Request, { params }: Ctx) {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!writeClient || !freshClient) {
    return NextResponse.json({ error: "Sanity not configured" }, { status: 500 });
  }

  const { slug } = await params;
  const body = (await request.json()) as { paragraphId?: string; comment?: string; author?: string };

  if (!body.comment || !body.paragraphId) {
    return NextResponse.json({ error: "paragraphId and comment are required" }, { status: 400 });
  }

  const existing = await freshClient.fetch<{ _id: string; title: string } | null>(
    `*[_type == "post" && slug.current == $slug][0] { _id, title }`,
    { slug },
  );
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const newComment = {
    _key: `cmt-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    _type: "reviewComment",
    author: body.author || "Alex",
    paragraphId: body.paragraphId,
    comment: body.comment,
    createdAt: new Date().toISOString(),
    resolved: false,
  };

  await writeClient
    .patch(existing._id)
    .setIfMissing({ comments: [] })
    .insert("after", "comments[-1]", [newComment])
    .commit();

  // Email notification (best-effort, non-blocking)
  sendReviewNotification({
    type: "comment",
    docType: "post",
    title: existing.title,
    slug,
    author: newComment.author,
    detail: body.comment,
    paragraphId: body.paragraphId,
  }).catch((err) => console.error("Notification failed:", err));

  return NextResponse.json({ ok: true, comment: newComment });
}

// Mark a comment as resolved (Mich, after addressing it)
export async function PATCH(request: Request, { params }: Ctx) {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!writeClient || !freshClient) {
    return NextResponse.json({ error: "Sanity not configured" }, { status: 500 });
  }

  const { slug } = await params;
  const body = (await request.json()) as { commentKey?: string; resolved?: boolean };
  if (!body.commentKey) {
    return NextResponse.json({ error: "commentKey required" }, { status: 400 });
  }

  const existing = await freshClient.fetch<{ _id: string } | null>(
    `*[_type == "post" && slug.current == $slug][0] { _id }`,
    { slug },
  );
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await writeClient
    .patch(existing._id)
    .set({ [`comments[_key=="${body.commentKey}"].resolved`]: body.resolved ?? true })
    .commit();

  return NextResponse.json({ ok: true });
}
