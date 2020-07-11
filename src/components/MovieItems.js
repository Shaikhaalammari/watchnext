import React from "react";
import { ItemWrapper, MovieTitle } from "../styles";
import movies from "../movies";
import { Link } from "react-router-dom";

const MovieItems = (props) => {
  const movie = props.movie;

  return (
    <ItemWrapper>
      <Link to={`/movies/${movie.id}`}>
        <img src={movie.image} alt={movie.title} />
      </Link>
      <MovieTitle>
        <h4>{movie.title}</h4>
      </MovieTitle>
      <p> {movie.runtime}</p>
      <p> {movie.genre}</p>
    </ItemWrapper>
  );
};
// plot and release date take it to details

export default MovieItems;
