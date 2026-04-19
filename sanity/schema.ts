// Sanity schema for CNC machine inventory catalog

export const machineSchema = {
  name: "machine",
  title: "Machine",
  type: "document",
  fields: [
    // Basic info
    {
      name: "title",
      title: "Listing Title",
      type: "string",
      description: "e.g. 'Mazak Quick Turn 250MSY - 2018'",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
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
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "model",
      title: "Model",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "year",
      title: "Year",
      type: "number",
      description: "Year of manufacture",
    },
    {
      name: "price",
      title: "Price (CAD)",
      type: "number",
      description: "Asking price in CAD. Leave empty for 'Contact for price'.",
    },
    {
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
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },

    // Photos
    {
      name: "photos",
      title: "Photos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Upload multiple photos. First photo is the main listing image.",
    },

    // Description
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      description: "General description, condition notes, reason for selling.",
    },

    // Technical specs
    {
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
    },
    {
      name: "controlType",
      title: "Control Type",
      type: "string",
      description: "e.g. Fanuc 31i-B, Mazatrol SmoothAi, Siemens 840D",
    },
    {
      name: "axes",
      title: "Number of Axes",
      type: "number",
    },
    {
      name: "spindleRPM",
      title: "Max Spindle RPM",
      type: "number",
    },
    {
      name: "tableSize",
      title: "Table/Chuck Size",
      type: "string",
      description: "e.g. '500mm x 1000mm' or '10 inch chuck'",
    },
    {
      name: "travels",
      title: "Axis Travels (X/Y/Z)",
      type: "string",
      description: "e.g. 'X: 1020mm, Y: 510mm, Z: 510mm'",
    },
    {
      name: "hours",
      title: "Spindle Hours",
      type: "number",
      description: "Total spindle hours if known",
    },
    {
      name: "weight",
      title: "Machine Weight",
      type: "string",
      description: "e.g. '8,500 kg'",
    },

    // Location & inspection
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "City/region where the machine is located",
    },
    {
      name: "inspectionAvailable",
      title: "AVI Inspection Available",
      type: "boolean",
      description: "Can AVI provide a pre-purchase inspection?",
      initialValue: true,
    },
    {
      name: "inspectionReport",
      title: "Inspection Report",
      type: "file",
      description: "Upload PDF inspection report if available",
    },

    // Seller info (internal)
    {
      name: "sellerName",
      title: "Seller Name",
      type: "string",
      description: "Internal only. Not shown on website.",
    },
    {
      name: "sellerContact",
      title: "Seller Contact",
      type: "string",
      description: "Internal only. Phone/email of the seller.",
    },
  ],

  preview: {
    select: {
      title: "title",
      brand: "brand",
      status: "status",
      media: "photos.0",
    },
    prepare({ title, brand, status, media }: { title: string; brand: string; status: string; media: unknown }) {
      return {
        title: title || "Untitled",
        subtitle: `${brand || "Unknown"} | ${status || "available"}`,
        media,
      };
    },
  },

  orderings: [
    { title: "Newest First", name: "createdDesc", by: [{ field: "_createdAt", direction: "desc" as const }] },
    { title: "Price Low to High", name: "priceAsc", by: [{ field: "price", direction: "asc" as const }] },
    { title: "Price High to Low", name: "priceDesc", by: [{ field: "price", direction: "desc" as const }] },
  ],
};
