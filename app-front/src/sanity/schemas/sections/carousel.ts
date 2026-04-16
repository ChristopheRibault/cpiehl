import { imageSchema } from "@/sanity/components/image";
import z from "zod";

export const carouselSchema = z.object({
  _type: z.literal("carousel"),
  _key: z.string(),
  title: z.string().optional(),
  slides: z
    .array(
      z.object({
        image: imageSchema,
        category: z.string().optional(),
        title: z.string().optional(),
        subtitle: z.string().optional(),
      }),
    )
    .min(1, "Le carrousel doit contenir au moins une slide"),
});

export type Carousel = z.infer<typeof carouselSchema>;
