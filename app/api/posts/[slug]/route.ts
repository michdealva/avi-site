import { NextResponse } from "next/server";
import { getSession } from "@/lib/getSession";
import { freshClient, DASHBOARD_POST_QUERY } from "@/sanity/client";
import { writeClient } from "@/sanity/writeClient";

type Ctx = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, { params }: Ctx) {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!freshClient) {
    return NextResponse.json({ error: "Sanity not configured" }, { status: 500 });
  }
  const { slug } = await params;
  const post = await freshClient.fetch(DASHBOARD_POST_QUERY, { slug });
  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ post });
}

export async function PATCH(request: Request, { params }: Ctx) {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!writeClient || !freshClient) {
    return NextResponse.json({ error: "Sanity not configured" }, { status: 500 });
  }
  const { slug } = await params;
  const body = (await request.json()) as Record<string, unknown>;

  // Whitelist editable fields. Status changes go through dedicated endpoints.
  const allowed = ["title", "answerFirst", "metaDescription", "targetKeyword", "internalLink", "body", "faqs"];
  const patch: Record<string, unknown> = {};
  for (const key of allowed) {
    if (key in body) patch[key] = body[key];
  }

  if (Object.keys(patch).length === 0) {
    return NextResponse.json({ error: "No valid fields to update" }, { status: 400 });
  }

  const existing = await freshClient.fetch<{ _id: string } | null>(
    `*[_type == "post" && slug.current == $slug][0] { _id }`,
    { slug },
  );
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const updated = await writeClient.patch(existing._id).set(patch).commit();
  return NextResponse.json({ ok: true, id: updated._id });
}
