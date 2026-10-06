import { NextResponse } from "next/server";
import { getSession } from "@/lib/getSession";
import { freshClient } from "@/sanity/client";
import { DASHBOARD_POSTS_QUERY } from "@/sanity/client";

export async function GET() {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!freshClient) {
    return NextResponse.json({ error: "Sanity not configured" }, { status: 500 });
  }
  const posts = await freshClient.fetch(DASHBOARD_POSTS_QUERY);
  return NextResponse.json({ posts });
}
