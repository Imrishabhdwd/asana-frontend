export const defaultState = {
    data: { }
  };
  export function getAllTask(state = defaultState, action) {
    switch (action.type) {
      case "GET_ALL_TASK_INITATED": {
        return { ...state, status: "uninitiated" };
      }
      case "GET_ALL_TASK_STARTED": {
        return { ...state, status: "ongoing" };
      }
      case "GET_ALL_TASK_SUCCESS": {
        return { ...state, ...action.payload, error: "", status: "success" };
      }
      case "GET_ALL_TASK_FAILED": {
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
  