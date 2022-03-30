import { combineReducers } from "redux";
import { userReducer } from "./Reducers";

const reducers = combineReducers({
  allUsers: userReducer,
});

export default reducers;
