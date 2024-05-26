import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterVideos = await json.results.filter(
      (video) =>
        (video.type === "Trailer" || video.type === "Teaser") &&
        video.site === "YouTube"
    );
    const videoNum = Math.floor(Math.random() * filterVideos.length);
    const trailer = await filterVideos[videoNum];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
