import React, { useState } from "react";

function Gif(props) {
  return (
    <article class="message is-info">
      <div class="message-header">
      <p>seal dayz</p>
        {props.deleteButtons ? 
        <button class="delete"></button>
        :
        null}
      </div>
      <div class="message-body">
        <figure class="image is-2by1">
          <img
            src="https://media.giphy.com/media/B86lxbrMSZ0SQ/giphy.gif"
          />
        </figure>
      </div>
    </article>
  );
}

export default Gif;
