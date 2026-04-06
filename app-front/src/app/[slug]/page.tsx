// src/app/[slug]/page.tsx
import { getPage, getAllPageSlugs } from "@/sanity/pages";
import { Metadata } from "next";
import {
  TeamSection,
  BoardSection,
  RichTextBlock,
} from "../_components/sections";
// import PartnersSection from "@/app/_components/sections/PartnersSection";
// import ContactSection from "@/app/_components/sections/ContactSection";

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
      {page.sections?.map((section) => {
        switch (section._type) {
          case "teamSection":
            return <TeamSection key={section.title} section={section} />;
          case "boardSection":
            return <BoardSection key={section.title} section={section} />;
          case "richTextBlock":
            return (
              <RichTextBlock key={section._key} content={section.content} />
            );
          // case "partnersSection":
          //   return <PartnersSection key={section.title} section={section} />;
          // case "contactSection":
          //   return <ContactSection key={section.title} section={section} />;
          default:
            return null;
        }
      })}
    </main>
  );
}
