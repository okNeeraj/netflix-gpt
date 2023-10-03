import { createSlice } from "@reduxjs/toolkit";

const trandingSlice = createSlice({
  name: 'trendings',
  initialState: {
    trendingAll: null,
    trendingMovies: null,
    trendingTv: null,
    trendingIndia: null,
  },
  reducers: {
    setTrending: (state, action) => {
      const { trendingType, trendingData } = action.payload;
      const filterTopTen = {
        page: trendingData.page,
        results: trendingData.results.slice(0, 10)
      }
      state[trendingType] = filterTopTen;
    }
  }
});


export const { setTrending } = trandingSlice.actions;
export default trandingSlice.reducer;
