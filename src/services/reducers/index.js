import { combineReducers } from "redux";
import auth from "./authReducer";
import message from "./messageReducer";
import common from "./commonReducer";
import list from "./listReducer";

export default combineReducers({
  auth,
  message,common,list
});
