import { combineReducers } from "redux";
import module from "./module";

// Wrap all reducers in a container
const reducer = combineReducers({
  module
});

export default reducer;
