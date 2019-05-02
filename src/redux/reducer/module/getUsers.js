export const defaultState = {
    data: { }
  };
  export function getUsers(state = defaultState, action) {
    switch (action.type) {
      case "GET_USERS_INITATED": {
        return { ...state, status: "uninitiated" };
      }
      case "GET_USERS_STARTED": {
        return { ...state, status: "ongoing" };
      }
      case "GET_USERS_SUCCESS": {
        return { ...state, ...action.payload, error: "", status: "success" };
      }
      case "GET_USERS_FAILED": {
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
  