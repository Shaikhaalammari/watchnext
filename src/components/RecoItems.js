import React from "react";
import films from "../films";
import { ImageReco } from "../styles";

const RecoItems = (props) => {
  const film = props.film;

  return (
    <div>
      <ImageReco>
        <img src={film.image} alt={film.title} />
      </ImageReco>
    </div>
  );
};

export default RecoItems;
