export const defaultState = {
    data: {}
  };
  export function addTask(state = defaultState, action) {
    switch (action.type) {
      case "ADD_TASK_INITATED": {
        return { ...state, status: "uninitiated" };
      }
      case "ADD_TASK_STARTED": {
        return { ...state, status: "ongoing" };
      }
      case "ADD_TASK_SUCCESS": {
        return { ...state, ...action.payload, error: "", status: "success" };
      }
      case "ADD_TASK_FAILED": {
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
  