import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import GifList from "./GifList";

function LikedGifs(props) {
  const likesNeeded = () => {
    let likedGifs = props.gifs.length;
    return 5 - likedGifs;
  };

  return (
    <div>
      <p className="title">Your Liked GIFs</p>
      <br />
      <div className="container gif-list-section">
        <GifList
          gifs={props.gifs}
          columnSize="is-half"
          addDeleteButtons={true}
          unlikeGif={props.unlikeGif}
        />
      </div>
      <div className="calculate-section">
        <p>
          You must <i>like</i> {likesNeeded()} more gifs to calculate your
          score!
        </p>
        <br />
        <Link to="/results">
          <button className="button is-info calc-button">
            Calculate Your Weirdness
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LikedGifs;
