import { NextResponse } from "next/server";
import { getSession } from "@/lib/getSession";
import { freshClient } from "@/sanity/client";
import { writeClient } from "@/sanity/writeClient";
import { sendReviewNotification } from "@/lib/reviewNotifications";

type Ctx = { params: Promise<{ slug: string }> };

// Alex sends the article back to Mich for revision.
export async function POST(request: Request, { params }: Ctx) {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!writeClient || !freshClient) {
    return NextResponse.json({ error: "Sanity not configured" }, { status: 500 });
  }

  const { slug } = await params;
  const body = (await request.json().catch(() => ({}))) as { note?: string };

  const post = await freshClient.fetch<{ _id: string; title: string } | null>(
    `*[_type == "post" && slug.current == $slug][0] { _id, title }`,
    { slug },
  );
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await writeClient.patch(post._id).set({ reviewStatus: "in-revision" }).commit();

  sendReviewNotification({
    type: "send-back",
    docType: "post",
    title: post.title,
    slug,
    author: "Alex",
    detail: body.note || "(no overall note — see paragraph comments)",
  }).catch((err) => console.error("Notification failed:", err));

  return NextResponse.json({ ok: true });
}
