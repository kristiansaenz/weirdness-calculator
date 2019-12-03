import React, { useState } from "react";
import { connect } from "react-redux";
import InfoText from "../layout/InfoText";
import SearchGif from "../components/SearchGif";
import { setSearchTerm, setSearchResult } from "../actions/search-actions";

class SearchGifContainer extends React.Component {
  state = {
    search: ""
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    this.props.setSearchTerm(this.state.search);
    this.props.setSearchResult(this.state.search, this.props.searchedWeirdness);
    this.setState({
      search: ""
    })
  };

  handleSearchChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <InfoText />
        <SearchGif
          handleSubmit={this.handleSearchSubmit}
          handleChange={this.handleSearchChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchedWeirdness: state.searchedWeirdness
})

export default connect(mapStateToProps, { setSearchTerm, setSearchResult })(SearchGifContainer);
