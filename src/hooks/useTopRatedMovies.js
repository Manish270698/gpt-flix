import { useEffect } from "react";
import { API_OPTIONS, TO_RATED_MOVIES_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getuseTopRatedMoviesMovies = async () => {
    const data = await fetch(TO_RATED_MOVIES_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getuseTopRatedMoviesMovies();
  }, []);
};

export default useTopRatedMovies;
