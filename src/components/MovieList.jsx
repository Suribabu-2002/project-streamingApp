import React, { useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";
import { useApiStore } from "../store/apiStore";

function MovieList({ genre, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  const { getFilteredShows, loading, error } = useApiStore();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getFilteredShows(genre);
        setMovieList(response.shows || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchMovies();
  }, []);

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };
  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute top-[180px] -left-8 `}
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4"
      >
        {movieList.map((item, index) => (
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
