import GifListReducer from "./gifList-reducer";
import SearchResultsReducer from "./searchResults-reducer";
import SearchTermReducer from "./searchTerm-reducer";
import SearchWeirdnessReducer from "./searchWeirdness-reducer";
import ErrorsReducer from "./errors-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    gifList : GifListReducer,
    searchedTerm : SearchTermReducer,
    searchedWeirdness : SearchWeirdnessReducer,
    searchResult : SearchResultsReducer,
    likeError : ErrorsReducer
});

export default allReducers;