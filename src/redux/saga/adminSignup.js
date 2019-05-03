import { put, takeEvery } from "redux-saga/effects";
import history from '../../components/History'
import axios from 'axios'
function* ADMINSIGNUP() {
  console.log('i am here')
  yield takeEvery("SIGNUP", function*(action) {
    yield put({ type: "SIGNUP_STARTED" });
    try {
      const DATA = yield axios.post('https://react-task-manager-backend.herokuapp.com/admin/add-admin', action.payload)
      .then(async result => {
        if(result.data.status === "error")
        throw new Error("No Account found for the this credentials")
        console.log("SignUp Success")
        localStorage.clear()
        await localStorage.setItem('email', result.data.result.email)
        await localStorage.setItem('adminname', result.data.result.adminname)
        history.push('/')
        return result
      });
      yield put({ type: "SIGNUP_SUCCESS", payload: DATA });
    } catch (error) {
      yield put({ type: "SIGNUP_FAILED", payload: error });
    }
  });
}

export default ADMINSIGNUP;
