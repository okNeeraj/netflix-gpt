import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import authReducer from "./authSlice";
import moviesReducer from "./moviesSlice";
import trendingReducer from "./trendingSlice";
import searchReducer from "./searchSlice";

const appStore = configureStore({
  reducer: {
    authenticated: authReducer,
    user: userReducer,
    movies: moviesReducer,
    trendings: trendingReducer,
    search: searchReducer
  }
});

export default appStore;
