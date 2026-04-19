import { NextResponse } from "next/server";
import { getSession } from "@/lib/getSession";
import { writeClient } from "@/sanity/writeClient";

export async function POST(request: Request) {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!writeClient) {
    return NextResponse.json(
      { error: "Sanity write client not configured" },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const asset = await writeClient.assets.upload("image", buffer, {
      filename: file.name,
      contentType: file.type,
    });

    return NextResponse.json({ assetId: asset._id, url: asset.url });
  } catch (err) {
    console.error("Photo upload error:", err);
    const message =
      err instanceof Error ? err.message : "Failed to upload photo.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
