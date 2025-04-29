import React, { useRef, useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useApiStore } from "../store/apiStore";

const screenWidth = window.innerWidth;

function Slider() {
  const { getTopShows, loading, error } = useApiStore();
  const [moviesList, setMoviesList] = useState([]);
  const elementRef = useRef();

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

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

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
