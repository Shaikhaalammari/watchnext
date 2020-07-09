import React, { useState } from "react";
import "./App.css";
//data
import movies from "./movies";
//styles
import { Title, Description, Weblogo, GlobalStyle } from "./styles";
import MovieItems from "./components/MovieItems";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Title>Watch Next!</Title>
      <Weblogo
        src="https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png"
        alt="movieslogo"
      />
      <Description>
        Dont Waste Time Searching for a Movie!! WATCH NEXT! got your back.
      </Description>

      <MovieList />

      <MovieDetail movies={movies} />
    </div>
  );
}

export default App;
