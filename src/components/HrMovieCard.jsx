import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in">
      <img
        src={movie.imageSet.verticalPoster.w720}
        className="w-[110px] md:w-[260px] h-[360px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer"
        alt=""
      />
      <h2
        className="w-[110px] md:w-[260px] text-white mt-2"
      >
        {movie.title}
      </h2>
    </section>
  );
}

export default HrMovieCard;
