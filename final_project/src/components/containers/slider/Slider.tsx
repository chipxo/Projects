import { ProductType } from "@/types/types";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SliderHeader from "./SliderHeader";
import isValidImage from "@/utils/isValidImage";

type CarouselProps = {
  products: ProductType[];
};

const Carousel: React.FC<CarouselProps> = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
    autoplay: true,
    speed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="relative my-6 min-h-[136px] overflow-hidden border-y bg-animated-bg bg-cover bg-no-repeat py-4 md:my-12 md:min-h-[216px] md:shadow-lg">
      <div className="absolute top-8 z-[30] w-full text-center backdrop-blur-md md:top-16">
        <SliderHeader />
      </div>
      {products && (
        <Slider {...settings}>
          {products.map(({ title, images }) => (
            <div key={nanoid()} className="px-1.5">
              <img
                src={images[1]}
                className="h-fit max-h-24 w-full rounded-md object-cover md:max-h-44"
                alt={title}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Carousel;
