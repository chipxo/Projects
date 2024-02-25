import { type CarouselApi } from "@/components/ui/carousel";
import { mOpacity } from "@/utils/motionSettings";
import { motion as m } from "framer-motion";
import React, { useEffect, useState } from "react";
import GalleryClose from "./GalleryClose";
import GalleryCarousel from "./GalleryCarousel";
import GalleryPagination from "./GalleryPagination";

export type GalleryProps = {
  images: string[];
  title: string;
  handleCloseGallery?: () => void;
};

const Gallery: React.FC<GalleryProps> = ({
  images,
  title,
  handleCloseGallery,
}) => {
  const [api, setApi] = useState<CarouselApi>();

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const sources = [0, 1, 2];
  const nums = [1, 2, 3];

  return (
    <m.div
      {...mOpacity}
      onClick={handleCloseGallery}
      className="fixed inset-0 z-[999] grid place-items-center bg-black/85"
    >
      <div className="relative sm:max-w-[70vw] xl:max-w-[50vw]">
        <GalleryClose handleCloseGallery={handleCloseGallery} />

        <GalleryCarousel
          images={images}
          title={title}
          setApi={setApi}
          sources={sources}
        />

        <GalleryPagination nums={nums} current={current} />
      </div>
    </m.div>
  );
};

export default Gallery;
