import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import LikedGifList from "./LikedGifList";

function LikedGifs() {
  return (
    <div>
      <p className="title">Your Liked GIFs</p>
      <br />
      <LikedGifList columnSize="is-half" />
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
