// import AddUser from './AddUser'
// import GetUser from './GetUser';

// exports.AddUser = AddUser
// exports.GetUser = GetUser



import * as types from '../constants/constants'

export const initialState = {
    stateprop1: false,
  }

export const UserReducer =  (state = {fetchedItem: ""}, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {fetchedItem: action.payload, }
    case types.ADD_USER:
      return {addedItem: action.payload}
    default:
      return state
  }
}