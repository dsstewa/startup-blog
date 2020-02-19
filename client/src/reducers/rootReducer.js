import { combineReducers } from "redux";
import manageBlog from "./manageBlog";
import userAuth from "./userAuth";
import manageContacts from "./manageContacts";

const rootReducer = combineReducers({
  blogposts: manageBlog,
  userAuth: userAuth
  // contacts: manageContacts
});

export default rootReducer;
