// src/app/[slug]/page.tsx
import { getPage, getAllPageSlugs } from "@/sanity/pages";
import { Metadata } from "next";
import {
  TeamList,
  BoardMembersList,
  RichTextBlock,
  CardGrid,
  FigureCard,
  TextWithImage,
  ImageGallery,
} from "../_components/sections";
import { Section } from "../_components";
import CarouselWithCaption from "../_components/sections/Carousel/CarouselWithCaption";

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
            case "figureCard":
              return <FigureCard key={section._key} section={section} />;
            case "imagesGallery":
              return (
                <ImageGallery key={section._key} content={section.images} />
              );
            case "textWithImage":
              return <TextWithImage key={section._key} section={section} />;
            case "carousel":
              return (
                <CarouselWithCaption key={section._key} carousel={section} />
              );
            default:
              return null;
          }
        })}
      </Section>
    </main>
  );
}
