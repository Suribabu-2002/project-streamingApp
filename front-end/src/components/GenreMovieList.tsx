import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { useApiStore } from "../store/apiStore";

const GenreMovieList: React.FC = () => {
  const { getGenres } = useApiStore();
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await getGenres();
        setGenres(response.genres || []);
      } catch (err) {
        console.error("Error fetching genres:", err);
      }
    };
    fetchGenres();
  }, [getGenres]);

  return (
    <div>
      {genres.map(
        (item, index) =>
          index <= 10 && (
            <div key={item} className="p-4 md:py-8 md:px-16">
              <h2 className="text-[20px] text-white font-bold">{item}</h2>
              <MovieList genreId={item} />
            </div>
          ),
      )}
    </div>
  );
};

export default GenreMovieList;
