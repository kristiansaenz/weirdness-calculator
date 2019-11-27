import React from "react";

function SearchGif() {
  return (
    <div className="field has-addons">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Find a GIF"
        ></input>
      </div>
      <div className="control">
        <a className="button is-info">Search</a>
      </div>
    </div>
  );
}

export default SearchGif;
