import React from "react";
import Gif from "./Gif";

function GifList(props) {
  return (
      <div className="columns gif-list">
        {props.gifs && props.gifs.map(gif => (
          <div className={`column ${props.columnSize}`} key={gif.id}>
            <Gif
              key={gif.id}
              gif={gif}
              deleteButtons={props.addDeleteButtons}
              unlikeGif={props.unlikeGif}
            />
          </div>
        ))}
      </div>
  );
}

export default GifList;
