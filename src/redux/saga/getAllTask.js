import { put, takeEvery } from "redux-saga/effects";
// import history from '../../components/History'


import axios from 'axios'
function* GETALLTASK() {
  yield takeEvery("GET_ALL_TASK", function*(action) {
    yield put({ type: "GET_ALL_TASK_STARTED" });
    try {
      const DATA = yield axios.post('https://task-manage-asana.herokuapp.com/user/get-tasks', action.payload)
      .then(result => {
        if(result.data.status === "error")
        throw new Error("No Task found")
        // history.push('/')
        return result
      });
      yield put({ type: "GET_ALL_TASK_SUCCESS", payload: DATA });
    } catch (error) {
      yield put({ type: "GET_ALL_TASK_FAILED", payload: error });
    }
  });
}

export default GETALLTASK;
