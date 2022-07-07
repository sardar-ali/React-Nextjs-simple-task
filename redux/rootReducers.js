import { combineReducers } from "redux";
import countReducer from "./count/countReducer";
import homeReducer from "./home/homeReducer";

export const rootReducer = combineReducers({
  home: homeReducer,
  count: countReducer,
});
