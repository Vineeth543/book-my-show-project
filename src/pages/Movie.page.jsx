import React from "react";

import {
  NextArrow,
  PrevArrow,
} from "../components/HeroCarousal/Arrows.component";

// Component
import PosterSlider from "../components/PosterSlide/PosterSlider.component";
import TempPosters from "../config/TempPosters.config";
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";

const Movie = () => {
  const settings = {
    autoplay: false,
    Infinity: false,
    slidesToShow: 4,
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

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:w-2/3 lg:ml-48">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>
            Bruce Wayne and Diana Prince try to bring the metahumans of Earth
            together after the death of Clark Kent. Meanwhile, Darkseid sends
            Steppenwolf to Earth with an army to subjugate humans.
          </p>
        </div>

        <div className="my-10">
          <hr />
        </div>

        <div className="my-10">
          <h2 className="text-gray-800 font-bold text-2xl mb-8">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row lg:gap-8">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-xl">
              <div className="w-14 h-8">
                <img
                  src="https://www.pngitem.com/pimgs/m/35-351811_rupay-card-hd-png-download.png"
                  alt="Rupay"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Rupay Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-xl">
              <div className="w-10 h-8">
                <img
                  src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg"
                  alt="Rupay"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                  Pass @Rs.99
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10">
          <hr />
        </div>

        <div className="my-10">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast & Crew</h2>
          <div className="flex flex-wrap gap-5 lg:gap-10">
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
              castName="Henry Cavil"
              role="Superman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg"
              castName="Henry Cavil"
              role="Superman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
              castName="Henry Cavil"
              role="Superman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ray-fisher-1072729-17-10-2017-12-14-18.jpg"
              castName="Henry Cavil"
              role="Superman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/willem-dafoe-2526-24-03-2017-12-35-57.jpg"
              castName="Henry Cavil"
              role="Superman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jason-momoa-25617-24-03-2017-17-39-52.jpg"
              castName="Henry Cavil"
              role="Superman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ezra-miller-34889-24-03-2017-16-04-22.jpg"
              castName="Henry Cavil"
              role="Superman"
            />
            <Cast
              image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jared-leto-3943-24-03-2017-17-30-08.jpg"
              castName="Henry Cavil"
              role="Superman"
            />
          </div>
        </div>

        <div className="my-10">
          <hr />
        </div>

        <div className="my-10">
          <PosterSlider
            config={settings}
            images={TempPosters}
            title="You might also like"
            isDark={false}
          />
        </div>

        <div className="my-10">
          <hr />
        </div>

        <div className="my-10">
          <PosterSlider
            config={settings}
            images={TempPosters}
            title="BMS XCLUSIV"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default Movie;
