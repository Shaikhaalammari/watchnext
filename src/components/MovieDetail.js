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
    <DetailWrapper>
      <img src={movie.image} alt={movie.title} />

      <p>{movie.date}</p>
      <p> {movie.plot}</p>
      <BeautyStars />
      <center>
        <iframe
          padding="-15em"
          width="470px"
          height="230px"
          src={movie.trailer}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </center>
      <br></br>
      <br></br>
      <RecoList />
      <Link to="/movies">
        {" "}
        <img
          src="https://media1.giphy.com/media/fAET4eXc6ygpeFRUsF/giphy.gif"
          style={{ width: 150 }}
        />{" "}
      </Link>
    </DetailWrapper>
  );
};

export default MovieDetail;
