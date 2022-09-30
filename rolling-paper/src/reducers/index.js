import { combineReducers } from "redux";
import memo from "./memo";

export const rootReducer = combineReducers({
  memo: memo,
});

export default rootReducer;
