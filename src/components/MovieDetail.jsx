import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllMovies } from "../features/Movies/movieSlice";
import { useState } from "react";
import { useEffect } from "react";
import "./MovieDetail.css";
import { useQueryClient } from "@tanstack/react-query";

const IMGPATH = "https://image.tmdb.org/t/p/w500";

const MovieDetail = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const MovieId = Number(id);
  const data = queryClient.getQueryData(["movies"]);
  const movies = data?.data?.results;
  const [movie, setMovie] = useState(null);
  // const movies = useSelector(getAllMovies);
  useEffect(() => {
    if (movies && movies.length > 0) {
      const soloMovie = movies.filter((item) => item.id === MovieId);
      setMovie(soloMovie[0]);
    }
    // console.log("soloMovie", soloMovie);
  }, [data]);

  if (movie === null) {
    return <p>Loading...</p>;
  }
  return (
    <div className="moviedetail-container">
      <div className="cart">
        <div className="cart-left">
          <img src={IMGPATH + movie.poster_path} alt={movie.title} />
        </div>
        <div className="cart-right">
          <div className="card-info">
            <h4>{movie.title}</h4>
            <p>{movie.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
