/**
 * Shared helpers for transforming form payloads into Sanity documents.
 */

export type PhotoRef = {
  _key: string;
  assetId: string;
};

export type MachinePayload = {
  title?: string;
  brand?: string;
  model?: string;
  year?: number;
  price?: number;
  status?: string;
  description?: string;
  machineType?: string;
  controlType?: string;
  axes?: number;
  spindleRPM?: number;
  tableSize?: string;
  travels?: string;
  hours?: number;
  weight?: string;
  location?: string;
  inspectionAvailable?: boolean;
  sellerName?: string;
  sellerContact?: string;
  existingPhotos?: PhotoRef[];
  newPhotoAssetIds?: string[];
};

export function generateSlug(title: string): string {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const suffix = Date.now().toString(36).slice(-5);
  return `${base || "machine"}-${suffix}`;
}

export function randomKey(): string {
  return Math.random().toString(36).slice(2, 14);
}

export function buildPhotosArray(
  existing: PhotoRef[] = [],
  newAssetIds: string[] = []
) {
  const items = [
    ...existing.map((p) => ({
      _type: "image",
      _key: p._key || randomKey(),
      asset: { _type: "reference", _ref: p.assetId },
    })),
    ...newAssetIds.map((assetId) => ({
      _type: "image",
      _key: randomKey(),
      asset: { _type: "reference", _ref: assetId },
    })),
  ];
  return items;
}

/**
 * Builds the document body sent to Sanity for both create and update.
 * Only includes defined scalar fields and the photos array.
 */
export function buildMachineBody(payload: MachinePayload) {
  const body: Record<string, unknown> = {};

  const scalarKeys: Array<keyof MachinePayload> = [
    "title", "brand", "model", "year", "price", "status",
    "description", "machineType", "controlType", "axes",
    "spindleRPM", "tableSize", "travels", "hours", "weight",
    "location", "inspectionAvailable", "sellerName", "sellerContact",
  ];

  for (const key of scalarKeys) {
    const value = payload[key];
    if (value !== undefined && value !== "") {
      body[key] = value;
    }
  }

  body.photos = buildPhotosArray(
    payload.existingPhotos,
    payload.newPhotoAssetIds
  );

  return body;
}
