import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    showCase: null,
    videos: null,
    nowPlaying: null,
    topRated: null,
    popular: null,
  },
  reducers: {
    setMovie: (state, action) => {
      const { movieType, movieData } = action.payload
      state[movieType] = movieData;
    }
  }
});

export const { setMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
