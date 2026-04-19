import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const client = projectId
  ? createClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: "2026-04-01",
      useCdn: true,
    })
  : null;

// GROQ queries for the machine catalog
export const MACHINES_QUERY = `*[_type == "machine" && status != "sold"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  brand,
  model,
  year,
  price,
  status,
  machineType,
  controlType,
  location,
  inspectionAvailable,
  "mainImage": photos[0].asset->url,
  description
}`;

export const MACHINE_BY_SLUG_QUERY = `*[_type == "machine" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  brand,
  model,
  year,
  price,
  status,
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
  description,
  sellerName,
  sellerContact,
  "photos": photos[].asset->url
}`;

export const ALL_MACHINE_SLUGS_QUERY = `*[_type == "machine"] { "slug": slug.current }`;
