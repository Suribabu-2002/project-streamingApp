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

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <img 
      src={movie.imageSet.verticalPoster.w720} 
      loading='lazy'
      className='w-[110px] md:w-[200px] rounded-lg h-72
      hover:border-[3px] border-gray-400 cursor-pointer
      hover:scale-110 transition-all duration-150 ease-in'
      alt={movie.title}
    />
  );
};

export default MovieCard;
