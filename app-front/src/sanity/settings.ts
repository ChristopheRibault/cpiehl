
import { client } from "@/sanity/client";
import { z } from "zod";

import { colorSchema } from "./schemas/color";

// Schéma Zod pour le logo (asset)
const logoSchema = z.object({
  asset: z.object({
    url: z.string().url(),
  }),
});


// Schéma Zod principal pour les settings du site
export const siteSettingsSchema = z.object({
  siteTitle: z.string(),
  shortTitle: z.string().optional(),
  siteDescription: z.string().optional(),
  logo: logoSchema.optional(),
  primaryColor: colorSchema.optional(),
  secondaryColor: colorSchema.optional(),
});

export type SiteSettings = z.infer<typeof siteSettingsSchema>;

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await client.fetch(
    `*[_type == "siteSettings"][0]{ siteTitle, shortTitle, siteDescription, logo{asset->{url}}, primaryColor, secondaryColor }`,
  );
  const parsed = siteSettingsSchema.safeParse(data);
  if (!parsed.success) {
    // Ici, on peut throw ou retourner un fallback
    console.error("Erreur de validation des settings Sanity:", parsed.error);
    throw new Error("Site settings invalid");
  }
  return parsed.data;
}
