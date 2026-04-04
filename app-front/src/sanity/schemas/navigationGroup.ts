import z from "zod";
import { navigationLinkSchema } from "./navigationLink";

export const navigationGroupSchema = z.object({
  _type: z.literal("navigationGroup"),
  label: z.string(),
  children: z
    .array(navigationLinkSchema)
    .min(1, "Un groupe de navigation doit contenir au moins un lien"),
});
