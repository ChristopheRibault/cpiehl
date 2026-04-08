import { type RichTextBlock } from "@/sanity/schemas/sections/richTextBlock";
import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
import { type ReactNode } from "react";

const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="mb-2 text-base leading-relaxed">{children}</p>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="mb-2 text-xl font-bold">{children}</h3>
    ),
    h4: ({ children }: { children?: ReactNode }) => (
      <h4 className="mb-2 text-lg font-semibold">{children}</h4>
    ),
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote className="mb-2 border-l-4 border-primary pl-4 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }: { value?: any }) => {
      if (!value?.asset?.url) return null;
      const { alt, position } = value;
      let positionClass = "";
      switch (position) {
        case "left":
          positionClass = "justify-start";
          break;
        case "right":
          positionClass = "justify-end";
          break;
        default:
          positionClass = "justify-center";
      }

      return (
        <div className={`my-6 flex ${positionClass} w-full`}>
          <img
            src={value.asset.url}
            alt={alt || "Image du contenu"}
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      );
    },
  },
  marks: {
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children?: ReactNode }) => (
      <em className="italic">{children}</em>
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
  list: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>
    ),
    number: ({ children }: { children?: ReactNode }) => (
      <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <li className="ml-2 sm:ml-4">{children}</li>
    ),
    number: ({ children }: { children?: ReactNode }) => (
      <li className="ml-2 sm:ml-4">{children}</li>
    ),
  },
};

export function RichTextBlock({
  content,
  className = "",
}: {
  content: RichTextBlock["content"];
  className?: string;
}) {
  return (
    <div className={`prose prose-sm max-w-none ${className}`}>
      <PortableText value={content} components={portableTextComponents} />
    </div>
  );
}
