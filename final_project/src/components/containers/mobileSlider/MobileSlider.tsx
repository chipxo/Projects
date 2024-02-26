import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import isValidImage from "@/utils/isValidImage";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

type MobileSliderProps = {
  products: ProductType[];
};

const MobileSlider: React.FC<MobileSliderProps> = ({ products }) => (
  <Carousel
    className="sm:hidden"
    plugins={[
      Autoplay({
        delay: 4000,
      }),
    ]}
    opts={{
      align: "start",
      loop: true,
    }}
  >
    <CarouselContent className="-ml-4">
      {products?.map(({ id, title, images }) => (
        <CarouselItem key={nanoid()} className="basis-1/2 pl-4">
          <Link to={`/products/${id}`}>
            <img
              src={isValidImage(images?.[0]) ? images?.[0] : images?.[1]}
              alt={title}
              className="h-full w-full rounded-sm"
            />
          </Link>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
);

export default MobileSlider;
