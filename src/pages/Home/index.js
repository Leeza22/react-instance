import React, { PureComponent } from 'react'

import store from '../../store/index'
import {
  addAction
} from '../../store/actionCreators'

export default class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    this.unSubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  componentWillUnmount() {
    this.unSubscribe()
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <h5>counter: {this.state.counter}</h5>
        <button onClick={e => this.add(1)}> + 1</button>
        <button onClick={e => this.add(5)}> + 5</button>
      </div>
    )
  }

  add(num) {
    store.dispatch(addAction(num))
  }
}
