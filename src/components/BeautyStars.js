import React, { Component } from "react";
import BeautyStars from "beauty-stars";

//style
import { BeautyWrapper } from "../styles";

export default class App extends Component {
  state = { value: 0 };
  render() {
    return (
      <BeautyWrapper>
        <BeautyStars
          value={this.state.value}
          onChange={(value) => this.setState({ value })}
        />
      </BeautyWrapper>
    );
  }
}
