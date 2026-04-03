
import { z } from "zod";
import { client } from "./client";
import { actualiteSchema } from "./schemas/actualite";
import { programSchema } from "./schemas/program";
import { partnerSchema } from "./schemas/partner";

const HOMEPAGE_QUERY = `*[_type == "homepage"][0]{
  _id,
  title,
  banner[]{asset->{url}, alt},
  actualitesSection {
    title,
    actualites[]-> {
      _id,
      title,
      excerpt,
      image{asset->{url}, alt},
      link,
      date
    }
  },
  programSection {
    title,
    programs[]-> {
      _id,
      title,
      pdfDocument {
        file {asset->{url}},
        preview{asset->{url}, alt}
      },
      link {
        pageRef->{_id, slug},
        label
      }
    }
  },
  partnersSection {
    title,
    partners[]-> {
      _id,
      name,
      logo{asset->{url}, alt},
      link
    }
  },
  contactSection {
    title,
    contactInfo {
      name,
      email,
      phone,
      address,
      address2
    }
  }
}`;

// Schéma section actualités
const actualitesSectionSchema = z.object({
  title: z.string(),
  actualites: z.array(actualiteSchema).optional(),
});

const programSectionSchema = z.object({
  title: z.string(),
  programs: z.array(programSchema).optional(),
});

const partnersSectionSchema = z.object({
  title: z.string(),
  partners: z.array(partnerSchema).optional(),
});

const contactSectionSchema = z.object({
  title: z.string(),
  contactInfo: z.object({
    name: z.string(),
    email: z.email(),
    phone: z.string(),
    address: z.string().optional(),
    address2: z.string().optional(),
  })
});

// Schéma principal homepage
export const homepageSchema = z.object({
  _id: z.string(),
  title: z.string(),
  banner: z.array(z.object({
    asset: z.object({
      url: z.url(),
    }),
    alt: z.string().optional().nullable(),
  })).optional(),
  actualitesSection: actualitesSectionSchema.optional(),
  programSection: programSectionSchema.optional(),
  partnersSection: partnersSectionSchema.optional(),
  contactSection: contactSectionSchema.optional(),
});

export type Homepage = z.infer<typeof homepageSchema>;

export async function getHomepage(): Promise<Homepage> {
  const data = await client.fetch(HOMEPAGE_QUERY, {}, { next: { revalidate: 30 } });
  const parsed = homepageSchema.safeParse(data);
  if (!parsed.success) {
    console.error("Erreur de validation de la homepage Sanity:", parsed.error);
    throw new Error("Homepage data invalid");
  }
  return parsed.data;
}
