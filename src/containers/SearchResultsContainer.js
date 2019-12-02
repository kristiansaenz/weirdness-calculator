import React, { useState, useEffect } from "react";
import SearchResults from "../components/SearchResults";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { likeGif } from "../actions/gifList-actions";
import { searchGify } from "../actions/searchResults-actions";


function SearchResultsContainer() {
  const [searchResult, setSearchResult] = useState([]);
  const [weirdness, setWeirdness] = useState(0);

  const { searchTerm, searchWeirdness  } = useSelector(state => ({
    searchTerm: state.searchedTerm,
    searchWeirdness: state.searchedWeirdness,
    searchResult: state.searchResult
  }), shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(callGiphyAPI(searchTerm, searchWeirdness));
    dispatch(searchGify)

  }, []);

  const likeGif = (id) => {
    console.log("liked");
    // dispatch({ type: LIKE_GIF, payload: 'My payload' })
    // dispatch(likeGif());
  };

  const handleSliderChange = e => {
    setWeirdness(parseInt(e.target.value));
    //dispatch(update searchWeirdness)
    //call api again
  };

  return (
    <div className="container">
      <SearchResults
        gif={searchResult}
        addToLikedList={likeGif}
        handleChange={handleSliderChange}
        weirdness={weirdness}
      />
    </div>
  );
}

export default SearchResultsContainer;
