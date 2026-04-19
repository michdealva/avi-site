import { NextResponse } from "next/server";
import { getSession } from "@/lib/getSession";
import { writeClient } from "@/sanity/writeClient";
import { client } from "@/sanity/client";
import {
  buildMachineBody,
  type MachinePayload,
} from "@/lib/machinePayload";

const MACHINE_QUERY = `*[_type == "machine" && _id == $id][0] {
  _id,
  title,
  slug,
  brand,
  model,
  year,
  price,
  status,
  description,
  machineType,
  controlType,
  axes,
  spindleRPM,
  tableSize,
  travels,
  hours,
  weight,
  location,
  inspectionAvailable,
  sellerName,
  sellerContact,
  "photos": photos[]{ _key, "assetId": asset._ref, "url": asset->url }
}`;

async function requireAuth() {
  const session = await getSession();
  return session.isLoggedIn;
}

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Ctx) {
  if (!(await requireAuth())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!client) {
    return NextResponse.json(
      { error: "Sanity client not configured" },
      { status: 500 }
    );
  }
  const { id } = await params;

  const machine = await client.fetch(MACHINE_QUERY, { id });
  if (!machine) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const photos = (machine.photos || []).filter(
    (p: { assetId?: string; url?: string }) => p.assetId && p.url
  );

  return NextResponse.json({ machine, photos });
}

export async function PATCH(request: Request, { params }: Ctx) {
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
    const { id } = await params;
    const payload = (await request.json()) as MachinePayload;
    const body = buildMachineBody(payload);

    await writeClient.patch(id).set(body).commit();

    return NextResponse.json({ success: true, id });
  } catch (err) {
    console.error("Update machine error:", err);
    const message =
      err instanceof Error ? err.message : "Failed to update machine.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: Ctx) {
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
    const { id } = await params;
    await writeClient.delete(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Delete machine error:", err);
    const message =
      err instanceof Error ? err.message : "Failed to delete machine.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
