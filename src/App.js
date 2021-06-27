import React, { PureComponent } from 'react'
import Home from './pages/Home/index1.js'
import About from './pages/About/index1.js'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
        <About></About>
      </div>
    )
  }
}
