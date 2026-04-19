import { NextResponse } from "next/server";
import { getSession } from "@/lib/getSession";
import { writeClient } from "@/sanity/writeClient";
import { client } from "@/sanity/client";
import {
  buildMachineBody,
  generateSlug,
  type MachinePayload,
} from "@/lib/machinePayload";

const LIST_QUERY = `*[_type == "machine"] | order(_createdAt desc) {
  _id,
  title,
  brand,
  model,
  year,
  price,
  status,
  "mainImage": photos[0].asset->url,
  "slug": slug.current
}`;

async function requireAuth() {
  const session = await getSession();
  return session.isLoggedIn;
}

export async function GET() {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!client) {
    return NextResponse.json(
      { error: "Sanity client not configured" },
      { status: 500 }
    );
  }
  const machines = await client.fetch(LIST_QUERY);
  return NextResponse.json({ machines });
}

export async function POST(request: Request) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!writeClient) {
    return NextResponse.json(
      { error: "Sanity write client not configured" },
      { status: 500 }
    );
  }

  try {
    const payload = (await request.json()) as MachinePayload;

    if (!payload.title || !payload.brand || !payload.model) {
      return NextResponse.json(
        { error: "Title, brand, and model are required." },
        { status: 400 }
      );
    }

    const body = buildMachineBody(payload);
    const slugValue = generateSlug(payload.title);

    const created = await writeClient.create({
      _type: "machine",
      ...body,
      slug: { _type: "slug", current: slugValue },
    });

    return NextResponse.json({ success: true, id: created._id });
  } catch (err) {
    console.error("Create machine error:", err);
    const message =
      err instanceof Error ? err.message : "Failed to create machine.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
