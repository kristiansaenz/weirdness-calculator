import React, { useState } from "react";
import Gif from "./Gif";

function GifList(props) {
  return (
    <div className="container gif-list-section">
      <div className="columns gif-list">
        {props.gifs && props.gifs.map(gif => (
          <div className={`column ${props.columnSize}`}>
            <Gif
              key={gif.id}
              gif={gif}
              deleteButtons={props.addDeleteButtons}
              unlikeGif={props.unlikeGif}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GifList;
