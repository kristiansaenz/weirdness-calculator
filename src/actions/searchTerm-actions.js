export const updateSearch = newSearchedGif => {
  return {
    type: "UPDATE_SEARCH",
    payload: {
      searchTerm: newSearchedGif
    }
  };
};
