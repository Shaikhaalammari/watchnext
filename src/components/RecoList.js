import React from "react";

//data

import RecoItem from "./RecoItems";
import { RecoWrapper } from "../styles";
import films from "../films";

const RecoList = (props) => {
  const RecoList = films.map((film) => (
    <RecoItem film={film} selectFilm={props.selectfilm} key={film.id} />
  ));

  return (
    <>
      <img src="https://i.giphy.com/media/cIyxANDLCi0opVMSJP/200w.webp" />
      <RecoWrapper>{RecoList}</RecoWrapper>
    </>
  );
};

export default RecoList;

// const RecoList = (props) => {
//   const RecoList = movies.filter((movie) =>
//     movie.type.map((movie) => (
//       <RecoItem movie={movie} selectMovie={props.selectMovie} key={movie.id} />
//     ))
//   );
