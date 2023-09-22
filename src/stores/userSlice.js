import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  // initialState: null,
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload
    },
    updateUser: (state, action) => {
      return {
        ...state,
        ...action.payload
      };
    },
    removeUser: (state, action) => {
      return null
    }
  }
});

export const { addUser, updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

