import React, { useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";
import { useApiStore } from "../store/apiStore";
import { mockData } from "../mock-json";
import type { Show } from "../store/apiStore";

interface MovieListProps {
  genreId: string;
  index_?: number;
}

const MovieList: React.FC<MovieListProps> = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState<Show[]>(mockData);
  const elementRef = useRef<HTMLDivElement>(null);
  const { getFilteredShows } = useApiStore();
  const [isApiFailed, setIsApiFailed] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getFilteredShows(genreId);
        setMovieList(response.shows || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setIsApiFailed(true);
      }
    };
    // fetchMovies();
  }, [genreId, getFilteredShows]);

  const slideRight = (element: HTMLDivElement): void => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element: HTMLDivElement): void => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => elementRef.current && slideLeft(elementRef.current)}
        className={`text-[50px] text-white
        p-2 z-10 cursor-pointer 
        hidden md:block absolute ${
          index_ && index_ % 3 === 0 ? "mt-[80px]" : "mt-[150px]"
        }`}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8
        scrollbar-none scroll-smooth pt-4 px-3 pb-4"
      >
        {movieList.map((item) => (
          <HrMovieCard key={item.id} movie={item} />
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => elementRef.current && slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
        p-2 cursor-pointer z-10 top-0 
        absolute right-0 ${index_ && index_ % 3 === 0 ? "mt-[80px]" : "mt-[150px]"}`}
      />
    </div>
  );
};

export default MovieList;
