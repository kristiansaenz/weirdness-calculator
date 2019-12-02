export const updateWeirdness = newSearchedWeirdness => {
  return {
    type: "UPDATE_WEIRDNESS",
    payload: {
      searchedWeirdness: newSearchedWeirdness
    }
  };
};
