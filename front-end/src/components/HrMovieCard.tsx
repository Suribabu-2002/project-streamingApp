import React from 'react';

interface ImageSet {
  verticalPoster: {
    w720: string;
  };
}

interface Movie {
  title: string;
  imageSet: ImageSet;
}

interface HrMovieCardProps {
  movie: Movie;
}

const HrMovieCard: React.FC<HrMovieCardProps> = ({ movie }) => {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in">
      <img
        src={movie.imageSet.verticalPoster.w720}
        className="w-[110px] md:w-[260px] h-52 md:h-[360px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer"
        alt={movie.title}
        loading="lazy"
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2">
        {movie.title}
      </h2>
    </section>
  );
};

export default HrMovieCard;
