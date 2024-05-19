import { useEffect } from "react";
import { API_OPTIONS, TO_RATED_MOVIES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getuseTopRatedMoviesMovies = async () => {
    const data = await fetch(TO_RATED_MOVIES_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getuseTopRatedMoviesMovies();
  }, []);
};

export default useTopRatedMovies;
