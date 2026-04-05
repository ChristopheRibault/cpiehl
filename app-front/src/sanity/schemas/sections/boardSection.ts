import z from "zod";

const memberSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  role: z.string(),
  city: z.string().nullable().optional(),
  complement: z.string().nullable().optional(),
});

export const boardSectionSchema = z.object({
  _type: z.literal("boardSection"),
  title: z.string(),
  mainBoardMembers: z.array(memberSchema),
  secondaryBoardMembers: z.array(memberSchema),
});

export type BoardSection = z.infer<typeof boardSectionSchema>;
