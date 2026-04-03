import { z } from "zod";
import { imageSchema } from "./image";

export const programSchema = z.object({
  _id: z.string(),
  title: z.string(),
  pdfDocument: z.object({
    file: z.object({
      asset: z.object({
        url: z.url(),
      }),
    }),
    preview: imageSchema.nullable(),
  }).nullable(),
  link: z.object({
    pageRef: z.object({ _ref: z.string() }).nullable(),
    label: z.string().nullable(),
  }).nullable(),
});

export type Program = z.infer<typeof programSchema>;
