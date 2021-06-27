import store from './store/index.js'
import {
  addAction,
  subAction
} from './store/actionCreators.js'
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addAction(1))
store.dispatch(addAction(5))
store.dispatch(subAction(1))
store.dispatch(subAction(5))