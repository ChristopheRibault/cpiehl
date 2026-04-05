// src/sanity/schemas/page.ts
import z from "zod";

export const teamSectionSchema = z.object({
  _type: z.literal("teamSection"),
  title: z.string(),
  teamMembers: z.array(
    z.object({
      firstname: z.string(),
      lastname: z.string(),
      role: z.array(z.string()).nullable(),
      email: z.email(),
      photo: z
        .object({
          asset: z.object({
            url: z.url(),
          }),
        })
        .optional(),
      avatar: z
        .object({
          asset: z.object({
            url: z.url(),
          }),
        })
        .optional(),
    }),
  ),
});

const sectionSchema = z.union([
  // partnersSectionSchema,
  // contactSectionSchema,
  teamSectionSchema,
]);

export const pageSchema = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.object({
    current: z.string(),
  }),
  sections: z.array(sectionSchema).nullable(),
});

export type TeamSection = z.infer<typeof teamSectionSchema>;
export type Page = z.infer<typeof pageSchema>;
