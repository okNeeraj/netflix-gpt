import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import authReducer from "./authSlice";
import moviesReducer from "./moviesSlice";
import trendingReducer from "./trendingSlice";
import searchReducer from "./searchSlice";
import showCaseReducer from "./showCaseSlice";

const appStore = configureStore({
  reducer: {
    authenticated: authReducer,
    user: userReducer,
    movies: moviesReducer,
    trendings: trendingReducer,
    search: searchReducer,
    showCase: showCaseReducer
  }
});

export default appStore;
