import { SET_SEARCH_TERM } from "../actions/types"

const initalState = "";

const SearchTermReducer = (state = initalState, action) => {
    switch (action.type) {
      case SET_SEARCH_TERM:
        let newState = action.payload;
        return newState
      default:
        return state;
    }
  };
  
  export default SearchTermReducer;