import { createSlice } from "@reduxjs/toolkit";

const searchGptSlice = createSlice({
  name: "search",
  initialState: {
    showGPT: false,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGPT = !state.showGPT;
    },
  },
});

export const { toggleGptSearch } = searchGptSlice.actions;

export default searchGptSlice.reducer;
