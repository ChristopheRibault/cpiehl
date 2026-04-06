import { type FigureCard } from "@/sanity/schemas/sections/figureCard";
import { RichTextBlock } from "../RichTextBlock/RichTextBlock";

export function FigureCard({ section }: { section: FigureCard }) {
  return (
    <article className="rounded-tr-4xl rounded-bl-4xl bg-primary text-white p-4 md:p-6">
      <h3 className="mb-4 text-xl font-bold">{section.title}</h3>
      {section.text && (
        <div className="prose max-w-none">
          <RichTextBlock content={section.text.content} />
        </div>
      )}
    </article>
  );
}
