import { z } from "zod";

export const imageSchema = z.object({
  asset: z.object({
    url: z.url(),
  }),
  alt: z.string().optional().nullable(),
  position: z.enum(["left", "center", "right"]).optional(),
  hotspot: z
    .object({
      x: z.number(),
      y: z.number(),
      height: z.number(),
      width: z.number(),
    })
    .optional(),
});

export type SanityImage = z.infer<typeof imageSchema>;
