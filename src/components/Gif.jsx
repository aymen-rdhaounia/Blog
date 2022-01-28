import React, { Component } from "react";
import gif from "../images/giphy.gif";

export default class Gif extends Component {
  render() {
    const { showGif } = this.props;
    return <img src={gif} alt="" className={`gif ${!showGif && "hidden"}`} />;
  }
}
