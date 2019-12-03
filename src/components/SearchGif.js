import React from "react";

function SearchGif(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="text"
            value={props.searchInput}
            onChange={props.handleChange}
            placeholder="Find a GIF"
          />
        </div>
        <div className="control">
          <a 
            className="button is-info"
            type="submit"
            value="Submit"
            onClick={props.handleSubmit}
          >
            Search
          </a>
        </div>
      </div>
    </form>
  );
}

export default SearchGif;
