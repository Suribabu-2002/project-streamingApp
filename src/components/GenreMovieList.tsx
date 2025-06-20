import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { useApiStore } from "../store/apiStore";
import { mockGenres } from "../mock-json";
import type { Genre } from "../store/apiStore";

const GenreMovieList: React.FC = () => {
  const { getGenres } = useApiStore();
  const [genres, setGenres] = useState<Genre[]>(mockGenres);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await getGenres();
        setGenres(response || []);
      } catch (err) {
        console.error("Error fetching genres:", err);
      }
    };
    // fetchGenres();
  }, [getGenres]);

  return (
    <div>
      {genres.map(
        (item, index) =>
          index <= 10 && (
            <div key={item.id} className="p-4 md:py-8 md:px-16" id={item.id}>
              <h2 className="text-[20px] text-white font-bold">
                {item.name}
              </h2>
              <MovieList genreId={item.id} />
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieList;
