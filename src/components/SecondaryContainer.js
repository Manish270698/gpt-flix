import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import MovieListShimmer from "./MovieListShimmer";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
  const trendingMovies = useSelector((store) => store?.movies?.trendingMovies);
  const trendingTV = useSelector((store) => store?.movies?.trendingTV);
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);

  return !useSelector((store) => store.movies) ? (
    <MovieListShimmer />
  ) : (
    <div className="absolute bg-black w-[100%]">
      <div className="-mt-[60px] md:-mt-32 lg:-mt-36 xl:-mt-44">
        <MovieList title="Now Playing" movies={nowPlayingMovies} />
        <MovieList title="Popular Movies" movies={popularMovies} />
        <MovieList title="Top Rated Movies" movies={topRatedMovies} />
        <MovieList title="Trending Movies" movies={trendingMovies} />
        <MovieList title="Trending TV" movies={trendingTV} />
        <MovieList title="Upcoming Movies" movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
