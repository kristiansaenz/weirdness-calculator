import React from "react";
import "./App.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SearchGifContainer from "./containers/SearchGifContainer";
import LikedGifsContainer from "./containers/LikedGifsContainer";
import SearchResultsContainer from "./containers/SearchResultsContainer"

function App() {
  return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-three-fifths search-gif">
              <div className="columns is-search-container">
                <SearchGifContainer />
              </div>
              <div className="columns is-results-container">
                <SearchResultsContainer />
              </div>
            </div>
            <div className="column results-gif">
              <LikedGifsContainer />
            </div>
          </div>
        </div>
      </section>
  );
}

export default App;
