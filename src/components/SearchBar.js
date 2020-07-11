import React from "react";

//style
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <div>
      <p style={{ color: "#f3c623" }}>
        <center>Search..</center>
      </p>
      <SearchBarStyled
        onChange={(event) => props.setQuery(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
