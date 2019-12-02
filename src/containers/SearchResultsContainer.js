import React, { useState, useEffect } from "react";
import SearchResults from "../components/SearchResults";
import { connect } from 'react-redux'
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { likeGif } from "../actions/gifList-actions";
import { setWeirdness } from "../actions/search-actions";

class SearchResultsContainer extends React.Component {
  state = {
    // searchResult: {},
    weirdnessInput: 0
  };

  likeGif = id => {
    console.log("liked");
    alert("liked")
    // dispatch(likeGif());
  };

  handleSliderChange = e => {
    this.setState({
      weirdnessInput: parseInt(e.target.value)
    })
    this.props.setWeirdness(parseInt(e.target.value));
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
  searchResult: state.searchResult
})

export default connect(mapStateToProps, { setWeirdness })(SearchResultsContainer);
