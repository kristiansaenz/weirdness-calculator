import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import GifList from "../components/GifList";

function ScoreResultsContainer() {
  return (
    <section className="section">
    <div className="container results-section">
      <p className="subtitle">You scored 8 out of 10 on the weirdness scale!</p>
      <br />
      <GifList addDeleteButtons={false} />
      <br />
      <br />
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
