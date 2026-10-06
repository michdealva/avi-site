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

export const freshClient = projectId
  ? createClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: "2026-04-01",
      useCdn: false,
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

// ===== Blog post queries =====
export const PUBLISHED_POSTS_QUERY = `*[_type == "post" && publishedAt <= now() && reviewStatus in ["approved", "published"]] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  cluster,
  answerFirst,
  metaDescription,
  publishedAt,
  "heroImage": heroImage.asset->url
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug && publishedAt <= now() && reviewStatus in ["approved", "published"]][0] {
  _id,
  title,
  "slug": slug.current,
  cluster,
  answerFirst,
  body,
  faqs,
  metaDescription,
  targetKeyword,
  internalLink,
  publishedAt,
  "heroImage": heroImage.asset->url
}`;

export const ALL_POST_SLUGS_QUERY = `*[_type == "post" && publishedAt <= now() && reviewStatus in ["approved", "published"]] { "slug": slug.current }`;

// ===== Dashboard queries (admin only — uses freshClient for live data) =====
export const DASHBOARD_POSTS_QUERY = `*[_type == "post"] | order(targetPublishDate asc) {
  _id,
  title,
  "slug": slug.current,
  cluster,
  reviewStatus,
  targetPublishDate,
  publishedAt,
  "commentCount": count(comments),
  "unresolvedCount": count(comments[!resolved])
}`;

export const DASHBOARD_POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  cluster,
  reviewStatus,
  targetPublishDate,
  publishedAt,
  answerFirst,
  body,
  faqs,
  metaDescription,
  targetKeyword,
  internalLink,
  comments,
  "heroImage": heroImage.asset->url
}`;

export const DASHBOARD_GBP_POSTS_QUERY = `*[_type == "gbpPost"] | order(targetPublishDate asc) {
  _id,
  title,
  reviewStatus,
  targetPublishDate,
  publishedAt,
  body,
  ctaType,
  "commentCount": count(comments),
  "unresolvedCount": count(comments[!resolved])
}`;

export const DASHBOARD_GBP_POST_QUERY = `*[_type == "gbpPost" && _id == $id][0] {
  _id,
  title,
  reviewStatus,
  targetPublishDate,
  publishedAt,
  body,
  ctaType,
  comments,
  "image": image.asset->url
}`;
