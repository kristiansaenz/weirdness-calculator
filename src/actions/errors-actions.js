import { SET_LIKE_ERROR, CLEAR_LIKE_ERROR } from "./types";

export const setLikeError = errorMsg => {
  return {
    type: SET_LIKE_ERROR,
    payload: errorMsg
  };
};

export const clearLikeError = () => {
  return {
    type: CLEAR_LIKE_ERROR
  };
};
