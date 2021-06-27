import React, { PureComponent } from 'react'
import store from '../store'

function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(WappedComponent) {
    return class extends PureComponent {
      constructor(props) {
        super(props)
        this.state = {
          storeState: mapStateToProps(store.getState())
        }
      }
      componentDidMount() {
        this.unSubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState())
          })
        })
      }
      componentWillUnmount() {
        this.unSubscribe()
      }
      render() {
        return <WappedComponent {...this.props}
                                {...mapStateToProps(store.getState())}
                                {...mapDispatchToProps(store.dispatch)} />
      }
    }
  }
}

export default connect
