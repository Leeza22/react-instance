import { combineReducers } from 'redux';

import recommendReducer from '@/pages/discover/c-pages/recommend/store'
export default combineReducers({
   recommend: recommendReducer
})
