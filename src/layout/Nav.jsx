import React, { Fragment, memo } from 'react'
import { NavLink } from 'react-router-dom'

export default memo(function nav(props) {
  return (
    <Fragment>
      <NavLink to="/counter">counter</NavLink> &nbsp;
      <NavLink to="/home">home</NavLink>
    </Fragment>
  )
})
