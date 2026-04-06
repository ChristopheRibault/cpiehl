import { type CardGrid } from "@/sanity/schemas/sections/cardGrid";
import Image from "next/image";
import { RichTextBlock } from "../RichTextBlock/RichTextBlock";
import { Button } from "../../Button/Button";
import Link from "next/link";

export function CardGrid({ cards }: { cards: CardGrid["cards"] }) {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      {cards.map((card) => (
        <div key={card.title} className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold text-primary mb-2">{card.title}</h3>
          {card.image && (
            <Image
              src={card.image.asset.url}
              alt={card.title}
              className="w-full"
              width={500}
              height={200}
            />
          )}
          {card.description && (
            <RichTextBlock content={card.description.content} />
          )}
          {card.links && (
            <div>
              {card.links.map((link) => (
                <Button key={link.url}>
                  <Link href={link.url}>{link.label}</Link>
                </Button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
