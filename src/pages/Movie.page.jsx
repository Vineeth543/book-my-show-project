import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";

const Movie = () => {
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
      </div>
    </>
  );
};

export default Movie;

//
