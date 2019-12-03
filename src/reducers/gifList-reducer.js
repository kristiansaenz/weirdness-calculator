import { LIKE_GIF, UNLIKE_GIF, CLEAR_LIST } from "../actions/types";

const initialState = [];

const GifListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_GIF:
      return [...state, action.payload];
    case UNLIKE_GIF:
      let newList = state.filter(gif => gif.id !== action.payload);
      return newList;
    case CLEAR_LIST:
      let clearedList = initialState;
      return clearedList;
    default:
      return state;
  }
};

export default GifListReducer;
