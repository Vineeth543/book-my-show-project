import React from "react";
import HeroSlider from "react-slick";

// Component
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousal = () => {
  const settingsLG = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "300px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "https://in.bmscdn.com/content-buzz/2021/02/buzz-stream-01.jpg",
    "https://assets.mspimages.in/wp-content/uploads/2021/02/EtcKZdLUUAExdSF-696x365.jpg",
    "https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sea-wall-3-2021-3-11-t-19-25-57.jpg",
    "https://pbmobi.payback.in/content/dam/payback/home/herobanner/Godzilla-Kingkong_banner_767x412.webp/jcr:content/renditions/original",
    "https://pbs.twimg.com/media/DtEOqhxVYAAqrxg.jpg",
    "https://www.marketingmind.in/wp-content/uploads/2019/03/BookMySHow.jpg",
  ];

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image) => (
            <div className="w-full h-56 md:h-80 py-3">
              <img src={image} alt="testing" className="w-full h-full" />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={image}
                alt="testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousal;
