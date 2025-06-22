import React, { useEffect, useState } from "react";
import { useApiStore } from "../store/apiStore";
import { minsToHHMMSS } from "../utils/timeFormat";
import { FaBookmark, FaPlayCircle, FaRegBookmark } from "react-icons/fa";
import { Show } from "streaming-availability";
import HrMovieCard from "../components/HrMovieCard";
import LoadingScreen from "../components/loadingScreen";

const Movie = () => {
  const id = window.location.pathname.split("/").pop();
  const {
    getMovie,
    loading,
    postWatchList,
    deleteWatchList,
    getFilteredShows,
  } = useApiStore();
  const [movie, setMovie] = useState<Show>();
  const [movieList, setMovieList] = useState<Show[]>([]);

  const [isWatchListed, setIsWatchListed] = useState(false);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovie(id ?? "");
        setMovie(response.movie || {});
        setIsWatchListed(response.isWatchListed);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchMovie();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let genreId = movie?.genres?.[0].name ?? "";
        const response = await getFilteredShows(genreId);
        setMovieList(response.movies || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    movie && fetchMovies();
  }, [movie]);

  const handleWatchList = async () => {
    if (movie && !isWatchListed) {
      const { id, title, imdbId, showType } = movie;
      const response = await postWatchList(
        Number(id),
        title ?? "",
        imdbId ?? "",
        showType ?? "",
      );
      if (response) {
        setIsWatchListed(true);
      }
      return;
    }
    if (movie && isWatchListed) {
      const { id } = movie;
      const response = await deleteWatchList(Number(id));
      if (response) {
        setIsWatchListed(false);
      }
    }
  };

  const handleWatch = () => {
    if (movie) {
      const link = movie?.streamingOptions?.us?.find(
        (show) =>
          (show.type === "buy" || show.type === "subscription") &&
          show.service.id !== "apple",
      )?.link;
      if (link) {
        window.open(link, "_blank");
      }
    }
  };

  useEffect(() => {
    if (loading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [loading]);

  if (loading) return <LoadingScreen />;

  return (
    <div className="flex flex-col mx-5">
      <div className="relative w-full h-[calc(100vh-100px)] px-5 rounded-xl overflow-hidden bg-top bg-cover">
        <div
          className="absolute inset-0 bg-cover bg-top opacity-30 z-0"
          style={{
            backgroundImage: `url(${movie?.imageSet?.horizontalBackdrop?.w1080})`,
          }}
        />

        <div className="absolute top-40 left-4 flex gap-5 w-full z-10">
          <img
            src={movie?.imageSet?.verticalPoster?.w720}
            alt="poster"
            className="w-72 object-fill h-96 rounded-xl pointer-events-none border-2 border-white"
          />
          <div className="flex flex-col gap-5 w-full">
            <h1 className="text-[72px] font-bold text-white">{movie?.title}</h1>
            <p className="flex gap-10 mb-5 text-white">
              Release Year : {movie?.releaseYear}{" "}
              <span className="font-semibold">
                Duration : {minsToHHMMSS(movie?.runtime ?? 0)}
              </span>{" "}
            </p>

            <p className="text-2xl font-thin font-serif w-[40vw] text-white">
              {movie?.overview}
            </p>

            <div className="flex justify-between">
              <button
                onClick={handleWatch}
                className="flex p-5 rounded-xl text-2xl justify-center items-center gap-2.5 bg-[#004d9e] hover:scale-105"
              >
                Watch Now <FaPlayCircle className="text-white" />
              </button>
              <button
                onClick={handleWatchList}
                className="flex p-5 rounded-xl text-xl justify-center items-center gap-2.5 bg-[#9e0400] mr-10 hover:border-none hover:scale-105 transition-all duration-300 ease-in-out transform"
              >
                { isWatchListed ? "Remove from Watch List":" Add to Watch List" }
                {isWatchListed ? (
                  <FaBookmark className="text-white" />
                ) : (
                  <FaRegBookmark />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <h2 className="text-[#999] font-bold text-xl">Related Movies</h2>
        <div className="w-full flex overflow-scroll scrollbar-none gap-5 py-5">
          {movieList?.map((movie) => {
            return <HrMovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Movie;
