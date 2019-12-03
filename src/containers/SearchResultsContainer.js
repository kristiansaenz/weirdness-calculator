import React, { useState, useEffect } from "react";
import SearchResults from "../components/SearchResults";
import { connect } from 'react-redux'
import { likeGif } from "../actions/gifList-actions";
import { setWeirdness, setSearchResult } from "../actions/search-actions";

class SearchResultsContainer extends React.Component {
  state = {
    weirdnessInput: 0
  };

  likeGif = () => {
    //add list check to see if > 5
    //add disable
    this.props.likeGif(this.props.searchResult);
  };

  handleSliderChange = e => {
    this.setState({
      weirdnessInput: parseInt(e.target.value)
    })
    this.props.setWeirdness(parseInt(e.target.value));
    this.props.setSearchResult(this.props.searchedTerm, parseInt(e.target.value))
  };

  render() {
    return (
      <div className="container">
        <SearchResults
          gif={this.props.searchResult}
          addToLikedList={this.likeGif}
          handleChange={this.handleSliderChange}
          weirdnessInput={this.state.weirdnessInput}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResult: state.searchResult,
  searchedTerm: state.searchedTerm
})

export default connect(mapStateToProps, { setWeirdness, setSearchResult, likeGif })(SearchResultsContainer);
