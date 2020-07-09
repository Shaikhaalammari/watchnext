import React from "react";

import { DetailWrapper } from "../styles";
import MovieItem from "./MovieItems";
import movies from "../movies";

const MovieDetail = (props) => {
  const MovieDetail = movies.find((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));
  const movies = { movies };
  return (
    <DetailWrapper>
      <img src={movies.image} onClick={() => props.selectMovie(movies)} />
      <p> {movies.image}</p>
      <p> {movies.plot}</p>
    </DetailWrapper>
  );
};
export default MovieDetail;
