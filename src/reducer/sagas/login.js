import axios from 'axios'
import { put, takeEvery } from "redux-saga/effects";
function* Login() {
  yield takeEvery("LOGIN", function*(action) {
    yield put({ type: "LOGIN_STARTED" });
    try {
      const DATA = yield axios.post('https://task-manage-asana.herokuapp.com/user/get-user', action.payload)
      .then(result => {
        if(result.data.status === "error")
        throw new Error("No Account found for the this credentials")
        console.log("Login Success")
        // history.push('/')
      });
      // localStorage.setItem("token", DATA.data.login.token);
      yield put({ type: "LOGIN_SUCCESS", payload: DATA });
    } catch (error) {
      yield put({ type: "LOGIN_FAILED", payload: error });
    }
  });
}

export default Login;