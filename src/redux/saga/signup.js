import { put, takeEvery } from "redux-saga/effects";
import history from '../../components/History'
import axios from 'axios'
function* SIGNUP() {
  console.log('i am here')
  yield takeEvery("SIGNUP", function*(action) {
    yield put({ type: "SIGNUP_STARTED" });
    try {
      const DATA = yield axios.post('https://task-manage-asana.herokuapp.com/user/add-user', action.payload)
      .then(async result => {
        if(result.data.status === "error")
        throw new Error("No Account found for the this credentials")
        console.log("SignUp Success")
        await localStorage.setItem('email', result.data.result.email)
        await localStorage.setItem('username', result.data.result.username)
        history.push('/')
        return result
      });
      yield put({ type: "SIGNUP_SUCCESS", payload: DATA });
    } catch (error) {
      yield put({ type: "SIGNUP_FAILED", payload: error });
    }
  });
}

export default SIGNUP;
