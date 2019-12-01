import React, { useState } from "react";
import InfoText from "../layout/InfoText";
import SearchGif from "../components/SearchGif";

function SearchGifContainer() {
  const [searchedGif, setSearchedGif] = useState("");

  const handleSearchSubmit = e => {
    e.preventDefault();
    alert("You searched for term " + searchedGif);
  };

  const handleSearchChange = e => {
    setSearchedGif(e.target.value);
  };

  return (
    <div className="container">
      <InfoText />
      <SearchGif
        handleSubmit={handleSearchSubmit}
        handleChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchGifContainer;
