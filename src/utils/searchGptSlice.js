import { createSlice } from "@reduxjs/toolkit";

const searchGptSlice = createSlice({
  name: "search",
  initialState: {
    showGPT: false,
    language: "en",
    searchedMovies: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGPT = !state.showGPT;
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
    addMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
    removeMovies: (state) => {
      state.searchedMovies = null;
    },
  },
});

export const { toggleGptSearch, changeLanguage, addMovies, removeMovies } =
  searchGptSlice.actions;

export default searchGptSlice.reducer;
