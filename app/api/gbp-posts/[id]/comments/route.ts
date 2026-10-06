import { NextResponse } from "next/server";
import { getSession } from "@/lib/getSession";
import { freshClient } from "@/sanity/client";
import { writeClient } from "@/sanity/writeClient";
import { sendReviewNotification } from "@/lib/reviewNotifications";

type Ctx = { params: Promise<{ id: string }> };

export async function POST(request: Request, { params }: Ctx) {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!writeClient || !freshClient) {
    return NextResponse.json({ error: "Sanity not configured" }, { status: 500 });
  }

  const { id } = await params;
  const body = (await request.json()) as { paragraphId?: string; comment?: string; author?: string };
  if (!body.comment) {
    return NextResponse.json({ error: "comment required" }, { status: 400 });
  }

  const existing = await freshClient.fetch<{ title: string } | null>(
    `*[_type == "gbpPost" && _id == $id][0] { title }`,
    { id },
  );
  if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const newComment = {
    _key: `cmt-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    _type: "reviewComment",
    author: body.author || "Alex",
    paragraphId: body.paragraphId || "body",
    comment: body.comment,
    createdAt: new Date().toISOString(),
    resolved: false,
  };

  await writeClient
    .patch(id)
    .setIfMissing({ comments: [] })
    .insert("after", "comments[-1]", [newComment])
    .commit();

  sendReviewNotification({
    type: "comment",
    docType: "gbpPost",
    title: existing.title,
    slug: id,
    author: newComment.author,
    detail: body.comment,
    paragraphId: body.paragraphId,
  }).catch((err) => console.error("Notification failed:", err));

  return NextResponse.json({ ok: true, comment: newComment });
}
