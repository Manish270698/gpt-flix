import React from "react";
import { IMAGE_CDN } from "../utils/constants";

const SearchedMovieCard = ({ movie }) => {
  return movie ? (
    <div>
      <div className="mt-4 lg:mt-6 grid grid-cols-12 cursor-pointer hover:bg-opacity-100">
        <div className=" flex justify-center col-span-4">
          <img
            className="w-[65%] xl:w-[50%] rounded-md"
            src={IMAGE_CDN + movie.poster_path}
            alt="movie poster"
          />
        </div>
        <div className=" z-10 col-span-7">
          <h1 className="text-base md:text-xl xl:text-2xl font-semibold">
            {movie.title}
          </h1>
          <p className="text-xs md:text-sm mt-2 md:hidden">
            {movie.overview.length > 80
              ? movie.overview.slice(0, 80) + "..."
              : movie.overview}
          </p>
          <p className="text-base mt-2 hidden md:block xl:hidden">
            {movie.overview.length > 225
              ? movie.overview.slice(0, 225) + "..."
              : movie.overview}
          </p>
          <p className="text-base mt-2 hidden xl:block">
            {movie.overview.length > 400
              ? movie.overview.slice(0, 400) + "..."
              : movie.overview}
          </p>
        </div>
      </div>
      <hr className="mt-4 lg:mt-6 w-[90%] m-auto" />
    </div>
  ) : (
    <div></div>
  );
};

export default SearchedMovieCard;
