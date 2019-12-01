import React, { useState } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import GifList from "../components/GifList";

function ScoreResultsContainer() {
  const [gifList, setGifList] = useState([
    { id: 1, title: "seal ya later", url: "https://media2.giphy.com/media/XyJSY5OjVkHvtnJkvM/giphy.gif", weirdness: 2},
    { id: 2, title: "seal n deliver", url: "https://media.giphy.com/media/mJJczeZNee3uw/giphy.gif", weirdness: 7},
    { id: 3, title: "seal the deal", url: "https://media.giphy.com/media/HvsJ527vb7z4A/giphy.gif", weirdness: 6},
    { id: 4, title: "seal funny", url: "https://media3.giphy.com/media/EVMpdzrbWiFig/giphy.gif", weirdness: 3},
    { id: 5, title: "seal meal", url: "https://media1.giphy.com/media/fzMW09JbA2JrO/giphy.gif", weirdness: 1}
  ])

  return (
    <section className="section">
    <div className="container results-section">
      <p className="subtitle">You scored 8 out of 10 on the weirdness scale!</p>
      <br />
      <GifList gifs={gifList} addDeleteButtons={false} />
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
