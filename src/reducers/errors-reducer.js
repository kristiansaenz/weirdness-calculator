import { SET_LIKE_ERROR, CLEAR_LIKE_ERROR } from "../actions/types";

const initialState = "";

const ErrorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKE_ERROR:
      let newState = action.payload;
      return newState;
    case CLEAR_LIKE_ERROR:
      let clearedState = initialState;
      return clearedState;
    default:
      return state;
  }
};

export default ErrorsReducer;
