import z from "zod";

export const partnerSchema = z.object({
  _id: z.string(),
  name: z.string(),
  logo: z.object({
    asset: z.object({
      url: z.url(),
    }),
    alt: z.string().optional().nullable(),
  }),
  link: z.string().optional().nullable(),
});

export type Partner = z.infer<typeof partnerSchema>;
