import reducers from './reducer/UserReducer'


const [state, dispatch] = useReducer(reducers.AddUser, reducers.initialState)
