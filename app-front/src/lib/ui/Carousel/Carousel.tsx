'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface CarouselProps {
  children: React.ReactNode;
  options?: {
    align?: 'start' | 'center' | 'end';
    loop?: boolean;
    slidesToScroll?: number;
  };
  autoplay?: boolean;
  autoplayDelay?: number;
}

export const Carousel = ({ children, options = {}, autoplay = true, autoplayDelay = 4000 }: CarouselProps) => {
  const autoplayPlugin = Autoplay({ delay: autoplayDelay, stopOnInteraction: true });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    ...options,
  }, autoplay ? [autoplayPlugin] : []);

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
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3">
          {children}
        </div>
      </div>

      {/* Boutons de navigation */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Carousel précédent"
          className="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
        >
          ←
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Carousel suivant"
          className="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
        >
          →
        </button>
      </div>
    </div>
  );
};
