import { imageSchema } from "@/sanity/components/image";
import z from "zod";

export const imagesGallerySchema = z.object({
  _type: z.literal("imagesGallery"),
  _key: z.string(),
  images: z
    .array(imageSchema)
    .min(1, "La galerie d'images doit contenir au moins une image"),
});

export type ImagesGallery = z.infer<typeof imagesGallerySchema>;
