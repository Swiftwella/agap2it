import { combineReducers } from "redux";
import showsReducer from "./showsReducer";

const reducers = combineReducers({
  shows: showsReducer
});

export default reducers