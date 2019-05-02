export const defaultState = {
  data: { login: { token: localStorage.getItem("token") } }
};
export function login(state = defaultState, action) {
  switch (action.type) {
    case "LOGIN_INITATED": {
      return { ...state, status: "uninitiated" };
    }
    case "LOGIN_STARTED": {
      return { ...state, status: "ongoing" };
    }
    case "LOGIN_SUCCESS": {
      return { ...state, ...action.payload, error: "", status: "success" };
    }
    case "LOGIN_FAILED": {
      return {
        ...state,
        ...defaultState,
        error: action.payload,
        status: "failed"
      };
    }
    default: {
      return state;
    }
  }
}
