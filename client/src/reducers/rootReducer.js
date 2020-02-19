import { combineReducers } from "redux";
import manageBlog from "./manageBlog";
import manageContacts from "./manageContacts";

const rootReducer = combineReducers({
  blogs: manageBlog,
  contanct: manageContacts
});

export default rootReducer;
