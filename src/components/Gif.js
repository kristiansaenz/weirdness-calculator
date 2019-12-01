import React, { useState } from "react";

function Gif(props) {
  return (
    <article class="message is-info">
      <div class="message-header">
      <p>{props.gif.title}</p>
        {props.deleteButtons ? 
        <button class="delete" onClick={() => props.unlikeGif(props.gif.id)}></button>
        :
        null}
      </div>
      <div class="message-body">
        <figure class="image is-2by1">
          <img
            src={props.gif.url}
          />
        </figure>
      </div>
    </article>
  );
}

export default Gif;
