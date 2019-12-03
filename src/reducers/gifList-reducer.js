import { LIKE_GIF, UNLIKE_GIF } from "../actions/types";

// const list = [
//   { id: 1, title: "seal ya later", url: "https://media2.giphy.com/media/XyJSY5OjVkHvtnJkvM/giphy.gif", weirdness: 10},
//   { id: 2, title: "seal n deliver", url: "https://media.giphy.com/media/mJJczeZNee3uw/giphy.gif", weirdness: 7},
//   { id: 3, title: "seal the deal", url: "https://media.giphy.com/media/HvsJ527vb7z4A/giphy.gif", weirdness: 10},
//   { id: 4, title: "seal the deal", url: "https://media.giphy.com/media/HvsJ527vb7z4A/giphy.gif", weirdness: 9},
//   { id: 5, title: "seal the deal", url: "https://media.giphy.com/media/HvsJ527vb7z4A/giphy.gif", weirdness: 10}
// ]
const initialState = [];

const GifListReducer = (state = initialState , action) => {
  switch (action.type) {
    case LIKE_GIF:
      console.log('IN REDUCER: like gif')
      return [...state, action.payload];
    case UNLIKE_GIF:
      console.log('IN REDUCER: unliked gif')
      let newList = state.filter(gif => gif.id !== action.payload)
      return newList;
    default:
      return state;
  }
};

export default GifListReducer;
