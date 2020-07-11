import React from "react";
import { Link } from "react-router-dom";

//styles
import { Title, Description, Weblogo } from "../styles";

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
        <br></br>
        <br></br>
        <p>Click on PopCorn!!</p>
        <Link to="/movies" style={{ margin: 30, align: "center" }}>
          <img
            src="https://media1.giphy.com/media/fAET4eXc6ygpeFRUsF/giphy.gif"
            style={{ width: 150, align: "center" }}
          />
        </Link>
      </Description>
    </>
  );
};

export default Home;
