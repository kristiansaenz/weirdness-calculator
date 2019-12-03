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
        {props.gifs.length >= 5 ? (
          <React.Fragment>
            <p>
              Oh yeah! Time to calculate your score. Hit that calculate button
              :D
            </p>
            <br />
            <Link to="/results">
              <button className="button is-info calc-button">
                Calculate Your Weirdness
              </button>
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>
              You must <i>like</i> {likesNeeded()} more gifs to calculate your
              score!
            </p>
            <br />
            <a className="button is-info calc-button" disabled>
              Calculate Your Weirdness
            </a>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default LikedGifs;
