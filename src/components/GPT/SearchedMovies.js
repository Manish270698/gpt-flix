import React from "react";
import { useSelector } from "react-redux";
import SearchedMovieCard from "./SearchedMovieCard";
import SearchedMoviesShimmer from "./SearchedMoviesShimmer";

const SearchedMovies = () => {
  const movies = useSelector((store) => store.search.searchedMovies);
  console.log(movies);

  return !movies ? (
    <SearchedMoviesShimmer />
  ) : (
    <div>
      {movies.map((movie) => (
        <>{movie ? <SearchedMovieCard key={movie.id} movie={movie} /> : ""}</>
      ))}
    </div>
  );
};

export default SearchedMovies;
