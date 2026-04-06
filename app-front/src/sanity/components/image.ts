import { z } from "zod";

export const imageSchema = z.object({
  asset: z.object({
    url: z.url(),
  }),
  alt: z.string().optional().nullable(),
});

export type SanityImage = z.infer<typeof imageSchema>;
