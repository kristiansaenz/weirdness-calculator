import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import GifList from "./GifList";

function LikedGifs(props) {
  return (
    <div>
      <p className="title">Your Liked GIFs</p>
      <br />
      <GifList
        gifs={props.gifs}
        columnSize="is-half"
        addDeleteButtons={true}
        unlikeGif={props.unlikeGif}
      />
      <div className="calculate-section">
        <Link to="/results">
          <button class="button is-info calc-button">
            Calculate Your Weirdness
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LikedGifs;
