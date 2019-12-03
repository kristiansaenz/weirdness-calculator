import React from "react";

function Gif(props) {
  return (
    <article className="message is-info is-equal-height">
      <div className="message-header">
      <p>{props.gif.title}</p>
        {props.deleteButtons ? 
        <button className="delete" onClick={() => props.unlikeGif(props.gif.id)}></button>
        :
        null}
      </div>
      <div className="message-body">
        <figure className="image is-2by1">
          <img
            src={props.gif.url} alt={props.gif.title}
          />
        </figure>
      </div>
    </article>
  );
}

export default Gif;
