import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  // initialState: null,
  initialState: {
    user: null
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload
      // return action.payload
    },
    removeUser: (state, action) => {
      return null
    }
  }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

