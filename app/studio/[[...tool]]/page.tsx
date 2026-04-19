"use client";

/**
 * Sanity Studio embedded at /studio
 * Alex can access this to manage the machine inventory.
 */

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
