import React from 'react'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function MovieCard({movie}) {
  return (
        <img src={movie.imageSet.verticalPoster.w720} 
        className='w-[110px] md:w-[200px] rounded-lg h-72
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in' alt=''/>
  )
}

export default MovieCard