const WeirdnessReducer = (state = 0, action) => {
  switch (action.type) {
    case "UPDATE_WEIRDNESS":
      return state + 1;
    case "CALC_SCORE":
      return state + 1;
    default:
      return state;
  }
};

export default WeirdnessReducer;