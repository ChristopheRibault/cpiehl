import { type RichTextBlock } from "@/sanity/schemas/sections/richTextBlock";
import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
import { type ReactNode } from "react";

const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="mb-4 text-base leading-relaxed">{children}</p>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="mb-4 text-xl font-bold">{children}</h3>
    ),
    h4: ({ children }: { children?: ReactNode }) => (
      <h4 className="mb-3 text-lg font-semibold">{children}</h4>
    ),
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote className="mb-4 border-l-4 border-primary pl-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children?: ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    underline: ({ children }: { children?: ReactNode }) => (
      <u className="underline">{children}</u>
    ),
    link: ({ value, children }: { value?: any; children?: ReactNode }) => {
      const href = value?.href;
      const external = value?.external;

      if (!href) return <>{children}</>;

      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="text-primary underline hover:opacity-80"
        >
          {children}
        </a>
      );
    },
  },
};

export function RichTextBlock({
  content,
}: {
  content: RichTextBlock["content"];
}) {
  return (
    <div className="prose prose-sm max-w-none">
      <PortableText value={content} components={portableTextComponents} />
    </div>
  );
}
