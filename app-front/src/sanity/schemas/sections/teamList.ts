import z from "zod";

export const teamListSchema = z.object({
  _type: z.literal("teamList"),
  _key: z.string(),
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

export type TeamList = z.infer<typeof teamListSchema>;
