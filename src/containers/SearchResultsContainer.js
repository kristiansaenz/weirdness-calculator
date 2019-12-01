import React, { useState, useEffect } from "react";
import SearchResults from "../components/SearchResults";
import axios from "axios";

function SearchResultsContainer() {
  const [searchResult, setSearchResult] = useState([]);
  const [weirdness, setWeirdness] = useState(0);

  const GIF_URL = "https://api.giphy.com/v1/gifs/translate";
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

  const likeGif = () => {
    alert("liked");
  };

  const handleSliderChange = e => {
    setWeirdness(parseInt(e.target.value));
  };

  return (
    <div className="container">
      <SearchResults
        gif={searchResult}
        addToLikedList={addToLikedList}
        handleChange={handleSliderChange}
        weirdness={weirdness}
      />
    </div>
  );
}

export default SearchResultsContainer;
