import { SET_WEIRDNESS } from "../actions/types"

const initalState = 0;

const SearchWeirdnessReducer = (state = initalState, action) => {
    switch (action.type) {
      case SET_WEIRDNESS:
        let newState = action.payload;
        return newState
      default:
        return state;
    }
  };
  
  export default SearchWeirdnessReducer;