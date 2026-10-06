import { defineType, defineField } from "sanity";

export const machineSchema = defineType({
  name: "machine",
  title: "Machine",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Listing Title",
      type: "string",
      description: "e.g. 'Mazak Quick Turn 250MSY - 2018'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
      options: {
        list: [
          "Makino", "Mazak", "Cincinnati", "Matsuura", "Haas",
          "TOS", "Emmegi", "Fanuc", "Siemens", "Hurco",
          "DMG Mori", "Okuma", "Hankook", "Doosan", "Hardinge",
          "Other",
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "model",
      title: "Model",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      description: "Year of manufacture",
    }),
    defineField({
      name: "price",
      title: "Price (CAD)",
      type: "number",
      description: "Asking price in CAD. Leave empty for 'Contact for price'.",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Pending", value: "pending" },
          { title: "Sold", value: "sold" },
        ],
      },
      initialValue: "available",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photos",
      title: "Photos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Upload multiple photos. First photo is the main listing image.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      description: "General description, condition notes, reason for selling.",
    }),
    defineField({
      name: "machineType",
      title: "Machine Type",
      type: "string",
      options: {
        list: [
          "CNC Lathe",
          "CNC Mill (Vertical)",
          "CNC Mill (Horizontal)",
          "5-Axis Machining Center",
          "Turn-Mill Center",
          "Swiss Lathe",
          "EDM",
          "Grinding",
          "Other",
        ],
      },
    }),
    defineField({
      name: "controlType",
      title: "Control Type",
      type: "string",
      description: "e.g. Fanuc 31i-B, Mazatrol SmoothAi, Siemens 840D",
    }),
    defineField({
      name: "axes",
      title: "Number of Axes",
      type: "number",
    }),
    defineField({
      name: "spindleRPM",
      title: "Max Spindle RPM",
      type: "number",
    }),
    defineField({
      name: "tableSize",
      title: "Table/Chuck Size",
      type: "string",
      description: "e.g. '500mm x 1000mm' or '10 inch chuck'",
    }),
    defineField({
      name: "travels",
      title: "Axis Travels (X/Y/Z)",
      type: "string",
      description: "e.g. 'X: 1020mm, Y: 510mm, Z: 510mm'",
    }),
    defineField({
      name: "hours",
      title: "Spindle Hours",
      type: "number",
      description: "Total spindle hours if known",
    }),
    defineField({
      name: "weight",
      title: "Machine Weight",
      type: "string",
      description: "e.g. '8,500 kg'",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "City/region where the machine is located",
    }),
    defineField({
      name: "inspectionAvailable",
      title: "AVI Inspection Available",
      type: "boolean",
      description: "Can AVI provide a pre-purchase inspection?",
      initialValue: true,
    }),
    defineField({
      name: "inspectionReport",
      title: "Inspection Report",
      type: "file",
      description: "Upload PDF inspection report if available",
    }),
    defineField({
      name: "sellerName",
      title: "Seller Name",
      type: "string",
      description: "Internal only. Not shown on website.",
    }),
    defineField({
      name: "sellerContact",
      title: "Seller Contact",
      type: "string",
      description: "Internal only. Phone/email of the seller.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      brand: "brand",
      status: "status",
      media: "photos.0",
    },
    prepare({ title, brand, status, media }) {
      return {
        title: title || "Untitled",
        subtitle: `${brand || "Unknown"} | ${status || "available"}`,
        media: media as never,
      };
    },
  },
  orderings: [
    { title: "Newest First", name: "createdDesc", by: [{ field: "_createdAt", direction: "desc" }] },
    { title: "Price Low to High", name: "priceAsc", by: [{ field: "price", direction: "asc" }] },
    { title: "Price High to Low", name: "priceDesc", by: [{ field: "price", direction: "desc" }] },
  ],
});

// ===== Shared review system =====
const reviewStatusOptions = [
  { title: "Pending review (Alex)", value: "pending-review" },
  { title: "In revision (Mich editing)", value: "in-revision" },
  { title: "Approved", value: "approved" },
  { title: "Published", value: "published" },
];

const commentObject = defineType({
  name: "reviewComment",
  title: "Comment",
  type: "object",
  fields: [
    defineField({ name: "author", type: "string", title: "Author", initialValue: "Alex" }),
    defineField({
      name: "paragraphId",
      type: "string",
      title: "Paragraph ID",
      description: "Internal reference to the paragraph being commented on (e.g. 'p-3').",
    }),
    defineField({ name: "comment", type: "text", title: "Comment", rows: 3 }),
    defineField({ name: "createdAt", type: "datetime", title: "Created at" }),
    defineField({ name: "resolved", type: "boolean", title: "Resolved", initialValue: false }),
  ],
  preview: {
    select: { author: "author", comment: "comment", paragraphId: "paragraphId" },
    prepare({ author, comment, paragraphId }) {
      return {
        title: `${author || "Unknown"} on ${paragraphId || "—"}`,
        subtitle: comment,
      };
    },
  },
});

