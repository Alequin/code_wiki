import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

function connectState(reactComponent, actionCreators, stateRetreaver){
  const mapStateToProps = prepareMapStateToProps(stateRetreaver)
  const mapDispatchToProps = prepareMapDispatchToProps(actionCreators)

  return connect(mapStateToProps, mapDispatchToProps)(reactComponent)
}

function prepareMapStateToProps(stateRetreaver){
  return (state, routing) => {
    const states = stateRetreaver(state)
    let props = Object.assign({}, routing)
    return addStatesToProps(props, states)
  }
}

function addStatesToProps(props, states){
  if(Array.isArray(states)){
    for(let state of states){
      props = Object.assign(props, state)
    }
  }else{
    props = Object.assign(props, states)
  }
  return props
}

function prepareMapDispatchToProps(actionCreators){
  return (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
  }
}

export default connectState
