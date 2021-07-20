const settings = {
  autoplay: false,
  Infinity: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  InitialSlide: 0,
  responsive: [
    {
      breakpoints: 1024,
      settings: {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoints: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        InitialSlide: 1,
      },
    },
    {
      breakpoints: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

export default settings;