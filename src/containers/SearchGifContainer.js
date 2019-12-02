import React, { useState } from "react";
import { connect } from "react-redux";
import InfoText from "../layout/InfoText";
import SearchGif from "../components/SearchGif";

class SearchGifContainer extends React.Component {
  state = {
    search: ""
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    //dispatch action to update search

    alert("You searched for term " + this.state.search + "Weirdness " + this.props.searchedWeirdness);
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

export default connect(mapStateToProps)(SearchGifContainer);
