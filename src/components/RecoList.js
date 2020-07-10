import React from "react";
import MovieList from "./MovieList";
import MovieItem from "./MovieItems";
import movies from "../movies";
import { RecoWrapper } from "../styles";

const RecoList = (props) => {
  const RecoList = movies.map((movie) => (
    <RecoList movie={movie} selectMovie={props.selectMovie} key={movie.id} />
  ));
  return <RecoWrapper>{RecoList}</RecoWrapper>;
};

export default RecoList;
