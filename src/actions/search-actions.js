import axios from "axios";
import { SET_SEARCH_TERM, SET_WEIRDNESS, SET_SEARCH_RESULT } from "./types";
const GIF_URL = "https://api.giphy.com/v1/gifs/translate";
const API_KEY = "iuWW7RqfUxuHRrD6H33ZzFFmZTFLnFT9";


export const setSearchTerm = (search) => dispatch => {
    console.log("setting search term")
    dispatch({
        type: SET_SEARCH_TERM,
        payload: search
    })
}

export const setWeirdness = (weirdnessInput) => dispatch => {
    console.log("setting weirdness")
    dispatch({
        type: SET_WEIRDNESS,
        payload: weirdnessInput
    })
}

export const setSearchResult = (search, weirdnessInput) => dispatch => {

      axios.get(`${GIF_URL}?api_key=${API_KEY}&s=${search}&weirdness=${weirdnessInput}`)
      .then(res =>
        dispatch({
          type: SET_SEARCH_RESULT,
          // payload: res.data.data
          payload: {
            id: res.data.data.id,
            title: res.data.data.title,
            url: res.data.data.images.original.url,
            weirdness: weirdnessInput
          }
        })
      )
      .catch(err => {
        // dispatch({
        //   type: AUTH_ERROR
        // });
        console.log("cant get gif")
      });

}
