import { LIKE_GIF, UNLIKE_GIF, CLEAR_LIST } from "./types";

export const likeGif = gif => {
  return {
    type: LIKE_GIF,
    payload: gif
  };
};

export const unlikeGif = id => {
  return {
    type: UNLIKE_GIF,
    payload: id
  };
};

export const clearList = () => {
  console.log("clearing gif list");
  return {
    type: CLEAR_LIST
  };
};
