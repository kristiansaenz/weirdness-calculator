import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { clearSearchResult } from "../actions/search-actions";
import { clearList } from "../actions/gifList-actions";
import GifList from "../components/GifList";

class ScoreResultsContainer extends React.Component {
  calcWeirdnessScore = () => {
    let list = this.props.gifList;
    var sum = 0;
    for (let i = 0; i < list.length; i++) {
      sum += list[i].weirdness;
    }
    return Math.round(sum / 5);
  };

  clearCalculator = () => {
    this.props.clearSearchResult();
    this.props.clearList();
  };

  render() {
    return (
      <section className="section">
        <div className="container results-section">
          <p className="subtitle">
            You scored {this.calcWeirdnessScore()} out of 10 on the weirdness
            scale!
          </p>
          <br />
          <GifList gifs={this.props.gifList} addDeleteButtons={false} />
          <br />
          <br />
          <Link to="/">
            <button
              className="button is-info calc-button"
              onClick={this.clearCalculator}
            >
              Start Over
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  gifList: state.gifList
});

export default connect(mapStateToProps, { clearSearchResult, clearList })(
  ScoreResultsContainer
);
