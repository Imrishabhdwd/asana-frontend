import { all } from "redux-saga/effects";
import LOGIN from "./login";
import SIGNUP from "./signup";
import GETTASK from "./getTask"
import GETALLTASK from "./getAllTask"
import ADDTASK from "./addTask"
import UPDATETASK from "./updateTask"
import GETUSERS from './getUsers'
import ADMINLOGIN from './adminLogin'
import ADMINSIGNUP from './adminSignup'
import ADDMESSAGE from './addMessage'

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
  yield all([LOGIN(), SIGNUP(), GETALLTASK(), GETTASK(), ADDTASK(), UPDATETASK(), GETUSERS(), ADMINLOGIN(), ADMINSIGNUP(), ADDMESSAGE()]);
};
export default rootSaga;
