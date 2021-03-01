import * as actionTypes from "./contains"

const defaultState =  {
  topBanners: []
}

const reducer = function(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_TOP_BANNERS :
      return [...state.topBanners, action.topBanners];
    default:
      return state
  }

}

export default reducer