import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.trendingMovies);
  const [mainMovie, setMainMovie] = useState(null);

  useEffect(() => {
    if (movies && movies.length > 0) {
      const selectedMovie = movies[Math.floor(Math.random() * movies.length)];
      setMainMovie(selectedMovie);
    }
  }, [movies]);

  if (!mainMovie) return; // Early return

  const { title, overview, id } = mainMovie;

  return (
    <div className="">
      <VideoBackground movieId={id} title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
