import { useEffect } from "react";
import { API_OPTIONS, TRENDING_TV } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingTV } from "../utils/moviesSlice";

const useTrendingTV = () => {
  const dispatch = useDispatch();

  const getTrendingTV = async () => {
    const data = await fetch(TRENDING_TV, API_OPTIONS);
    const json = await data.json();
    dispatch(addTrendingTV(json.results));
  };

  useEffect(() => {
    getTrendingTV();
  }, []);
};

export default useTrendingTV;
