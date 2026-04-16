import z from "zod";
import { richTextBlockSchema } from "./richTextBlock";
import { imageSchema } from "@/sanity/components/image";
import { fileSchema } from "@/sanity/components/file";

export const textWithImageSchema = z.object({
  _type: z.literal("textWithImage"),
  _key: z.string(),
  text: richTextBlockSchema,
  image: imageSchema,
  imagePosition: z.enum(["left", "right"]),
  link: z
    .object({
      url: z.url().optional(),
      file: fileSchema.optional(),
    })
    .nullable(),
});

export type TextWithImage = z.infer<typeof textWithImageSchema>;
