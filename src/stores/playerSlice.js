import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    playing: null
  },

  reducers: {
    setPlayer: (state, action) => {
      const { playerState, playerData } = action.payload;
      state[playerState] = playerData;
    }
  }
});

export const { setPlayer } = playerSlice.actions;
export default playerSlice.reducer;
