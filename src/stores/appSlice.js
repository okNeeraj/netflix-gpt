import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isMuted: true,
  },
  reducers: {
    setApp: (state, action) => {
      const { appState, appData } = action.payload;
      state[appState] = appData;
    }
  }
})

export const { setApp } = appSlice.actions;
export default appSlice.reducer;
