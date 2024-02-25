import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import React from "react";
import { GalleryProps } from "./Gallery";

type GalleryCarouselProps = GalleryProps & {
  setApi: (api: CarouselApi) => void;
  sources: number[];
};

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({
  setApi,
  sources,
  images,
  title,
}) => (
  <Carousel setApi={setApi}>
    <CarouselContent>
      {sources.map((src) => (
        <CarouselItem key={src}>
          <img
            className="mx-auto aspect-square w-2/3 rounded-md"
            src={images?.[src]}
            alt={title}
            onClick={(e) => e.stopPropagation()}
          />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);

export default GalleryCarousel;
