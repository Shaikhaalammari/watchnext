import { ListWrapper } from "../styles";
import React from "react";
import MovieItem from "./MovieItems";
import movies from "../movies";
const MovieList = () => {
  const MovieList = movies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));

  return <ListWrapper>{MovieList}</ListWrapper>;
};

export default MovieList;
