// src/sanity/pages.ts
import { client } from "@/sanity/client";
import { pageSchema, type Page } from "./schemas/page";

export async function getPage(slug: string): Promise<Page> {
  const data = await client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      sections[]{
        _type,
        _key,
        ...,
        "content": content[]{
          ...,
          "markDefs": markDefs[]{...}
        },
        "teamMembers": teamMembers[]{
          ...,
          "photo": photo{asset->{url}},
          "avatar": avatar{asset->{url}}
        },
        "cards": cards[]{
          ...,
          "image": image{asset->{url}}
        }
      }
    }`,
    { slug },
  );

  console.log({ data });

  return pageSchema.parse(data);
}

export async function getAllPageSlugs(): Promise<string[]> {
  const pages = await client.fetch(`*[_type == "page"]{ slug }`);
  return pages.map(
    (p: unknown) => (p as { slug: { current: string } }).slug.current,
  );
}
