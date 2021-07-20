import {
  NextArrow,
  PrevArrow,
} from "../components/HeroCarousal/Arrows.component";

const settings = {
  autoplay: false,
  Infinity: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  InitialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        InitialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

export default settings;
