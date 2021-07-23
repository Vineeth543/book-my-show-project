import React, { useContext } from "react";
import { MovieContext } from "../../context/Movie.context";

export const MovieInfo = () => {
  const { movie } = useContext(MovieContext);
  const genres = movie.genres?.map(({ name }) => name).join(", "); // Optinal Chaining Method
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
        {movie.original_title}
      </h1>
      <div className="flex flex-col-reverse gap-3 lg:flex-col lg:gap-10">
        <div className="text-white flex flex-col gap-2 md:px-4 lg:gap-8">
          <h4 className="font-semibold text-xl">2D , 4DX , MX4D , IMAX 2D , IMAX 3D </h4>
          <h4 className="font-semibold text-xl">
            Languages:{" "}
            <span className="font-bold text-xl" style={{ color: "red" }}>
              {movie.original_language}
            </span>
          </h4>
          <h4 className="font-semibold text-xl">
            {(movie.runtime / 60).toFixed(2)} h &bull; {genres} &bull; 16+
            &bull; 18 Mar, 2021
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
