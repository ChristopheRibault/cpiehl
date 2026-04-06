import z from "zod";
import { richTextBlockSchema } from "./richTextBlock";

export const figureCardSchema = z.object({
  _type: z.literal("figureCard"),
  _key: z.string(),
  title: z.string(),
  text: richTextBlockSchema.optional(),
});

export type FigureCard = z.infer<typeof figureCardSchema>;
