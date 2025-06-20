import React, { useEffect, useState } from "react";
import HrMovieCard from "../components/HrMovieCard";
import { useApiStore } from "../store/apiStore";
import { Show } from "streaming-availability";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState<Show[]>([]);
  const { getTitleSearch } = useApiStore();
  const [title, setTitle] = useState("");

  // Debounce searchTerm to update title after 500ms
  useEffect(() => {
    const handler = setTimeout(() => {
      setTitle(searchTerm);
    }, 200);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    if (!title) {
      setMovieList([]);
      return;
    }
    const fetchMovies = async () => {
      try {
        const response = await getTitleSearch(title);
        setMovieList(response.movies || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchMovies();
  }, [title]);

  return (
    <div className="px-16">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        value={searchTerm}
        className="w-full p-5 rounded-xl bg-inherit text-xl border-2 border-white"
        autoComplete="true"
        spellCheck="true"
        autoFocus
      />
      <div className="flex flex-wrap gap-5 justify-center items-center py-10">
        {movieList.length === 0 && title ? (
          <div>No Data Found</div>
        ) : (
          movieList?.map((movie) => (
            <HrMovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
