import { combineReducers } from "redux";
import languageReducer from "./language";
import themeReducer from "./theme";
import usersReducer from "./users";

const rootReducer = combineReducers({
  language: languageReducer,
  theme: themeReducer,
  users: usersReducer,
});

export default rootReducer;
