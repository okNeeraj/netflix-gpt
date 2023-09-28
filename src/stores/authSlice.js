import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'authenticated',
  initialState: null,
  reducers: {
    setAuthenticated: (state, action) => {
      return action.payload
    }
  }
});

export const { setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
