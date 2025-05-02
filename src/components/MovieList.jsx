import React, { useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";
import { useApiStore } from "../store/apiStore";
import { mockData } from "../../mock-json";

function MovieList({ genre, index_ }) {
  const [movieList, setMovieList] = useState(mockData ?? []);
  const elementRef = useRef(null);
  const { getFilteredShows, loading, error } = useApiStore();
  const [isApiFailed, setIsApiFailed] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getFilteredShows(genre);
        setMovieList(response.shows || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setIsApiFailed(true);
      }
    };
    fetchMovies();
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };
  useEffect(() => {
    if (isApiFailed) {
      let genreList = mockData.filter((movie) => movie.genres.some((ele) => ele.id === genre));
      setMovieList(genreList);
    }
  }, [isApiFailed]);
  if (loading) return <div className="text-white text-center">Loading...</div>;

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute top-[180px] -left-8 `}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-4 md:gap-8 scrollbar-none scroll-smooth"
      >
        {shuffleArray([...movieList]).map((item, index) => (
          <React.Fragment key={index + 1}>
            <HrMovieCard movie={item} />
          </React.Fragment>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 absolute top-[180px] -right-8 `}
      />
    </div>
  );
}

export default MovieList;
