import React from "react";
import LikeIcon from "../images/thumbs-up.svg";

function SearchResults(props) {

  return (
    <div className="search-results">
      <div className="box result-box">
        <p>{props.gif.title}</p>
        <br />
        <figure class="image is-2by1">
          {props.gif.images && (
            <img src={props.gif.images.original.url} alt={props.gif.title} />
          )}
        </figure>
      </div>
      <button className="button is-info calc-button">
        <img className="like-icon" src={LikeIcon} alt="like-gif" onClick={props.addToLikedList}></img>
      </button>
      <input
        className="slider is-fullwidth is-medium is-warning is-circle"
        step="1"
        min="0"
        onChange={props.handleChange}
        max="10"
        defaultValue="0"
        type="range"
      ></input>
      {/* <p>Weirdness: {props.weirdness}</p> */}
      <p>Weirdness: {props.weirdness}</p>
    </div>
  );
}

export default SearchResults;
