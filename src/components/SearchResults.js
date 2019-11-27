import React from "react";
import LikeIcon from "../images/thumbs-up.svg";

function SearchResults() {
  return (
    <div className="search-results">
      <div className="box result-box"></div>
      <button className="button is-info calc-button">
          <img
            className="like-icon"
            src={LikeIcon}
            alt="like-gif"
          ></img>
      </button>
      <input
        className="slider is-fullwidth is-medium is-warning is-circle"
        step="1"
        min="0"
        max="100"
        value="50"
        type="range"
      ></input>
    </div>
  );
}

export default SearchResults;
