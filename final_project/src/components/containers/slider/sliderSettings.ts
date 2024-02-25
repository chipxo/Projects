const sliderSettings = {
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

export default sliderSettings;
