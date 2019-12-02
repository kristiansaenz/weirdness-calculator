const SearchWeirdnessReducer = (state = 5, action) => {
    switch (action.type) {
      case "UPDATE_WEIRDNESS":
        return state + 1;
      default:
        return state;
    }
  };
  
  export default SearchWeirdnessReducer;