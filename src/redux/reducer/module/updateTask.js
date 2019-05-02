export const defaultState = {
    data: {}
  };
  export function updateTask(state = defaultState, action) {
    switch (action.type) {
      case "UPDATE_TASK_INITATED": {
        return { ...state, status: "uninitiated" };
      }
      case "UPDATE_TASK_STARTED": {
        return { ...state, status: "ongoing" };
      }
      case "UPDATE_TASK_SUCCESS": {
        return { ...state, ...action.payload, error: "", status: "success" };
      }
      case "UPDATE_TASK_FAILED": {
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
  