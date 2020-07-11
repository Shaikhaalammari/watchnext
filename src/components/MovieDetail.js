import React from "react";
import BeautyStars from "./BeautyStars";
import { DetailWrapper, RecoWrapper } from "../styles";
import RecoList from "./RecoList";
import { Link, useParams } from "react-router-dom";
import movies from "../movies";

const MovieDetail = (props) => {
  const { movieId } = useParams();

  const movie = props.movies.find((movie) => movie.id === +movieId);
  return (
    <>
      <DetailWrapper>
        <img src={movie.image} alt={movie.title} />

        <p>{movie.date}</p>
        <p> {movie.plot}</p>
        <Link to="/movies"> back to movies </Link>
        <BeautyStars />
      </DetailWrapper>
    </>
    // <RecoWrapper>
    //     <RecoList></RecoList>
    //   </RecoWrapper>
  );
};

export default MovieDetail;
