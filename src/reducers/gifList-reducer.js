const list = [
  { id: 1, title: "seal ya later", url: "https://media2.giphy.com/media/XyJSY5OjVkHvtnJkvM/giphy.gif", weirdness: 2},
  { id: 2, title: "seal n deliver", url: "https://media.giphy.com/media/mJJczeZNee3uw/giphy.gif", weirdness: 7},
  { id: 3, title: "seal the deal", url: "https://media.giphy.com/media/HvsJ527vb7z4A/giphy.gif", weirdness: 6},
  { id: 4, title: "seal funny", url: "https://media3.giphy.com/media/EVMpdzrbWiFig/giphy.gif", weirdness: 3},
  { id: 5, title: "seal meal", url: "https://media1.giphy.com/media/fzMW09JbA2JrO/giphy.gif", weirdness: 1}
]

const GifListReducer = (state = list , action) => {
  switch (action.type) {
    case "LIKE":
      // return [...state.concat(gif)]
      console.log('liked gif')
    case "UNLIKE":
      // return [...state.filter(gif => gif.id !== id)];
      console.log('unliked gif')
    default:
      return state;
  }
};

export default GifListReducer;