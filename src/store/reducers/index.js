import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import userReducer from "./userReducer";
import postReducer from "./postReducer";

const reducers = combineReducers({
  account: accountReducer,
  user: userReducer,
  dataPosts: postReducer,
});

export default reducers;
