import React, { PureComponent } from 'react'
import store from '../../store'
import { subAction } from '../../store/actionCreators'

export default class About extends PureComponent {
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
        <h2>About</h2>
        <h5>counter: {this.state.counter}</h5>
        <button onClick={e => this.sub(1)}> - 1</button>
        <button onClick={e => this.sub(5)}> - 5</button>
      </div>
    )
  }

  sub(num) {
    store.dispatch(subAction(num))
  }
}
