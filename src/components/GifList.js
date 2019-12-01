import React, { useState } from "react";
import Gif from "./Gif";

function GifList(props) {
  return (
    // <div className="container gif-list-section">
    //   <div className="columns gif-list">
    //     <div className={`column ${props.columnSize}`}>
    //       <div className="box gif ${props.columnSize}"></div>
    //     </div>
    //     <div className={`column ${props.columnSize}`}>
    //       <div className="box gif"></div>
    //     </div>
    //     <div className={`column ${props.columnSize}`}>
    //       <div className="box gif"></div>
    //     </div>
    //     <div className={`column ${props.columnSize}`}>
    //       <div className="box gif"></div>
    //     </div>
    //     <div className={`column ${props.columnSize}`}>
    //       <div className="box gif"></div>
    //     </div>
    //   </div>
    // </div>
    <div className="container gif-list-section">
      <div className="columns gif-list">
        <div className={`column ${props.columnSize}`}>
          <Gif deleteButtons={props.addDeleteButtons} />
        </div>
        <div className={`column ${props.columnSize}`}>
          <Gif deleteButtons={props.addDeleteButtons} />
        </div>
        <div className={`column ${props.columnSize}`}>
          <Gif deleteButtons={props.addDeleteButtons} />
        </div>
        <div className={`column ${props.columnSize}`}>
          <Gif deleteButtons={props.addDeleteButtons} />
        </div>
        <div className={`column ${props.columnSize}`}>
          <Gif deleteButtons={props.addDeleteButtons} />
        </div>
      </div>
    </div>
  );
}

export default GifList;
