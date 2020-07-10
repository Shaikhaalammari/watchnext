import React from "react";
import BeautyStars from "./BeautyStars";
import { DetailWrapper, RecoWrapper } from "../styles";
import RecoList from "./RecoList";

const MovieDetail = (props) => {
  const movie = props.movie;
  return (
    <>
      <DetailWrapper>
        <img src={movie.image} alt={movie.title} />
        <p>{movie.date}</p>
        <p> {movie.plot}</p>
        <BeautyStars />
      </DetailWrapper>
    </>
    // <RecoWrapper>
    //     <RecoList></RecoList>
    //   </RecoWrapper>
  );
};

export default MovieDetail;
