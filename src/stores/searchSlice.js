import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    gptResults: null,
    movies: null,
    shows: null,
  },
  reducers: {
    setGptSearch: (state, action) => {
      const { actionType, searchResults } = action.payload
      state[actionType] = searchResults;
    }
  }
});

export const { setGptSearch } = searchSlice.actions;
export default searchSlice.reducer;
