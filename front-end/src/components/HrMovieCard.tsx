import React from "react";
import { useNavigate } from "react-router-dom";
import { Show } from "streaming-availability";

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
  movie: Show;
}

const HrMovieCard: React.FC<HrMovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();
  const handlePosterClick = () => {
    let link = `/movie/${movie.id}`;
    if (link) navigate(link);
  };
  return (
    <section
      onClick={handlePosterClick}
      className="hover:scale-110 transition-all duration-150 ease-in w-fit"
    >
      <img
        src={movie.imageSet.verticalPoster.w720}
        className="w-[110px] md:w-[260px] h-52 md:h-[360px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer"
        alt={"movieList"}
        loading="lazy"
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2 overflow-hidden text-ellipsis truncate">
        {movie.title}
      </h2>
    </section>
  );
};

export default HrMovieCard;
