import { NextResponse } from "next/server";
import { getSession } from "@/lib/getSession";
import { freshClient } from "@/sanity/client";
import { writeClient } from "@/sanity/writeClient";
import { sendReviewNotification } from "@/lib/reviewNotifications";

type Ctx = { params: Promise<{ id: string }> };

export async function POST(_request: Request, { params }: Ctx) {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!writeClient || !freshClient) {
    return NextResponse.json({ error: "Sanity not configured" }, { status: 500 });
  }
  const { id } = await params;

  const post = await freshClient.fetch<{ title: string; targetPublishDate?: string } | null>(
    `*[_type == "gbpPost" && _id == $id][0] { title, targetPublishDate }`,
    { id },
  );
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await writeClient.patch(id).set({ reviewStatus: "approved" }).commit();

  sendReviewNotification({
    type: "approve",
    docType: "gbpPost",
    title: post.title,
    slug: id,
    author: "Alex",
    detail: post.targetPublishDate
      ? `Ready to paste into GBP on ${post.targetPublishDate}.`
      : "Approved — schedule a date in GBP.",
  }).catch((err) => console.error("Notification failed:", err));

  return NextResponse.json({ ok: true });
}
