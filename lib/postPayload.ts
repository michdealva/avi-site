/**
 * Helper to convert a draft article (from blog content data) into a Sanity post document.
 * Auto-generates paragraphIds so Alex's comments anchor to specific blocks.
 */

export type BlockKind = "h2" | "h3" | "p" | "bullet" | "numbered" | "story" | "table";

export interface DraftBlock {
  kind: BlockKind;
  text?: string;
}

export interface DraftFaq {
  q: string;
  a: string;
}

export interface DraftArticle {
  week: number;
  cluster: "live-tooling" | "cnc-repair" | "used-cnc";
  title: string;
  slug: string;
  metaDescription: string;
  targetKeyword: string;
  internalLink: string;
  answerFirst: string;
  body: DraftBlock[];
  faqs: DraftFaq[];
}

export interface SanityBlockOut {
  _key: string;
  _type: "section";
  kind: Exclude<BlockKind, "table">;
  text: string;
  paragraphId: string;
}

export interface SanityFaqOut {
  _key: string;
  _type: "object";
  q: string;
  a: string;
}

function key(prefix: string, i: number): string {
  return `${prefix}-${i}-${Math.random().toString(36).slice(2, 8)}`;
}

export function buildPostDocument(
  article: DraftArticle,
  targetDate: string,
): {
  _type: "post";
  title: string;
  slug: { _type: "slug"; current: string };
  cluster: string;
  answerFirst: string;
  metaDescription: string;
  targetKeyword: string;
  internalLink: string;
  body: SanityBlockOut[];
  faqs: SanityFaqOut[];
  reviewStatus: "pending-review";
  targetPublishDate: string;
  comments: [];
} {
  const body: SanityBlockOut[] = article.body
    .filter((b) => b.kind !== "table") // tables not yet supported in Sanity blocks
    .map((b, i) => ({
      _key: key("blk", i),
      _type: "section",
      kind: b.kind as Exclude<BlockKind, "table">,
      text: b.text || "",
      paragraphId: `p-${i + 1}`,
    }));

  const faqs: SanityFaqOut[] = article.faqs.map((f, i) => ({
    _key: key("faq", i),
    _type: "object",
    q: f.q,
    a: f.a,
  }));

  return {
    _type: "post",
    title: article.title,
    slug: { _type: "slug", current: article.slug },
    cluster: article.cluster,
    answerFirst: article.answerFirst,
    metaDescription: article.metaDescription,
    targetKeyword: article.targetKeyword,
    internalLink: article.internalLink,
    body,
    faqs,
    reviewStatus: "pending-review",
    targetPublishDate: targetDate,
    comments: [],
  };
}

/**
 * Calculate target publish dates for a list of articles.
 * Default: Thursdays starting on the given startDate, one per week.
 */
export function thursdayCalendar(
  startDate: string,
  count: number,
): string[] {
  const dates: string[] = [];
  const start = new Date(startDate + "T12:00:00Z");
  for (let i = 0; i < count; i++) {
    const d = new Date(start);
    d.setUTCDate(start.getUTCDate() + i * 7);
    dates.push(d.toISOString().slice(0, 10));
  }
  return dates;
}
