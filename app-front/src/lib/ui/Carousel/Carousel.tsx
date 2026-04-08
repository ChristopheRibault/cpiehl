"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/app/_components/Button/Button";
import { ChevronIcon } from "@/app/_components/Icons/ChevronIcon";

interface CarouselProps {
  children: React.ReactNode;
  options?: {
    align?: "start" | "center" | "end";
    loop?: boolean;
    slidesToScroll?: number;
  };
  autoplay?: boolean;
  autoplayDelay?: number;
  navigationPosition?: "bottom" | "over" | "none";
}

export const Carousel = ({
  children,
  options = {},
  autoplay = true,
  autoplayDelay = 4000,
  navigationPosition = "bottom",
}: CarouselProps) => {
  const autoplayPlugin = Autoplay({
    delay: autoplayDelay,
    stopOnInteraction: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      ...options,
    },
    autoplay ? [autoplayPlugin] : [],
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3">{children}</div>
      </div>

      {/* Boutons de navigation */}
      {navigationPosition !== "none" && (
        <div className="flex justify-center gap-4 mt-6">
          <Button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Carousel précédent"
            className={
              navigationPosition === "over"
                ? "absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent hover:bg-white/40"
                : ""
            }
          >
            <ChevronIcon className="rotate-90" />
          </Button>
          <Button
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Carousel suivant"
            className={
              navigationPosition === "over"
                ? "absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent  hover:bg-white/40"
                : ""
            }
          >
            <ChevronIcon className="-rotate-90" />
          </Button>
        </div>
      )}
    </div>
  );
};
