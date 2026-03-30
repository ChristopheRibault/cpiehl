import { z } from "zod";

export const colorSchema = z.object({
  hex: z.string(),
  alpha: z.number().optional(),
});

export type Color = z.infer<typeof colorSchema>;
