import * as actionTypes from "./contains";

export const getTopBannerAction = () => {
  return dispatch => {
    // 发送请求
    // 改变state
    dispatch({
      type: actionTypes.CHANGE_TOP_BANNERS,
      topBanners: res.banner
    })
  }
}