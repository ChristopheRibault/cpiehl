// src/sanity/schemas/page.ts
import z from "zod";
import { teamSectionSchema } from "./sections/teamSection";
import { boardSectionSchema } from "./sections/boardSection";
import { richTextBlockSchema } from "./sections/richTextBlock";

const sectionSchema = z.union([
  teamSectionSchema,
  boardSectionSchema,
  richTextBlockSchema,
]);

export const pageSchema = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.object({
    current: z.string(),
  }),
  sections: z.array(sectionSchema).nullable(),
});

export type Page = z.infer<typeof pageSchema>;
