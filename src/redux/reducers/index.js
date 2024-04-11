import { combineReducers } from "redux";
import getTest from "./getTestReducer";

export const rootReducer = combineReducers({
    test: getTest
})