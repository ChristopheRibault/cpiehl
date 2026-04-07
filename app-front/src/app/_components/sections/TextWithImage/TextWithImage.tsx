import { type TextWithImage } from "@/sanity/schemas/sections/textWithImage";
import Image from "next/image";
import Link from "next/link";
import { RichTextBlock } from "../RichTextBlock/RichTextBlock";

export function TextWithImage({ section }: { section: TextWithImage }) {
  const { text, image, imagePosition, link } = section;
  return (
    <article
      className={`flex flex-col items-center md:items-start gap-4 m-2 md:m-4 lg:m-8 ${imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      <RichTextBlock content={text.content} />
      <Link
        href={link?.url || link?.file?.asset.url || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={image.asset.url}
          alt=""
          width={400}
          height={400}
          className="max-w-64"
        />
      </Link>
    </article>
  );
}
