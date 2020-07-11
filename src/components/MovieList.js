import React, { useState } from "react";
import { Link } from "react-router-dom";

//components
import MovieItem from "./MovieItems";
import SearchBar from "./SearchBar";

//data
import movies from "../movies";

//style
import { ListWrapper } from "../styles";

const MovieList = (props) => {
  const [query, setQuery] = useState("");

  const MovieList = movies
    .filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => (
      <MovieItem movie={movie} selectMovie={props.selectMovie} key={movie.id} />
    ));

  return (
    <div>
      <Link to="/">
        <img
          style={{ margin: 10, float: "center", width: 75, hight: 75 }}
          src="https://seeklogo.com/images/M/movie-time-cinema-logo-8B5BE91828-seeklogo.com.png"
        />
      </Link>

      <SearchBar setQuery={setQuery} />

      <ListWrapper className="row">{MovieList}</ListWrapper>
    </div>
  );
};
export default MovieList;
