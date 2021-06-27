// package.json 设置type为module  13.2.x 版本支持es module
import redux from 'redux'

// state
const initialState = {
  counter: 0
}
// reducer 纯函数 （state， action）
function reducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT" :
      return {...state, counter: state.counter + 1};
    case "ADD":
      return {...state, counter: state.counter + action.num};
    case "DECREMENT":
      return {...state, counter: state.counter - 1};
    case "SUB":
      return {...state, counter: state.counter - action.num};
    default:
      return state
  }
}

 // store state库
 const store = redux.createStore(reducer)

 // 订阅store变化 在dispath前订阅
 store.subscribe(() => {
   console.log(store.getState())
 })


 // actions action对象
 const action1 = { type: "INCREMENT" }
 const action2 = { type: "ADD", num: 5}
 const action3 = { type: "DECREMENT" }
 const action4 = { type: "SUB", num: 5 }


 store.dispatch(action1)
 store.dispatch(action2)
 store.dispatch(action3)
 store.dispatch(action4)