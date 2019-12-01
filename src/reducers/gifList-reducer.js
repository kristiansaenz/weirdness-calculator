const GifListReducer = (state = 0, action) => {
  switch (action.type) {
    case "LIKE":
      // return state.concat(gif)
      return state + 1;
    case "UNLIKE":
      // return state.filter(gif => gif.id !== id)
      return state - 1;
    default:
      return state;
  }
};

export default GifListReducer;
