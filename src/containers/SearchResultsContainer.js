import React, { useState, useEffect } from "react";
import SearchResults from "../components/SearchResults";
import axios from "axios";

function SearchResultsContainer() {
  const [searchResult, setSearchResult] = useState([]);

  const GIF_URL = "http://api.giphy.com/v1/gifs/translate";
  const API_KEY = "iuWW7RqfUxuHRrD6H33ZzFFmZTFLnFT9";

  useEffect(() => {
    const fetchData = async () => {
      const gif = await axios.get(
        // GIF_URL + "?api_key=" + API_KEY + "&s=" + searchedGif + "&weirdness=" + weirdness
        GIF_URL + "?api_key=" + API_KEY + "&s=otter&weirdness=6"
      );
      setSearchResult(gif.data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <SearchResults gif={searchResult} />
    </div>
  );
}

export default SearchResultsContainer;
