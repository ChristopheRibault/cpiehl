import { Carousel } from "@/lib/ui";
import { type Carousel as CarouselType } from "@/sanity/schemas/sections/carousel";
import Image from "next/image";
import { RichTextBlock } from "../RichTextBlock/RichTextBlock";

export function CarouselWithCaption({ carousel }: { carousel: CarouselType }) {
  return (
    <Carousel navigationPosition="over">
      {carousel.slides.map((slide) => (
        <div
          key={slide.image.asset.url}
          className="flex-[0_0_100%] h-32 md:h-48 lg:h-72 overflow-hidden relative"
        >
          {carousel.title && (
            <div className="absolute top-0 left-0 text-white bg-primary/70 p-4 text-2xl font-bold rounded-br-4xl">
              {carousel.title}
            </div>
          )}
          <Image
            src={slide.image.asset.url}
            alt=""
            className="w-full h-full object-cover"
            layout="responsive"
            width={800}
            height={600}
          />
          <div className="absolute top-0 bottom-0 right-0 w-[25%] bg-black bg-opacity-50 text-white p-4 text-sm">
            <RichTextBlock
              content={slide.caption?.content || []}
              leading={16}
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselWithCaption;
