import React from "react";
import { IMAGE_CDN } from "../../utils/constants";

const MovieCard = ({ title, poster_path }) => {
  return (
    <div className="w-32 lg:w-44 flex-none cursor-pointer">
      <img
        className="rounded-md"
        src={IMAGE_CDN + poster_path}
        alt={title + " poster"}
      />
    </div>
  );
};

export default MovieCard;
