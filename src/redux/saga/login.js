import { put, takeEvery } from "redux-saga/effects";
import history from '../../components/History'


import axios from 'axios'
function* LOGIN() {
  yield takeEvery("LOGIN", function*(action) {
    yield put({ type: "LOGIN_STARTED" });
    try {
      const DATA = yield axios.post('https://task-manage-asana.herokuapp.com/user/get-user', action.payload)
      .then(async result => {
        if(result.data.status === "error")
        throw new Error("No Account found for the this credentials")
        console.log("Login Success")
        history.push('/')
        // console.log("useremail", "     ==============         ", result.data.result.email)
        await localStorage.setItem('email', result.data.result.email)
        await localStorage.setItem('username', result.data.result.username)
        return result
      });
      yield put({ type: "LOGIN_SUCCESS", payload: DATA });
    } catch (error) {
      yield put({ type: "LOGIN_FAILED", payload: error });
    }
  });
}

export default LOGIN;
