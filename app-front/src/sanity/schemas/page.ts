// src/sanity/schemas/page.ts
import z from "zod";
import { teamListSchema } from "./sections/teamList";
import { boardMembersListSchema } from "./sections/boardMembersList";
import { richTextBlockSchema } from "./sections/richTextBlock";
import { cardGridSchema } from "./sections/cardGrid";
import { figureCardSchema } from "./sections/figureCard";
import { imagesGallerySchema } from "./sections/imageGallery";
import { textWithImageSchema } from "./sections/textWithImage";
import { carouselSchema } from "./sections/carousel";

const sectionSchema = z.union([
  teamListSchema,
  boardMembersListSchema,
  richTextBlockSchema,
  textWithImageSchema,
  cardGridSchema,
  figureCardSchema,
  imagesGallerySchema,
  carouselSchema,
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
