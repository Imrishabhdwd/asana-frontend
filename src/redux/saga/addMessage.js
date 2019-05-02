import { put, takeEvery } from "redux-saga/effects";
import history from '../../components/History'
import axios from 'axios'
function* ADDMESSAGE() {
  yield takeEvery("ADD_MESSAGE", function*(action) {
    yield put({ type: "ADD_MESSAGE_STARTED" });
    try {
      const DATA = yield axios.post('https://task-manage-asana.herokuapp.com/user/add-task', action.payload)
      .then(result => {
        if(result.data.status === "error")
        throw new Error("No Account found for the this credentials")
        console.log("SignUp Success")
        history.push('/')
        return result
      });
      yield put({ type: "ADD_MESSAGE_SUCCESS", payload: DATA });
    } catch (error) {
      yield put({ type: "ADD_MESSAGE_FAILED", payload: error });
    }
  });
}

export default ADDMESSAGE;
