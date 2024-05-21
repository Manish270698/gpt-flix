import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import searchReducer from "./searchGptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    search: searchReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
});

export default appStore;
