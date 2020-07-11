import React from "react";
import { Link, useParams } from "react-router-dom";
import BeautyStars from "./BeautyStars";

//style
import { DetailWrapper } from "../styles";

//components
import RecoList from "./RecoList";
//data
import movies from "../movies";

const MovieDetail = (props) => {
  const { movieId } = useParams();

  const movie = props.movies.find((movie) => movie.id === +movieId);

  // const RecoMovie = (movie = movie.find((movie) => movie.type === movies.type));
  return (
    <DetailWrapper>
      <img src={movie.image} alt={movie.title} />

      <p>{movie.date}</p>
      <p> {movie.plot}</p>
      <BeautyStars />
      <center>
        <p>Don't Miss The Trailler!!</p>
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
