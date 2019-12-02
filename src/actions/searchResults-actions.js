import axios from 'axios';
const GIF_URL = "https://api.giphy.com/v1/gifs/translate";
const API_KEY = "iuWW7RqfUxuHRrD6H33ZzFFmZTFLnFT9";

export const searchGify = () => {
  // axios.get(`${GIF_URL}?api_key=${API_KEY}&s=${searchedGif}&weirdness=${searchedWeirdness}`)
  // axios.get(`${GIF_URL}?api_key=${API_KEY}&s=otters&weirdness=3`)
  //   .then(res => {
      return {
        type: "SET_GIF_DATA",
        payload: "TEST"
      }
    // })
  
  // return {
  //   type: "GET_GIF_DATA"
  // };
};

// export const callGiphyAPI = ({searchedGif, searchedWeirdness}) => dispatch => {
//   axios.get(`${GIF_URL}?api_key=${API_KEY}&s=${searchedGif}&weirdness=${searchedWeirdness}`)
//     .then(res => 
//       dispatch({
//        type: "GET_GIF_DATA",
//        payload: res.data 
//       }))
// }
