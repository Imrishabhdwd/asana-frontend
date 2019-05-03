import { put, takeEvery } from "redux-saga/effects";
// import history from '../../components/History'


import axios from 'axios'
function* GETUSERS() {
  yield takeEvery("GET_USERS", function*(action) {
    yield put({ type: "GET_USERS_STARTED" });
    try {
      const DATA = yield axios.post('https://react-task-manager-backend.herokuapp.com/user/get-users', action.payload)
      .then(result => {
        if(result.data.status === "error")
        throw new Error("No Task found")
        // history.push('/')
        return result
      });
      yield put({ type: "GET_USERS_SUCCESS", payload: DATA });
    } catch (error) {
      yield put({ type: "GET_USERS_FAILED", payload: error });
    }
  });
}

export default GETUSERS;
