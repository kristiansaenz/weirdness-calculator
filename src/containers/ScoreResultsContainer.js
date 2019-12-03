import React, { useState } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import GifList from "../components/GifList";

function ScoreResultsContainer() {
  const { gifList } = useSelector(
    state => ({
      gifList: state.gifList
    }),
    shallowEqual
  );

  const calcWeirdnessScore = () => {
    var sum = 0;
    for (let i = 0; i < gifList.length; i++) {
      sum += gifList[i].weirdness;
    }
    return Math.round(sum / 5);
  };

  return (
    <section className="section">
      <div className="container results-section">
        <p className="subtitle">
          You scored {calcWeirdnessScore()} out of 10 on the weirdness scale!
        </p>
        <br />
        <GifList gifs={gifList} addDeleteButtons={false} />
        <br />
        <br />
        <Link to="/">
          <button className="button is-info calc-button">Start Over</button>
        </Link>
      </div>
    </section>
  );
}

export default ScoreResultsContainer;
