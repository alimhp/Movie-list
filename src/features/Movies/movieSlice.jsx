import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: JSON.parse(localStorage.getItem("movies")) || [],
};

export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addmovies: (state, action) => {
      localStorage.setItem("movies", JSON.stringify(action.payload));
      state.movie = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addmovies } = MovieSlice.actions;
export const getAllMovies = (state) => state.movies.movie;
export default MovieSlice.reducer;
