import { z } from "zod";
import { imageSchema } from "../components/image";

export const actualiteSchema = z.object({
  _id: z.string(),
  title: z.string(),
  excerpt: z.string().optional(),
  image: imageSchema.optional(),
  link: z.string().optional().nullable(),
  date: z.string().optional(),
});

export type Actualite = z.infer<typeof actualiteSchema>;
