import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import memo from "./memo";

const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = combineReducers({
  memo: memo,
});

export default persistReducer(persistConfig, rootReducer);
