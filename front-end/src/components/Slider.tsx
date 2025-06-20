import React, { useRef, useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useApiStore } from "../store/apiStore";
import type { Show } from "../store/apiStore";

const screenWidth = window.innerWidth; //inner windth

const Slider: React.FC = () => {
  const { getTopShows } = useApiStore();
  const [moviesList, setMoviesList] = useState<Show[]>([]);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getTopShows(20);
        setMoviesList(response.movies || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchMovies();
  }, [getTopShows]);

  useEffect(() => {
    if (!screenWidth) return;

    const interval = setInterval(() => {
      if (elementRef.current) {
        sliderRight(elementRef.current);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [screenWidth]);

  const sliderRight = (element: HTMLDivElement | null) => {
    if (!element || !elementRef.current) return;

    const scrollAmount =
      screenWidth - (screenWidth - elementRef.current.offsetWidth + 108);

    if (element.scrollLeft + element.clientWidth >= element.scrollWidth - 10) {
      element.scrollLeft = 0;
    } else {
      element.scrollLeft += scrollAmount;
    }
  };

  const sliderLeft = (element: HTMLDivElement | null) => {
    if (!elementRef.current || !element) return;
    const scrollAmount =
      screenWidth - (screenWidth - elementRef.current.offsetWidth + 108);

    if (element.scrollLeft === 0) {
      element.scrollLeft = element.scrollWidth;
    } else {
      element.scrollLeft -= scrollAmount;
    }
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white w-8 h-8 md:w-12 md:h-12 z-10 absolute -left-4
        mx-8 mt-[160px] cursor-pointer opacity-80 hover:opacity-100"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white w-8 h-8 md:w-12 md:h-12 z-10 absolute
        mx-8 mt-[160px] cursor-pointer -right-4 opacity-80 hover:opacity-100"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {moviesList?.map((item, i) => (
          <img
            key={i + 1}
            data-index={i}
            src={item?.imageSet?.horizontalPoster?.w1080 ?? ""}
            alt={item?.title ?? "Movie poster"}
            loading="lazy"
            className={`min-w-full md:h-[360px] object-fill mr-5 rounded-md hover:border-[4px]
              border-gray-400 transition-all duration-300 ease-in blur-sm`}
            onLoad={(e) =>
              (e.target as HTMLImageElement).classList.remove("blur-sm")
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
