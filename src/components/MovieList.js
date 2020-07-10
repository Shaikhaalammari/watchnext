import { ListWrapper } from "../styles";
import React from "react";
import MovieItem from "./MovieItems";
import movies from "../movies";
import MovieItems from "./MovieItems";

const MovieList = (props) => {
  const MovieList = movies.map((movie) => (
    <MovieItem movie={movie} selectMovie={props.selectMovie} key={movie.id} />
  ));

  return <ListWrapper>{MovieList}</ListWrapper>;
};

export default MovieList;
