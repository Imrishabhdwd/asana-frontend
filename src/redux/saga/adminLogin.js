import { put, takeEvery } from "redux-saga/effects";
import history from '../../components/History'


import axios from 'axios'
function* ADMINLOGIN() {
  yield takeEvery("LOGIN", function*(action) {
    yield put({ type: "LOGIN_STARTED" });
    try {
      const DATA = yield axios.post('https://task-manage-asana.herokuapp.com/admin/get-admin', action.payload)
      .then(async result => {
        if(result.data.status === "error")
        throw new Error("No Account found for the this credentials")
        console.log("Login Success")
        history.push('/')
        // console.log("useremail", "     ==============         ", result.data.result.email)
        await localStorage.setItem('email', result.data.result.email)
        await localStorage.setItem('adminname', result.data.result.adminname)
        return result
      });
      yield put({ type: "LOGIN_SUCCESS", payload: DATA });
    } catch (error) {
      yield put({ type: "LOGIN_FAILED", payload: error });
    }
  });
}

export default ADMINLOGIN;
