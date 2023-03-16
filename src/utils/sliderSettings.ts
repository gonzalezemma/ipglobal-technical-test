export const slideSettings = {
  infinite: false,
  dots: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 940,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const carouselSettings = {
  infinite: true,
  dots: false,
  autoplay: true,
  fade: true,
  autoplaySpeed: 5000,
  speed: 6000,
  slidesToShow: 1,
  focusOnSelect: true,
  slidesToScroll: 1,
  arrows: false,
};
