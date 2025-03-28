import { useEffect } from "react";
import MovieApi from "../common/MovieApi";
import { APIKEY } from "../common/APIKEY";
import MovieListing from "./MovieListing";
// import { useDispatch } from "react-redux";
// import { addmovies } from "../features/Movies/movieSlice";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  // const dispatch = useDispatch();
  const { error, data, isFetching } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await MovieApi.get(`movie?api_key=${APIKEY}`);
      return response;
    },
  });
  // useEffect(() => {
  //   if (!!data?.data?.results && !isFetching) {
  //     dispatch(addmovies(data.data.results));
  //   }
  // }, []);
  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     const res = await MovieApi.get(`movie?api_key=${APIKEY}`);
  //     console.log(res.data.results);
  //     dispatch(addmovies(res.data.results));
  //   };
  //   fetchMovie();
  // }, []);

  return isFetching ? (
    <>Loading...</>
  ) : (
    <>
      <div className="banner-img"></div>
      <MovieListing data={data.data.results} />
    </>
  );
};

export default Home;
