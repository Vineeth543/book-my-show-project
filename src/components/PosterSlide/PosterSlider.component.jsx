import React from "react";
import Slider from "react-slick";

// Poster Component
import Poster from "../Poster/Poster.component";

// Setting and Image Components
import PosterCarousalSettings from "../../config/PosterCarousal.config";

const PosterSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start px-3">
        <h1
          className={`text-3xl font-bold ${
            props.isDark ? "text-white" : "text-gray-700"
          }`}
        >
          {props.title}
        </h1>
        <p
          className={`text-sm ${props.isDark ? "text-white" : "text-gray-700"}`}
        >
          {props.subtitle}
        </p>
      </div>
      <Slider {...PosterCarousalSettings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
