import { client } from "@/sanity/client";
import { z } from "zod";

import { colorSchema } from "./components/color";
import { navigationLinkSchema } from "./schemas/navigationLink";
import { navigationGroupSchema } from "./schemas/navigationGroup";

// Schéma Zod pour le logo (asset)
const logoSchema = z.object({
  asset: z.object({
    url: z.url(),
  }),
});

// Schéma Zod principal pour les settings du site
export const siteSettingsSchema = z.object({
  siteTitle: z.string(),
  header: z.object({
    logo: logoSchema,
  }),
  meta: z.object({
    shortTitle: z.string().optional(),
    siteDescription: z.string().optional(),
    favicon: logoSchema.optional(),
  }),
  chartColors: z.object({
    primaryColor: colorSchema,
    secondaryColor: colorSchema.optional(),
  }),
  navigation: z
    .array(z.union([navigationLinkSchema, navigationGroupSchema]))
    .optional(),
});

export type SiteSettings = z.infer<typeof siteSettingsSchema>;

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await client.fetch(
    `*[_type == "siteSettings"][0]{ siteTitle, header{logo{asset->{url}}}, meta{shortTitle, siteDescription, favicon{asset->{url}}}, chartColors{primaryColor, secondaryColor}, navigation[]{_type, label, page->{_id, title, slug}, children[]{_type, label, page->{_id, title, slug}}} }`,
  );
  const parsed = siteSettingsSchema.safeParse(data);
  if (!parsed.success) {
    // Ici, on peut throw ou retourner un fallback
    console.error("Erreur de validation des settings Sanity:", parsed.error);
    throw new Error("Site settings invalid");
  }
  return parsed.data;
}
