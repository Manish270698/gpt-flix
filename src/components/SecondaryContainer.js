import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );
  const trendingMovies = useSelector((store) => store?.movies?.trendingMovies);
  const trendingTV = useSelector((store) => store?.movies?.trendingTV);

  return (
    <div className="absolute bg-black w-[100%]">
      <div className="-mt-[60px] md:-mt-32 lg:-mt-36 xl:-mt-44">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Trending Movies" movies={trendingMovies} />
        <MovieList title="Trending TV" movies={trendingTV} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
