import React from "react";

const MovieHero = () => {
  return (
    <>
      <div>
        {/* Mobile */}
        <div className="md:hidden w-full" style={{ height: "calc(180vw)" }}>
          <img
            src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
            alt="Movie Poster"
            className="w-full h-full"
          />
        </div>

        {/* Tablet */}
        <div
          className="hidden md:block w-full lg:hidden"
          style={{ height: "calc(100vw)" }}
        >
          <img
            src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
            alt="Movie Poster"
            className="w-full h-full"
          />
        </div>

        {/* PC */}
        <div className="hidden w-full lg:block" style={{ height: "30rem" }}>
          <img
            src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
            alt="Movie-BG-Poster"
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
