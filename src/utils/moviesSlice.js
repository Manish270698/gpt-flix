import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trendingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trendingTV: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrendingTV: (state, action) => {
      state.trendingTV = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    removeAll: () => {
      return {
        nowPlayingMovies: null,
        trendingMovies: null,
        trendingTV: null,
        trailerVideo: null,
      };
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrendingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrendingTV,
  addTrailerVideo,
  removeAll,
} = moviesSlice.actions;

export default moviesSlice.reducer;
