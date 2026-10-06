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
  const body = (await request.json().catch(() => ({}))) as { note?: string };

  const post = await freshClient.fetch<{ title: string } | null>(
    `*[_type == "gbpPost" && _id == $id][0] { title }`,
    { id },
  );
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await writeClient.patch(id).set({ reviewStatus: "in-revision" }).commit();

  sendReviewNotification({
    type: "send-back",
    docType: "gbpPost",
    title: post.title,
    slug: id,
    author: "Alex",
    detail: body.note || "(no overall note)",
  }).catch((err) => console.error("Notification failed:", err));

  return NextResponse.json({ ok: true });
}
