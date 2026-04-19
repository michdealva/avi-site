import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { machineSchema } from "./sanity/schema";

export default defineConfig({
  name: "avi-industriel",
  title: "AVI Industriel - Machine Inventory",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2rqrz36d",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [machineSchema],
  },
});
