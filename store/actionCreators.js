// 导出可dispatch的 生成action 的函数
import {
  ADD_NUM,
  SUB_NUM
} from './types.js'

export const addAction = (num) =>({
  type: ADD_NUM,
  num
})

export const subAction = (num) =>({
  type: SUB_NUM,
  num
})