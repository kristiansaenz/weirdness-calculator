import GifListReducer from "./gifList-reducer";
import SearchResultsReducer from "./searchResults-reducer";
import SearchTermReducer from "./searchTerm-reducer";
import SearchWeirdnessReducer from "./searchWeirdness-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    gifList : GifListReducer,
    searchedTerm : SearchTermReducer,
    searchedWeirdness : SearchWeirdnessReducer,
    searchResult : SearchResultsReducer
});

export default allReducers;