import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.trendingMovies);
  if (!movies) return; // Early return

  const mainMovie = movies[Math.floor(Math.random() * movies.length)];
  const { title, overview, id } = mainMovie;
  

  return (
    <div className="">
      <VideoBackground movieId={id} title={title} overview={overview}/>
    </div>
  );
};

export default MainContainer;
