import { useEffect } from "react";
import {
  API_OPTIONS,
  MOVIES_API,
  TRENDING_MOVIES,
  TRENDING_TV,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import {
  addNowPlayingMovies,
  addTrendingMovies,
  addTrendingTV,
} from "../utils/moviesSlice";

const useMoviesList = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(MOVIES_API, API_OPTIONS);
    const data2 = await fetch(TRENDING_MOVIES, API_OPTIONS);
    const data3 = await fetch(TRENDING_TV, API_OPTIONS);

    const json = await data.json();
    const json2 = await data2.json();
    const json3 = await data3.json();

    dispatch(addNowPlayingMovies(json.results));
    dispatch(addTrendingMovies(json2.results));
    dispatch(addTrendingTV(json3.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useMoviesList;
