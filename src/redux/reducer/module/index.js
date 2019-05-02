import { combineReducers } from "redux";
import { defaultState as loginState, login } from "./login";
import { defaultState as signupState, signup } from "./signup";
import { defaultState as addTaskState, addTask } from "./addTask";
import { defaultState as getTaskState, getTask } from "./getTask";
import { defaultState as getAllTaskState, getAllTask } from "./getAllTask";
import { defaultState as getUsersTaskState, getUsers } from "./getUsers";

//module default state for when user logout
const defaultState = {
  login: { data: { login: { token: "" } } },
  signup: { register: { token: "" } },
  addTask: {data: {}},
  getTask: {data: {}},
  getAllTask: {data: {}},
  getUsers: {data: {}}
};

// Wrap all module reducers into a sigal unit
const reducer = combineReducers({
  signup,
  login,
  addTask,
  getTask,
  getAllTask,
  getUsers
});

// Empty state when user logout
export default (state, action) => {
  if (action.type === "LOGOUT") {
    return defaultState;
  } else return reducer(state, action);
};
