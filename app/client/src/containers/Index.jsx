import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const actionCreators = {};

class Index extends Component {

  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    )
  }

  mapStateToProps(state, router) {
	   return Object.assign({}, state)
  }

  mapDispatchToProps(dispatch) {
  	return bindActionCreators(actionCreators, dispatch)
  }
}

export default Index;
