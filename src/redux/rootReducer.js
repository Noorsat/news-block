import { combineReducers } from "redux";
import { commentReducer } from "./commentReducer";
import { searchReducer } from "./searchReducer";
export const rootReducer = combineReducers({
    commentReducer, searchReducer
})