import z from "zod";

export const fileSchema = z.object({
  asset: z.object({
    url: z.string(),
  }),
});

export type File = z.infer<typeof fileSchema>;
