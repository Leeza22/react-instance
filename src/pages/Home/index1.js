import React from 'react'

import {
  addAction
} from '../../store/actionCreators'
import connect from '../../utils/connect'

function Home(props) {
  return (
    <div>
      <h2>Home</h2>
      <h5>counter: {props.counter}</h5>
      <button onClick={e => props.add(1)}> + 1</button>
      <button onClick={e => props.add(5)}> + 5</button>
    </div>
  )
}
const mapStateToProps = state => ({
  counter: state.counter
})
const mapDispatchToProps = dispatch => ({
  add: function(num) {
    dispatch(addAction(num))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
