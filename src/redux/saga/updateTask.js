import { put, takeEvery } from "redux-saga/effects";
import history from '../../components/History'
import axios from 'axios'
function* UPDATETASK() {
  yield takeEvery("UPDATE_TASK", function*(action) {
    yield put({ type: "UPDATE_TASK_STARTED" });
    try {
      const DATA = yield axios.post('https://react-task-manager-backend.herokuapp.com/user/update-task', action.payload)
      .then(result => {
        if(result.data.status === "error")
        throw new Error("Task Update Successfully")
        history.push('/')
        return result
      });
      yield put({ type: "UPDATE_TASK_SUCCESS", payload: DATA });
    } catch (error) {
      yield put({ type: "UPDATE_TASK_FAILED", payload: error });
    }
  });
}

export default UPDATETASK;
