/**
 * Migration script — loads draft articles into Sanity as posts with reviewStatus="pending-review".
 *
 * Usage:
 *   npx tsx scripts/migrate-blog-posts.ts
 *
 * Pre-reqs:
 *   - SANITY_API_TOKEN set in .env.local (Editor permissions)
 *   - data/blog-drafts.ts populated with the v3 (Alex-reviewed) article content
 *
 * Idempotent: checks for existing post by slug, skips if already loaded.
 * Safe to re-run.
 */

import { createClient } from "@sanity/client";
import { config as dotenv } from "dotenv";
import { buildPostDocument, thursdayCalendar, type DraftArticle } from "@/lib/postPayload";
import { blogDrafts } from "@/data/blog-drafts";

dotenv({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in env");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-04-01",
  token,
  useCdn: false,
});

// First Thursday of the publishing schedule. Update this if start date shifts.
const FIRST_THURSDAY = "2026-05-14";

async function migrate() {
  const articles: DraftArticle[] = blogDrafts;
  const dates = thursdayCalendar(FIRST_THURSDAY, articles.length);

  console.log(`Migrating ${articles.length} articles starting ${FIRST_THURSDAY}\n`);

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i];
    const targetDate = dates[i];

    const existing = await client.fetch<{ _id: string } | null>(
      `*[_type == "post" && slug.current == $slug][0] { _id }`,
      { slug: article.slug },
    );

    if (existing) {
      console.log(`⏭  Week ${article.week}: already exists (${article.slug}), skipping`);
      continue;
    }

    const doc = buildPostDocument(article, targetDate);

    try {
      const created = await client.create(doc);
      console.log(`✓  Week ${article.week}: ${article.title}`);
      console.log(`   id=${created._id} · target=${targetDate}\n`);
    } catch (err) {
      console.error(`✗  Week ${article.week} failed:`, err);
    }
  }

  console.log("\nMigration complete. Articles are in Sanity with reviewStatus=\"pending-review\".");
  console.log("Visit /studio or /dashboard/blog to review.");
}

migrate().catch((err) => {
  console.error(err);
  process.exit(1);
});
