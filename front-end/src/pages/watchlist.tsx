import React, { useEffect, useState } from "react";
import {  useApiStore } from "../store/apiStore";
import HrMovieCard from "../components/HrMovieCard";
import { Show } from "streaming-availability";

const Watchlist = () => {
  const [movieList, setMovieList] = useState<Show[]>([]);
  const { getWatchList } = useApiStore();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getWatchList();
        setMovieList(response.movies || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="px-16">
      <div className="grid grid-cols-4 gap-x-5 gap-y-10 py-10 justify-items-center items-center">
        {movieList.length === 0 ? (
          <div>Add your Favourites to WatchList</div>
        ) : (
          movieList?.map((movie) => (
            <HrMovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default Watchlist;
