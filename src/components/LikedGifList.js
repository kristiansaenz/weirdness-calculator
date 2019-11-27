import React, { useState } from "react";

function LikedGifList(props) {
  return (
    <div className="container gif-list-section">
      <div className="columns gif-list">
        <div className={`column ${props.columnSize}`}>
          <div className="box gif ${props.columnSize}"></div>
        </div>
        <div className={`column ${props.columnSize}`}>
          <div className="box gif"></div>
        </div>
        <div className={`column ${props.columnSize}`}>
          <div className="box gif"></div>
        </div>
        <div className={`column ${props.columnSize}`}>
          <div className="box gif"></div>
        </div>
        <div className={`column ${props.columnSize}`}>
          <div className="box gif"></div>
        </div>
      </div>
    </div>
  );
}

export default LikedGifList;
