import { Carousel } from "@/lib/ui";
import { type Carousel as CarouselType } from "@/sanity/schemas/sections/carousel";
import Image from "next/image";

export function CarouselWithCaption({ carousel }: { carousel: CarouselType }) {
  return (
    <Carousel navigationPosition="over">
      {carousel.slides.map((slide) => (
        <div
          key={slide.image.asset.url}
          className="flex-[0_0_100%] h-48 lg:h-72 overflow-hidden relative"
        >
          {carousel.title && (
            <div className="absolute top-0 left-0 text-white bg-primary/70 p-2 md:p-4 text-lg md:text-2xl font-bold rounded-br-2xl md:rounded-br-4xl z-1">
              {carousel.title}
            </div>
          )}
          <Image
            src={slide.image.asset.url}
            alt=""
            className="object-cover"
            fill
            sizes="100vw"
          />
          <div className="absolute md:top-0 bottom-0 right-0 w-full md:w-[25%] bg-black opacity-80 text-white p-2 md:p-4 text-sm flex flex-row md:flex-col justify-between items-center md:items-start gap-2">
            {slide.category && (
              <div className="text-xs md:text-sm lg:text-lg italic tracking-wide mb-1">
                {slide.category}
              </div>
            )}
            {slide.title && (
              <div className="font-bold text-lg lg:text-2xl  uppercase">
                {slide.title}
              </div>
            )}
            {slide.subtitle && (
              <div className="text-xs md:text-sm lg:text-lg">
                {slide.subtitle}
              </div>
            )}
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselWithCaption;
