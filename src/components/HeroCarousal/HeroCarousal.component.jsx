import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
  const settings = {
    arrows: true,
    centerMode: true,
    centerPadding: "200px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <HeroSlider {...settings}>
        {images.map((image) => (
          <div className="w-20 h-96">
            <img src={image} alt="testing" className="w-full h-full" />
          </div>
        ))}
      </HeroSlider>
    </>
  );
};

export default HeroCarousal;