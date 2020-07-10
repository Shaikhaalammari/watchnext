import React from "react";
import BeautyStars from "./BeautyStars";
import { DimagWrapper } from "../styles";

const MovieDetail = (props) => {
  const movie = props.movie;
  return (
    <DimagWrapper>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.date}</p>
      <p> {movie.plot}</p>
      <BeautyStars />
    </DimagWrapper>
  );
};

export default MovieDetail;
