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

export type TeamSection = z.infer<typeof teamSectionSchema>;
