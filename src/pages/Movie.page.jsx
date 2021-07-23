import React, { useContext, useState, useEffect } from "react";

import {
  NextArrow,
  PrevArrow,
} from "../components/HeroCarousal/Arrows.component";

// Component
import PosterSlider from "../components/PosterSlide/PosterSlider.component";
import MovieHero from "../components/MovieHero/MovieHero.component";
import Cast from "../components/Cast/Cast.component";
import { MovieContext } from "../context/Movie.context";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

const Movie = () => {
  const { id } = useParams();
  const { movie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requstSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requstSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requstRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requstRecommendedMovies();
  }, [id]);

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

  const settingsCast = {
    autoplay: false,
    Infinity: false,
    slidesToShow: 6,
    slidesToScroll: 4,
    InitialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
          <p>{movie.overview}</p>
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
            <Slider {...settingsCast}>
              {cast.map((castData) => (
                <Cast
                  image={`https://image.tmdb.org/t/p/original${castData.profile_path}`}
                  castName={castData.original_name}
                  role={castData.character}
                />
              ))}
            </Slider>
          </div>

        <div className="my-10">
          <hr />
        </div>

        <div className="my-10">
          <PosterSlider
            config={settings}
            images={similarMovies}
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
            images={recommendedMovies}
            title="BMS XCLUSIV"
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};

export default Movie;
