import React from "react";
import films from "../films";
import RecoItem from "./RecoItems";
import { RecoWrapper } from "../styles";

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
