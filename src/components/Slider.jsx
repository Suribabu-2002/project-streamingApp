import React, { useRef, useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useApiStore } from "../store/apiStore";
import { mockData } from "../../mock-json";

const screenWidth = window.innerWidth;

function Slider() {
  const { getTopShows, loading } = useApiStore();
  const [moviesList, setMoviesList] = useState(mockData ?? []);
  const elementRef = useRef();
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getTopShows();
        setMoviesList(response || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchMovies();
  }, [getTopShows]);

  // Separate useEffect for auto-slide
  useEffect(() => {
    if (!screenWidth) return; // Don't start auto-slide until card width is set

    const interval = setInterval(() => {
      if (elementRef.current) {
        sliderRight(elementRef.current);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [cardWidth]);

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - (screenWidth - elementRef.current.offsetWidth+110);
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - (screenWidth - elementRef.current.offsetWidth + 110);
  };

  if (loading) return <div className="text-white text-center">Loading...</div>;

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4
    scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {moviesList?.map((item, i) => (
          <img
            key={i + 1}
            src={item?.imageSet?.horizontalPoster?.w720 ?? ""}
            alt=""
            className="min-w-full  md:h-[310px] object-fill
             mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
