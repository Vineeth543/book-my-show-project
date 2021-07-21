import React from "react";

export const MovieInfo = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-10">
      <div className="flex items-center gap-3 md:px-4">
        <div className="w-40 h-8">
          <img
            src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
            alt="Premier"
            className="w-full h-full"
          />
        </div>
        <span className="bg-bms-700 p-px text-xs text-white rounded">
          Streaming Now
        </span>
      </div>
      <h1 className="hidden lg:block text-white font-bold lg:text-5xl lg:px-4">
        Zack Snyder`s Justice League
      </h1>
      <div className="flex flex-col-reverse gap-3 lg:flex-col lg:gap-10">
        <div className="text-white flex flex-col gap-2 md:px-4 lg:gap-8">
          <h4 className="font-light">
            English &bull; Lnaguages:{" "}
            <span className="font-semibold" style={{ color: "red" }}>
              Audio(1),Subtitle(1)
            </span>
          </h4>
          <h4>
            4h 1m &bull; Action, Adventure, Fantasy &bull; 16+ &bull; 18 Mar,
            2021
          </h4>
        </div>
        <div className="flex items-center gap-3 md:w-screen md:px-4 lg:w-full">
          <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg">
            Rent ₹149
          </button>
          <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg">
            Buy ₹689
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
