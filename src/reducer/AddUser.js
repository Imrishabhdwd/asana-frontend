import * as types from '../constants/constants'

export default function (state = {addedItem: ""}, action) {
  switch (action.type) {
    case types.ADD_USER:
      return {addedItem: action.payload}
    default:
      return state
  }
}