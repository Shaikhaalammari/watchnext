import React from "react";
import { Title, Description, Weblogo } from "../styles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Title>Watch Next!</Title>
      <Weblogo
        src="https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png"
        alt="movieslogo"
      />
      <Description>
        Dont Waste Time Searching for a Movie!! WATCH NEXT! got your back.
      </Description>
      <Link to="/movies" style={{ margin: 30, float: "center" }}>
        Go to movies
      </Link>
    </>
  );
};

export default Home;
