import { createSlice } from "@reduxjs/toolkit";

const showCaseSlice = createSlice({
  name: 'showCase',
  initialState: {
    landingPage: null,
    movie: null,
    tvShow: null,
    latest: null
  },
  reducers: {
    setShowCase: (state, action) => {
      const { showCaseState, showCaseData } = action.payload;
      state[showCaseState] = showCaseData;
    }
  }
})

export const { setShowCase } = showCaseSlice.actions;
export default showCaseSlice.reducer;
