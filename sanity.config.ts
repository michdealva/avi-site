import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { machineSchema } from "./sanity/schema";
import { aviTheme } from "./sanity/theme";
import { StudioLogo } from "./sanity/StudioLogo";

export default defineConfig({
  name: "avi-industriel",
  title: "AVI Industriel",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2rqrz36d",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  theme: aviTheme,
  studio: {
    components: {
      logo: StudioLogo,
    },
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Machine Inventory")
              .child(
                S.documentTypeList("machine")
                  .title("All Machines")
                  .filter("_type == 'machine'"),
              ),
            S.divider(),
            S.listItem()
              .title("Available")
              .child(
                S.documentTypeList("machine")
                  .title("Available Machines")
                  .filter("_type == 'machine' && status == 'available'"),
              ),
            S.listItem()
              .title("Pending")
              .child(
                S.documentTypeList("machine")
                  .title("Pending Machines")
                  .filter("_type == 'machine' && status == 'pending'"),
              ),
            S.listItem()
              .title("Sold")
              .child(
                S.documentTypeList("machine")
                  .title("Sold Machines")
                  .filter("_type == 'machine' && status == 'sold'"),
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [machineSchema],
  },
});
