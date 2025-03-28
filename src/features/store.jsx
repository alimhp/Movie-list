import { configureStore } from "@reduxjs/toolkit";
import  MovieReducer  from "./Movies/movieSlice";

export const store = configureStore({
  reducer: { movies: MovieReducer },
});
