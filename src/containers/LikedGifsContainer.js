import React, { useState } from "react";
import LikedGifs from "../components/LikedGifs";
import { connect } from "react-redux";
import { unlikeGif } from "../actions/gifList-actions";

class LikedGifsContainer extends React.Component {
  unlikeGif = id => {
    this.props.unlikeGif(id);
  };

  render() {
    return (
      <div className="container">
        <LikedGifs gifs={this.props.gifList} unlikeGif={this.unlikeGif} />
      </div>
    );
  }
}

const MapStateToProps = state => ({
  gifList: state.gifList
});

export default connect(MapStateToProps, { unlikeGif })(LikedGifsContainer);
