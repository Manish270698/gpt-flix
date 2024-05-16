import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import VideoTitle from "./VideoTitle";

const VideoBackground = ({ overview, title, movieId }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="relative">
      <VideoTitle title={title} overview={overview} />
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?si=Me7-3gvdOrdDyfrE&amp;controls=0&mute=1&autoplay=1&rel=0&loop=1`}
        title="Movie Clip"
        allow="autoplay"
        referrerPolicy="strict-origin-when-cross-origin"
        frameborder="0"
        allowfullscreen
      ></iframe>

      {/* <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailer?.key}?si=2rY9UlkYmHIK-Awa`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullscreen
      ></iframe> */}
    </div>
  );
};

export default VideoBackground;
