import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import LikedGifList from "../components/LikedGifList";

function ScoreResultsContainer() {
  return (
    <section className="section">
    <div className="container results-section">
      <p className="subtitle">You scored 8 out of 10 on the weirdness scale!</p>
      <LikedGifList />
      <Link to="/">
        <button className="button is-info calc-button">
          Start Over
        </button>
      </Link>
    </div>
    </section>
  );
}

export default ScoreResultsContainer;
