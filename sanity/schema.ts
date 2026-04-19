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
