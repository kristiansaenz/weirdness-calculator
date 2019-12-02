import React, { useState } from "react";
import LikedGifs from "../components/LikedGifs";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

function LikedGifsContainer() {
  const { gifList } = useSelector(
    state => ({
      gifList: state.gifList
    }),
    shallowEqual
  );

  const unlikeGif = id => {
    alert("here i dispatch action to UNLIKE");
    // setGifList(gifList.filter(gif => gif.id !== id));
  };

  return (
    <div className="container">
      <LikedGifs gifs={gifList} unlikeGif={unlikeGif} />
    </div>
  );
}

export default LikedGifsContainer;
