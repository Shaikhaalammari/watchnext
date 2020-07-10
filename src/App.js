import React, { useState } from "react";
import "./App.css";

//data
import movies from "./movies";

//styles
import { Title, Description, Weblogo, GlobalStyle } from "./styles";

//components
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import RecoList from "./components/RecoList";

function App() {
  const [movie, setMovie] = useState(null);

  const selectMovie = (movieId) => {
    const selectedMovie = movies.find((movie) => movie.id === movieId);
    setMovie(selectedMovie);
  };

  const setView = () =>
    movie ? (
      <MovieDetail movie={movie} />
    ) : (
      <MovieList selectMovie={selectMovie} />
    );

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
      {setView()}
    </div>
  );
}

export default App;
