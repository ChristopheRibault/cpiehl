// src/app/[slug]/page.tsx
import { getPage, getAllPageSlugs } from "@/sanity/pages";
import { Metadata } from "next";
import {
  TeamList,
  BoardMembersList,
  RichTextBlock,
} from "../_components/sections";
import { Section } from "../_components";
import { CardGrid } from "../_components/sections/CardGrid/CardGrid";

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPage(slug);
  return {
    title: page.title,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const page = await getPage(slug);

  return (
    <main className="w-full">
      <Section title={page.title}>
        {page.sections?.map((section) => {
          switch (section._type) {
            case "teamList":
              return <TeamList key={section._key} section={section} />;
            case "boardMembersList":
              return <BoardMembersList key={section._key} section={section} />;
            case "richTextBlock":
              return (
                <RichTextBlock key={section._key} content={section.content} />
              );
            case "cardGrid":
              return <CardGrid key={section._key} cards={section.cards} />;
            default:
              return null;
          }
        })}
      </Section>
    </main>
  );
}
