import { SET_SEARCH_RESULT } from "../actions/types"

const initalState = {};

const SearchResultsReducer = (state = initalState, action) => {
    switch (action.type) {
      case "SET_SEARCH_RESULT":
        let newState = action.payload;
        return newState
      default:
        return state;
    }
  };
  
export default SearchResultsReducer;