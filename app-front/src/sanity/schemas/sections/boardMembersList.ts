import z from "zod";

const memberSchema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  role: z.string(),
  city: z.string().nullable().optional(),
  complement: z.string().nullable().optional(),
});

export const boardMembersListSchema = z.object({
  _type: z.literal("boardMembersList"),
  _key: z.string(),
  mainBoardMembers: z.array(memberSchema),
  secondaryBoardMembers: z.array(memberSchema),
});

export type BoardMembersList = z.infer<typeof boardMembersListSchema>;
