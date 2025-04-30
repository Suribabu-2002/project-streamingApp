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
  const [focusedIndex, setFocusedIndex] = useState(null);

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
    element.scrollLeft +=
      screenWidth - (screenWidth - elementRef.current.offsetWidth + 108);
  };
  const sliderLeft = (element) => {
    element.scrollLeft -=
      screenWidth - (screenWidth - elementRef.current.offsetWidth + 108);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            // Set the src from data-src when image comes into view
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
            }
            const index = Number(img.getAttribute("data-index"));
            if (!isNaN(index)) {
              setFocusedIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "50px",
      }
    );

    const images = elementRef.current?.querySelectorAll("img");
    if (images) {
      images.forEach((img) => observer.observe(img));
    }

    return () => observer.disconnect();
  }, [moviesList]);

  if (loading) return <div className="text-white text-center">Loading...</div>;

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white w-8 h-8 md:w-12 md:h-12 z-10 absolute -left-4
        mx-8 mt-[150px] cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white w-8 h-8 md:w-12 md:h-12 z-10 absolute
        mx-8 mt-[150px] cursor-pointer -right-4"
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
            className={`min-w-full md:h-[310px] object-fill mr-5 rounded-md hover:border-[4px]
              border-gray-400 transition-all duration-300 ease-in blur-sm`}
            onLoad={(e) => e.target.classList.remove("blur-sm")}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
