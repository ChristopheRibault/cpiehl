import z from "zod";

export const navigationLinkSchema = z.object({
  _type: z.literal("navigationLink"),
  label: z.string(),
  page: z.object({
    _id: z.string(),
    title: z.string(),
    slug: z.object({
      current: z.string(),
    }),
  }),
});
