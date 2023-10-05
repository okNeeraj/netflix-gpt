import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux store to manage movie data.
 *
 * This slice manages the state of various movie types like showCase, videos, nowPlaying, etc.
 * @see {@link https://redux-toolkit.js.org/api/createslice | createSlice}
 */

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    showCase: null,
    videos: null,
    nowPlaying: null,
    topRated: null,
    popular: null,
    latest: null,
    tvShowIndia: null,
    tvShowInternationl: null,
    hollywood: null,
    bollywood: null,
    action: null,
    adventure: null,
    animation: null,
    comedy: null,
    crime: null,
    drama: null,
    family: null,
    horror: null,
    mystery: null,
    romance: null,
    scienceFiction: null,
    thriller: null,
  },
  reducers: {
    /**
     * Action to set movie data in the Redux store.
     *
     * This action sets the movie data for a specific movie state (e.g., showCase, videos) in the Redux store.
     *
     * @param {string} movieState - The movie state (e.g., showCase, videos).
     * @param {object} movieData - The movie data to set in the Redux store.
     * @type {import("types").ActionCreatorWithPayload}
     */
    setMovie: (state, action) => {
      const { movieState, movieData } = action.payload
      state[movieState] = movieData;
    }
  }
});

export const { setMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
