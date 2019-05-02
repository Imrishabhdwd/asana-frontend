import { all } from "redux-saga/effects";
import LOGIN from "./login";
// import SIGNUP from "./signup";
// import CLASS from "./class";

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
  yield all([LOGIN()]);
};
export default rootSaga;