import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import {
  HeaderWapper,
  HeaderLeft,
  HeaderRight
} from './style'

import { headerLinks } from '@/common/local-data'

import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export default memo(function HXAppFooter() {
  // 页面代码
  const selectShowSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link}>
          {item.title}
        </a>
      )
    }
  }
  // 返回jsx
  return (
    <HeaderWapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    {selectShowSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/电台/视频/用户" prefix={<SearchOutlined />}></Input>
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWapper>
  )
})
