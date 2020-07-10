import React from "react";

import { DetailWrapper } from "../styles";

const MovieDetail = (props) => {
  const movie = props.movie;
  return (
    <DetailWrapper>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.date}</p>
      <p> {movie.plot}</p>
    </DetailWrapper>
  );
};
export default MovieDetail;
