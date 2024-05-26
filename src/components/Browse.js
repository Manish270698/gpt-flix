import LoggedHeader from "./Header/LoggedHeader";
import Footer from "./Footer";
import useMoviesList from "../hooks/useMoviesList";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryContainer from "./SecondayConatiner/SecondaryContainer";
import usePopularMovies from "../hooks/usePoularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTrendingTV from "../hooks/useTrendingTV";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MovieListShimmer from "./SecondayConatiner/MovieListShimmer";
import { useSelector } from "react-redux";

const Browse = () => {
  useMoviesList();
  usePopularMovies();
  useTopRatedMovies();
  useTrendingMovies();
  useTrendingTV();
  useUpcomingMovies();

  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <LoggedHeader />
      <MainContainer />
      {!movies ? <MovieListShimmer /> : <SecondaryContainer />}
      <Footer />
    </div>
  );
};

export default Browse;
