import { LIKE_GIF, UNLIKE_GIF } from "./types";

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
