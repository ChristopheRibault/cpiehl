import { colorSchema } from "@/sanity/components/color";
import { imageSchema } from "@/sanity/components/image";
import { pageSchema } from "@/sanity/components/page";
import z from "zod";

// Annotation de lien
const linkAnnotationSchema = z.object({
  _type: z.literal("link"),
  _key: z.string(),
  linkType: z.enum(["external", "internal"]).optional(),
  href: z.union([z.url(), z.undefined()]).nullable(),
  internalPage: pageSchema.nullable().optional(),
  external: z.boolean().optional(),
});

// Annotation de couleur
const colorAnnotationSchema = z.object({
  _type: z.literal("color"),
  _key: z.string(),
  colorValue: colorSchema, // Code couleur hex ou rgb
});

// Span (texte avec marks)
const spanSchema = z.object({
  _type: z.literal("span"),
  text: z.string(),
  marks: z.array(z.string()).optional(), // Index into markDefs
});

// Block principal
const blockSchema = z.object({
  _type: z.literal("block"),
  _key: z.string(),
  style: z.enum(["normal", "h3", "h4", "blockquote"]).optional(),
  children: z.array(spanSchema),
  markDefs: z
    .array(z.union([linkAnnotationSchema, colorAnnotationSchema]))
    .optional(),
  listItem: z.enum(["bullet", "number"]).optional(), // Pour les listes
  level: z.number().optional(), // Pour les listes imbriquées
});

// Rich text block complet
export const richTextBlockSchema = z.object({
  _type: z.literal("richTextBlock"),
  _key: z.string().optional(),
  content: z.array(
    z.union([
      blockSchema,
      imageSchema.extend({
        _type: z.literal("image"),
        _key: z.string(),
      }),
    ]),
  ),
});

export type RichTextBlock = z.infer<typeof richTextBlockSchema>;
