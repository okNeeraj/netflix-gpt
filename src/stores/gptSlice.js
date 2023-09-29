import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    recommendation: null
  },
  reducers: {
    setGpt: (state, action) => {

    }
  }
});

export const { setGpt } = gptSlice.actions;
export default gptSlice.reducer;
