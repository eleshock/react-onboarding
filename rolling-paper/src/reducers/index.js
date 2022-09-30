import { combineReducers } from "redux";
import memo from "./memo";
import toast from "./toast";

export const rootReducer = combineReducers({
  memo,
  toast,
});

export default rootReducer;
