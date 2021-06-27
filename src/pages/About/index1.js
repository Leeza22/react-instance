import React, { PureComponent } from 'react'
import connect from '../../utils/connect'
import { subAction } from '../../store/actionCreators'
export class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
        <h5>counter: {this.props.counter}</h5>
        <button onClick={e => this.props.sub(1)}> - 1</button>
        <button onClick={e => this.props.sub(5)}> - 5</button>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    counter: state.counter
})
const mapDispatchToProps = dispatch => ({
  sub:  function(num) {
    dispatch(subAction(num))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(About)