// ===== Blog post (long-form, weekly cadence) =====
export const postSchema = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  fieldsets: [
    { name: "review", title: "Review & scheduling", options: { collapsible: true, collapsed: false } },
    { name: "seo", title: "SEO", options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    // Review & scheduling
    defineField({
      name: "reviewStatus",
      title: "Review status",
      type: "string",
      fieldset: "review",
      options: { list: reviewStatusOptions, layout: "radio" },
      initialValue: "pending-review",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "targetPublishDate",
      title: "Target publish date",
      type: "date",
      fieldset: "review",
      description: "When this post should go live, set when added to the queue.",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      fieldset: "review",
      description: "Set automatically when Alex approves. Public site shows posts with publishedAt <= now().",
    }),
    defineField({
      name: "comments",
      title: "Review comments",
      type: "array",
      fieldset: "review",
      of: [{ type: "reviewComment" }],
    }),

    // Content
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cluster",
      title: "Topic cluster",
      type: "string",
      options: {
        list: [
          { title: "Live Tooling", value: "live-tooling" },
          { title: "CNC Repair", value: "cnc-repair" },
          { title: "Used CNC", value: "used-cnc" },
        ],
      },
    }),
    defineField({
      name: "answerFirst",
      title: "Answer-first paragraph",
      type: "text",
      rows: 4,
      description: "2–3 sentence direct answer that AI engines cite. Lives at the top of the article.",
      validation: (Rule) => Rule.required().max(600),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      description: "Article body. Each block has a paragraphId for paragraph-level comments.",
      of: [
        {
          type: "object",
          name: "section",
          fields: [
            defineField({
              name: "kind",
              type: "string",
              options: {
                list: [
                  { title: "Heading 2", value: "h2" },
                  { title: "Heading 3", value: "h3" },
                  { title: "Paragraph", value: "p" },
                  { title: "Bullet", value: "bullet" },
                  { title: "Numbered", value: "numbered" },
                  { title: "Story (anonymized)", value: "story" },
                ],
              },
              initialValue: "p",
            }),
            defineField({ name: "text", type: "text", rows: 3 }),
            defineField({
              name: "paragraphId",
              type: "string",
              description: "Stable ID for this block (auto-generated, used for comments).",
            }),
          ],
          preview: {
            select: { kind: "kind", text: "text" },
            prepare({ kind, text }) {
              return { title: text?.slice(0, 80), subtitle: kind?.toUpperCase() };
            },
          },
        },
      ],
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "q", type: "string", title: "Question" }),
            defineField({ name: "a", type: "text", rows: 3, title: "Answer" }),
          ],
          preview: {
            select: { q: "q", a: "a" },
            prepare({ q, a }) {
              return { title: q, subtitle: a };
            },
          },
        },
      ],
    }),

    // SEO
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "string",
      fieldset: "seo",
      validation: (Rule) => Rule.max(170),
    }),
    defineField({
      name: "targetKeyword",
      title: "Target keyword",
      type: "string",
      fieldset: "seo",
    }),
    defineField({
      name: "internalLink",
      title: "Internal link (path)",
      type: "string",
      fieldset: "seo",
      description: "Path to the related service page, e.g. /services/live-tooling-repair",
    }),
  ],
  preview: {
    select: { title: "title", status: "reviewStatus", date: "targetPublishDate" },
    prepare({ title, status, date }) {
      const statusEmoji =
        status === "approved" ? "✅" :
        status === "in-revision" ? "✏️" :
        status === "published" ? "🚀" : "👀";
      return {
        title: title || "Untitled",
        subtitle: `${statusEmoji} ${status || "pending"}${date ? ` · ${date}` : ""}`,
      };
    },
  },
  orderings: [
    { title: "Target date", name: "targetAsc", by: [{ field: "targetPublishDate", direction: "asc" }] },
    { title: "Newest first", name: "createdDesc", by: [{ field: "_createdAt", direction: "desc" }] },
  ],
});

// ===== GBP post (short, 2x/week cadence) =====
export const gbpPostSchema = defineType({
  name: "gbpPost",
  title: "Google Business Profile post",
  type: "document",
  fieldsets: [
    { name: "review", title: "Review & scheduling", options: { collapsible: true, collapsed: false } },
  ],
  fields: [
    defineField({
      name: "reviewStatus",
      title: "Review status",
      type: "string",
      fieldset: "review",
      options: { list: reviewStatusOptions, layout: "radio" },
      initialValue: "pending-review",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "targetPublishDate",
      title: "Target publish date",
      type: "date",
      fieldset: "review",
    }),
    defineField({
      name: "publishedAt",
      title: "Posted to GBP at",
      type: "datetime",
      fieldset: "review",
      description: "Set when Mich confirms it's been pasted into GBP.",
    }),
    defineField({
      name: "comments",
      title: "Review comments",
      type: "array",
      fieldset: "review",
      of: [{ type: "reviewComment" }],
    }),

    defineField({
      name: "title",
      title: "Internal title (not shown publicly)",
      type: "string",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "text",
      rows: 6,
      description: "Up to 1500 chars. Aim for 200-300.",
      validation: (Rule) => Rule.required().max(1500),
    }),
    defineField({
      name: "ctaType",
      title: "CTA button",
      type: "string",
      options: {
        list: [
          { title: "Call now", value: "call" },
          { title: "Learn more", value: "learn" },
          { title: "Book", value: "book" },
          { title: "None", value: "none" },
        ],
      },
      initialValue: "call",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "title", status: "reviewStatus", date: "targetPublishDate" },
    prepare({ title, status, date }) {
      const statusEmoji =
        status === "approved" ? "✅" :
        status === "in-revision" ? "✏️" :
        status === "published" ? "🚀" : "👀";
      return {
        title: title || "Untitled",
        subtitle: `${statusEmoji} ${status || "pending"}${date ? ` · ${date}` : ""}`,
      };
    },
  },
  orderings: [
    { title: "Target date", name: "targetAsc", by: [{ field: "targetPublishDate", direction: "asc" }] },
  ],
});

export const reviewCommentSchema = commentObject;
