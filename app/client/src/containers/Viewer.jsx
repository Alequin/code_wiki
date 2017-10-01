import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'

import css from './Viewer.scss'

const actionCreators = {};

class Viewer extends Component {

  render() {
    return (
      <div>
        <h1>Viewer</h1>
      </div>
    )
  }
}

function mapStateToProps(state, router) {
   return Object.assign({}, state)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
