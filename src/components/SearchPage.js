import React from "react";
import CLOSE from "../images/close.png";
import { SEARCH } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleGptSearch } from "../utils/searchGptSlice";

const SearchPage = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleGptSearch());
  };

  return (
    <div>
      <div
        className="backdrop-blur-2xl w-screen h-screen flex justify-center pt-[10%] relative"
        onClick={handleClick}
      >
        <div
          className="absolute bg-black/70 w-4/5 lg:w-1/2 p-4 rounded-md border-2 border-slate-600"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            className="absolute rounded-full bg-white w-4 -top-2 -right-2 cursor-pointer duration-200"
            src={CLOSE}
            alt="close"
            onClick={handleClick}
          />
          <form className="scroll-smooth overflow-y-auto">
            <div className="grid grid-cols-12 gap-2">
              <input
                type="text"
                placeholder="What would you like to watch today?"
                className="focus:outline-none p-2 lg:p-3 col-span-9 lg:col-span-10 placeholder:text-xs rounded-md text-black"
              />
              <button
                type="button"
                className="bg-red-700 font-semibold hover:bg-red-700/70 col-span-3 lg:col-span-2 flex justify-center items-center rounded-md"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
