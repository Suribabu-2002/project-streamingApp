import React, { useRef, useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useApiStore } from "../store/apiStore";
import { mockData } from "../mock-json";
import type { Show } from "../store/apiStore";

const screenWidth = window.innerWidth;

const Slider: React.FC = () => {
  const { getTopShows } = useApiStore();
  const [moviesList, setMoviesList] = useState<Show[]>(mockData);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getTopShows();
        setMoviesList(response || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    // fetchMovies();
  }, [getTopShows]);

  useEffect(() => {
    if (!screenWidth) return;

    const interval = setInterval(() => {
      if (elementRef.current) {
        sliderRight(elementRef.current);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [screenWidth]);

  const sliderRight = (element: HTMLDivElement): void => {
    element.scrollLeft += screenWidth - 110;
    if (element.scrollLeft >= (element.scrollWidth - element.clientWidth)) {
      element.scrollLeft = 0;
    }
  };

  const sliderLeft = (element: HTMLDivElement): void => {
    element.scrollLeft -= screenWidth - 110;
    if (element.scrollLeft <= 0) {
      element.scrollLeft = element.scrollWidth;
    }
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer"
        onClick={() => elementRef.current && sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => elementRef.current && sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4
        scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {moviesList.map((item) => (
          <img
            key={item.id}
            src={item.imageSet.verticalPoster.w720}
            className="min-w-full h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in"
            alt={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
