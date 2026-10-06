import { NextResponse } from "next/server";
import { getSession } from "@/lib/getSession";
import { freshClient } from "@/sanity/client";
import { writeClient } from "@/sanity/writeClient";
import { sendReviewNotification } from "@/lib/reviewNotifications";

type Ctx = { params: Promise<{ slug: string }> };

export async function POST(_request: Request, { params }: Ctx) {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!writeClient || !freshClient) {
    return NextResponse.json({ error: "Sanity not configured" }, { status: 500 });
  }

  const { slug } = await params;
  const post = await freshClient.fetch<{
    _id: string;
    title: string;
    targetPublishDate?: string;
  } | null>(
    `*[_type == "post" && slug.current == $slug][0] { _id, title, targetPublishDate }`,
    { slug },
  );
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });

  // Use targetPublishDate at noon UTC; if it is unset or already past, publish now.
  const now = new Date();
  const target = post.targetPublishDate
    ? new Date(post.targetPublishDate + "T12:00:00Z")
    : now;
  const publishDate = target > now ? target : now;

  await writeClient
    .patch(post._id)
    .set({
      reviewStatus: "approved",
      publishedAt: publishDate.toISOString(),
    })
    .commit();

  sendReviewNotification({
    type: "approve",
    docType: "post",
    title: post.title,
    slug,
    author: "Alex",
    detail: `Scheduled to publish on ${publishDate.toISOString().slice(0, 10)}.`,
  }).catch((err) => console.error("Notification failed:", err));

  return NextResponse.json({
    ok: true,
    publishedAt: publishDate.toISOString(),
  });
}
