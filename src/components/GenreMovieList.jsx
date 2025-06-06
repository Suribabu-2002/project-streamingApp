import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { useApiStore } from "../store/apiStore";
import { mockGenres } from "../../mock-json";

function GenreMovieList() {
  const { getGenres } = useApiStore();
  const [genres, setGenres] = useState(mockGenres ?? []);
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await getGenres();
        setGenres(response || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchGenres();
  }, []);
  return (
    <div>
      {genres.map(
        (item, index) =>
          index <= 10 && (
            <div key={index + 1} className="p-4 md:py-8 md:px-16">
              <h2
                className="text-[20px] text-white 
                font-bold"
              >
                {item.name}
              </h2>
              <MovieList genre={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
