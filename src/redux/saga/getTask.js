import { put, takeEvery } from "redux-saga/effects";
import history from '../../components/History'


import axios from 'axios'
function* GETTASK() {
  yield takeEvery("GET_TASK", function*(action) {
    yield put({ type: "GET_TASK_STARTED" });
    try {
      const DATA = yield axios.post('https://task-manage-asana.herokuapp.com/user/get-task', action.payload)
      .then(result => {
        if(result.data.status === "error")
        throw new Error("Task Not found")
        // console.log("Login Success")
        // history.push('/')
        return result
      });
      yield put({ type: "GET_TASK_SUCCESS", payload: DATA });
    } catch (error) {
      yield put({ type: "GET_TASK_FAILED", payload: error });
    }
  });
}

export default GETTASK;
