import { createClient } from "next-sanity";

/**
 * Server-only Sanity client with write permissions.
 * Used in API routes for the dashboard CRUD operations.
 * Alex never sees this - it's the bridge between the dashboard and Sanity.
 */

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_TOKEN;

export const writeClient =
  projectId && token
    ? createClient({
        projectId,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
        apiVersion: "2026-04-01",
        token,
        useCdn: false,
      })
    : null;
