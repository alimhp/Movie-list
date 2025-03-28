import { useSelector } from "react-redux";
import { getAllMovies } from "../features/Movies/movieSlice";
import MovieCard from "./MovieCard";
import "./MovieListing.css";

const MovieListing = ({ data: movies }) => {
  // const movies = useSelector(getAllMovies);
  // console.log(movies);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movies &&
            movies.length &&
            movies.map((movie) => <MovieCard key={movie.id} data={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
