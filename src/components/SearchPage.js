import React, { useEffect, useRef, useState } from "react";
import CLOSE from "../images/close.png";
import { API_OPTIONS, LANGAUGES, MOVIE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovies,
  changeLanguage,
  removeMovies,
  toggleGptSearch,
} from "../utils/searchGptSlice";
import { IoLanguageSharp } from "react-icons/io5";
import openai from "../utils/openai";
import { useNavigate } from "react-router-dom";
import SearchedMovies from "./SearchedMovies";

const SearchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const language = useSelector((store) => store.search.language);
  const [localLanguage, setLocalLanguage] = useState(language);
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    setLocalLanguage(language); // Reset local state when the modal opens
  }, [language]);

  const handleClose = (e) => {
    dispatch(toggleGptSearch());
  };
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMoviesTMDB = async (movieName) => {
    const data = await fetch(MOVIE_SEARCH_API + movieName, API_OPTIONS);
    const json = await data.json();
    const filteredMovies = await json.results.filter(
      (movie) =>
        movie.title.toLowerCase() === movieName.toLowerCase() ||
        movie.original_title.toLowerCase() === movieName.toLowerCase()
    );

    return await filteredMovies.reduce(
      (max, movie) => (movie.popularity > max.popularity ? movie : max),
      filteredMovies[0]
    );
  };

  const handleGptSearchClick = async () => {
    dispatch(removeMovies());
    setSearchClicked(true);
    // Make an API call to GPT api to get movie results
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me name of 5 movies, comma separated(no space after comma) like the example result given ahead. Example Result: Gadar,Sholay,Don,3 Idiots,Hera Pheri";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      navigate("/error");
    }
    const gptMovies = gptResults.choices[0].message.content.split(",");
    //call tmdb api for each movie
    const promisesArray = gptMovies.map((movie) => searchMoviesTMDB(movie)); // will return a promises array

    let searchedMoviesList = await Promise.all(promisesArray);

    dispatch(addMovies(searchedMoviesList));
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    dispatch(changeLanguage(selectedLanguage));
  };

  return (
    <div className="backdrop-blur-2xl w-screen h-screen" onClick={handleClose}>
      <div className="right-[5%] md:right-[15%] top-4 absolute w-12">
        <label htmlFor="language">
          <IoLanguageSharp className="text-xl md:text-2xl cursor-pointer" />
        </label>
        <select
          name="language"
          id="language"
          value={localLanguage} // Use local state for select value
          className="absolute bg-red-700 top-0 -left-2 opacity-0 cursor-pointer"
          onChange={(e) => {
            setLocalLanguage(e.target.value);
            handleLanguageChange(e);
          }}
          onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking the select
        >
          <option value={LANGAUGES.en.value}>{LANGAUGES.en.name}</option>
          <option value={LANGAUGES.hin.value}>{LANGAUGES.hin.name}</option>
          <option value={LANGAUGES.esp.value}>{LANGAUGES.esp.name}</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-center pt-[12%]">
        <div
          className="relative bg-black/70 w-[93%] md:w-4/5 lg:w-2/3 xl:1/2 p-4 rounded-md border-2 border-slate-600"
          onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside it
        >
          <img
            className="absolute rounded-full bg-white w-4 -top-2 -right-2 cursor-pointer duration-200"
            src={CLOSE}
            alt="close"
            onClick={handleClose}
          />
          <form
            className="scroll-smooth overflow-y-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-12 gap-2">
              <input
                ref={searchText}
                type="text"
                placeholder={LANGAUGES[localLanguage].findText}
                className="focus:outline-none p-2 m-1 xl:m-2 lg:p-3 col-span-9 lg:col-span-10 placeholder:text-xs lg:placeholder:text-base rounded-md text-black"
              />
              <button
                onClick={handleGptSearchClick}
                className="bg-red-700 m-1 xl:m-2 font-semibold hover:bg-red-700/70 col-span-3 lg:col-span-2 flex justify-center items-center rounded-md"
              >
                {LANGAUGES[localLanguage].searchText}
              </button>
            </div>
          </form>
        </div>
      </div>
      {searchClicked ? (
        <div
          className="h-[60%] m-auto overflow-y-scroll bg-black/70 w-[93%] md:w-4/5 lg:w-2/3 xl:1/2 p-4 rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          <SearchedMovies />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchPage;
