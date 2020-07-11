import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import { useHistory } from "react-router-dom";

//data
import movies from "./movies";

//styles
import { GlobalStyle } from "./styles";

//components
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import RecoList from "./components/RecoList";
import Home from "./components/Home";

function App() {
  const [movie, setMovie] = useState(null);

  const selectMovie = (movieId) => {
    const selectedMovie = movies.find((movie) => movie.id === movieId);
    setMovie(selectedMovie);
  };

  return (
    <>
      <GlobalStyle />

      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetail movies={movies} />
        </Route>
        <Route path="/movies">
          <MovieList selectMovie={selectMovie} />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
