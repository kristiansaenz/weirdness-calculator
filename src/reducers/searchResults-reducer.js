import {
  SET_SEARCH_RESULT,
  SEARCH_RESULT_ERROR,
  CLEAR_SEARCH_RESULT
} from "../actions/types";

const initalState = {};

const SearchResultsReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULT:
      let newState = action.payload;
      return newState;
    case SEARCH_RESULT_ERROR:
      let errState = action.payload;
      return errState;
    case CLEAR_SEARCH_RESULT:
      let clearedState = initalState;
      return clearedState;
    default:
      return state;
  }
};

export default SearchResultsReducer;
