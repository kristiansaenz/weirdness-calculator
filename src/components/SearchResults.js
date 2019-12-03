import React from "react";
import LikeIcon from "../images/thumbs-up.svg";

function SearchResults(props) {
  const renderLikeButton = () => {
    if (props.gifList.length >= 5 || Object.keys(props.gif).length === 0) {
      return (
        <a className="button is-info like-button" disabled>
          <img className="like-icon" src={LikeIcon} alt="like-gif"></img>
        </a>
      );
    } else {
      return (
        <button className="button is-info like-button">
          <img
            className="like-icon"
            src={LikeIcon}
            alt="like-gif"
            onClick={() => props.addToLikedList(props.gif.id)}
          ></img>
        </button>
      );
    }
  };

  const renderGifDisplay = () => {
    if (Object.keys(props.gif).length === 0) {
      return <p>Search for a cool gif :-)</p>;
    } 
    else if (props.gif.error) {
      return <p>{`Sorry, ${props.gif.error} :(`}</p>;
    }
    else {
      return (
        <React.Fragment>
          <p>{props.gif.title}</p>
          <br />
          <figure className="image is-2by1">
            {props.gif.url && <img src={props.gif.url} alt={props.gif.title} />}
          </figure>
        </React.Fragment>
      );
    }
  };

  return (
    <div className="search-results">
      <div className="box result-box">{renderGifDisplay()}</div>
      <div className="like-button-area">
        {renderLikeButton()}
        <br />
        {props.likeError === "" ? null : (
          <p className="error-msg">{props.likeError}</p>
        )}
      </div>
      <input
        className="slider is-fullwidth is-medium is-warning is-circle"
        step="1"
        min="0"
        onChange={props.handleChange}
        max="10"
        defaultValue="0"
        type="range"
      ></input>
      <p>Weirdness: {props.weirdnessInput}</p>
    </div>
  );
}

export default SearchResults;
