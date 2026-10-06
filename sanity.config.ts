import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import {
  machineSchema,
  postSchema,
  gbpPostSchema,
  reviewCommentSchema,
} from "./sanity/schema";
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
            S.divider(),
            S.listItem()
              .title("Blog Posts")
              .child(
                S.list()
                  .title("Blog")
                  .items([
                    S.listItem()
                      .title("All Blog Posts")
                      .child(
                        S.documentTypeList("post")
                          .title("All Posts")
                          .filter("_type == 'post'"),
                      ),
                    S.listItem()
                      .title("Pending Review")
                      .child(
                        S.documentTypeList("post")
                          .title("Pending Review")
                          .filter("_type == 'post' && reviewStatus == 'pending-review'"),
                      ),
                    S.listItem()
                      .title("Approved")
                      .child(
                        S.documentTypeList("post")
                          .title("Approved")
                          .filter("_type == 'post' && reviewStatus == 'approved'"),
                      ),
                    S.listItem()
                      .title("Published")
                      .child(
                        S.documentTypeList("post")
                          .title("Published")
                          .filter("_type == 'post' && reviewStatus == 'published'"),
                      ),
                  ]),
              ),
            S.listItem()
              .title("GBP Posts")
              .child(
                S.list()
                  .title("Google Business Profile")
                  .items([
                    S.listItem()
                      .title("All GBP Posts")
                      .child(
                        S.documentTypeList("gbpPost")
                          .title("All GBP Posts")
                          .filter("_type == 'gbpPost'"),
                      ),
                    S.listItem()
                      .title("Pending Review")
                      .child(
                        S.documentTypeList("gbpPost")
                          .title("Pending Review")
                          .filter("_type == 'gbpPost' && reviewStatus == 'pending-review'"),
                      ),
                    S.listItem()
                      .title("Approved")
                      .child(
                        S.documentTypeList("gbpPost")
                          .title("Approved")
                          .filter("_type == 'gbpPost' && reviewStatus == 'approved'"),
                      ),
                  ]),
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [machineSchema, postSchema, gbpPostSchema, reviewCommentSchema],
  },
});
