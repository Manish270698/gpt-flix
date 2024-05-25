import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-4 lg:pl-12 w-[100%]">
      <h1 className="pt-8 text-sm lg:text-xl text-white pb-2 font-semibold ">
        {title}
      </h1>

      <div className="overflow-x-scroll">
        <div className="flex gap-2 ">
          {movies?.map((movie) => (
            <MovieCard
              key={movie?.id}
              title={movie?.title}
              poster_path={movie?.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
