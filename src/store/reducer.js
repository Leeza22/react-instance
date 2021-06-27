import {
  ADD_NUM,
  SUB_NUM
} from './types.js'

const initialState = {
  counter: 0
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NUM:
      return {...state, counter: state.counter + action.num};
    case SUB_NUM:
      return {...state, counter: state.counter - action.num};
    default:
      return state
  }
}

export default reducer