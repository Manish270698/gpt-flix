import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import VideoTitle from "./VideoTitle";

const VideoBackground = ({ overview, title, movieId }) => {
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store?.movies?.trailerVideo);
  return (
    <div className="relative z-0 ">
      <VideoTitle title={title} overview={overview} />
      {/* <div className="w-[100%] aspect-video -mt-6 md:-mt-16">

      </div> */}
      <iframe
        className="w-[100%] aspect-video -mt-6 lg:-mt-16 overflow-hidden"
        src={`https://www.youtube.com/embed/${trailer?.key}?controls=0&mute=1&autoplay=1&rel=0&loop=1&playlist=${trailer?.key}`}
        title="Movie Clip"
        allow="autoplay"
        referrerPolicy="strict-origin-when-cross-origin"
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
