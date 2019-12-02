import axios from "axios";
import { SET_SEARCH_TERM, SET_WEIRDNESS, SET_SEARCH_RESULT } from "./types";
const GIF_URL = "https://api.giphy.com/v1/gifs/translate";
const API_KEY = "iuWW7RqfUxuHRrD6H33ZzFFmZTFLnFT9";

export const searchGify = ({ searchedGif, searchedWeirdness }) => {
  axios
    .get(
      `${GIF_URL}?api_key=${API_KEY}&s=${searchedGif}&weirdness=${searchedWeirdness}`
    )
    // axios.get(`${GIF_URL}?api_key=${API_KEY}&s=otters&weirdness=3`)
    .then(res => {
      return {
        type: "SET_GIF_DATA",
        payload: "TEST"
      };
    });
};

export const setSearchTerm = () => {
    
}

export const setWeirdness = (weirdnessInput) => dispatch => {
    console.log("setting weirdness")
    dispatch({
        type: SET_WEIRDNESS,
        payload: weirdnessInput
    })
}

export const setSearchResult = () => {
    
}
