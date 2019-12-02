const SearchResultsReducer = (state = {}, action) => {
    switch (action.type) {
      case "UPDATE_RESULTS":
        return state + 1;
      case "SET_GIF_DATA":
        return {...action.payload, ...state};
      default:
        return state;
    }
  };
  
export default SearchResultsReducer;