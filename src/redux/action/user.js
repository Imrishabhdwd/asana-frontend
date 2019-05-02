export const login = values => ({
  type: "LOGIN",
  payload: {
    email: values.email,
    password: values.password
  }
})

export const adminLogin = values => ({
  type: "LOGIN",
  payload: {
    email: values.email,
    password: values.password
  }
})

export const signup = values => {
  return ({
  type: "SIGNUP",
  payload: {
    email: values.email,
    password: values.password,
    username: values.username
  }
})};

export const adminSignup = values => {
  return ({
  type: "SIGNUP",
  payload: {
    email: values.email,
    password: values.password,
    adminname: values.adminname
  }
})};

export const logout = () => ({
  type: "LOGOUT",
  payload: {}
});


export const getAllTasks = values => ({
  type: "GET_ALL_TASK",
  payload: {
    assignedTo: values.assignedTo,
    createdBy: values.createdBy
  }
})

export const getUsers = values => ({
  type: "GET_USERS"
})

export const getTask = values => ({
  type: "GET_TASK",
  payload: {
    title: values.title,
    subtitle: values.subTitle,
    message: values.message,
    assignedTo: values.assignedTo,
    status: values.status
  }
})

export const addTask = values => {
  return ({
  type: "ADD_TASK",
  payload: {
    title: values.title,
    subtitle: values.subTitle,
    description: values.description,
    assignedTo: values.assignedTo,
    createdBy: values.createdBy,
    status: values.status,
    dueDate: values.dueDate
  }
})};
export const addMessage = values => {
  return ({
  type: "ADD_MESSAGE",
  payload: {
    message: values.message
  }
})};

export const updateTask = values => {
  return ({
  type: "UPDATE_TASK",
  payload: {
    id: values.id,
    title: values.title,
    subtitle: values.subTitle,
    description: values.description,
    assignedTo: values.assignedTo,
    status: values.status,
    dueDate: values.dueDate
  }
})};




// export const REQUEST_LOGIN = "REQUEST_LOGIN";
// export const RECEIVE_LOGIN = "RECEIVE_LOGIN";

// export const requestLogin = data => ({ type: REQUEST_LOGIN, data});
// export const receiveLogin = data => ({ type: RECEIVE_LOGIN, data });

// export const REQUEST_SIGNUP = "REQUEST_SIGNUP";
// export const RECEIVE_SIGNUP = "RECEIVE_SIGNUP";

// export const requestSignup = data => ({ type: REQUEST_SIGNUP, data});
// export const receiveSignup = data => ({ type: RECEIVE_SIGNUP, data });
