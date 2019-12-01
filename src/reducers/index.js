import GifListReducer from "./gifList-reducer";
import SearchResultsReducer from "./searchResults-reducer";
import WeirdnessReducer from "./weirdness-reducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    gifList : GifListReducer,
    searchResults : SearchResultsReducer,
    weirdnessScore : WeirdnessReducer
});

export default allReducers;