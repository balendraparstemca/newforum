import { combineReducers } from "redux";
import auth from "./authReducer";
import message from "./messageReducer";
import common from "./commonReducer";
import list from "./listReducer";
import user from "./userReducer";
import post from "./postReducer";
import community from "./communityReducer";
import notification from "./notificationReducer";

export default combineReducers({
  auth,
  message,common,list,user,post,community,notification
});
