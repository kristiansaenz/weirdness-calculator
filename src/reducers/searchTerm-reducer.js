const SearchTermReducer = (state = "the office", action) => {
    switch (action.type) {
      case "UPDATE_SEARCH":
        return state + 1;
      default:
        return state;
    }
  };
  
  export default SearchTermReducer;