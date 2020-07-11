import React from "react";
import { Link } from "react-router-dom";

//styles
import { ItemWrapper, MovieTitle } from "../styles";

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

export default MovieItems;
