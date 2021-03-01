import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

const conposeEnhances = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(reducer, conposeEnhances(applyMiddleware(thunk))) // 第一个参数多个reducer

export default store