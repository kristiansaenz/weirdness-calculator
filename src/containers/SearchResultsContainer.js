import React from "react";
import SearchResults from "../components/SearchResults";
import { connect } from "react-redux";
import { likeGif } from "../actions/gifList-actions";
import { setLikeError, clearLikeError } from "../actions/errors-actions";
import { setWeirdness, setSearchResult } from "../actions/search-actions";

class SearchResultsContainer extends React.Component {
  state = {
    weirdnessInput: 0,
  };

  likeGif = (id) => {
    let alreadyExists = this.props.gifList.some(gif => gif.id === id);
    if(alreadyExists){
      this.props.setLikeError("You already liked this gif!");
    }
    else{
      this.props.likeGif(this.props.searchResult);
    }
  };

  handleSliderChange = e => {
    this.setState({
      weirdnessInput: parseInt(e.target.value)
    });
    this.props.setWeirdness(parseInt(e.target.value));
    this.props.setSearchResult(
      this.props.searchedTerm,
      parseInt(e.target.value)
    );
    this.props.clearLikeError();
  };

  render() {
    return (
      <div className="container">
        <SearchResults
          gif={this.props.searchResult}
          gifList={this.props.gifList}
          likeError={this.props.likeError}
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
  searchedTerm: state.searchedTerm,
  gifList: state.gifList,
  likeError: state.likeError
});

export default connect(mapStateToProps, {
  setWeirdness,
  setSearchResult,
  likeGif,
  setLikeError, 
  clearLikeError
})(SearchResultsContainer);
