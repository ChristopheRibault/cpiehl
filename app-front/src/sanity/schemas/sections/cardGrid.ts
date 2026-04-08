import z from "zod";
import { imageSchema } from "../../components/image";
import { linkSchema } from "@/sanity/components/link";
import { richTextBlockSchema } from "./richTextBlock";

export const cardGridSchema = z.object({
  _type: z.literal("cardGrid"),
  _key: z.string(),
  cards: z.array(
    z.object({
      title: z.string(),
      description: richTextBlockSchema.optional(),
      image: imageSchema.optional().nullable(),
      icon: imageSchema.optional().nullable(),
      links: z.array(linkSchema).optional(),
    }),
  ),
});

export type CardGrid = z.infer<typeof cardGridSchema>;
