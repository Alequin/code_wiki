import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from "./../redux/actions/CurrentPageActionCreator.js"

import css from './Viewer.scss'

class Viewer extends Component {

  componentWillMount(){
    this.props.getCurrentPageByTitle("bacon");
  }

  render() {

    console.log(this.props.currentPage.data);

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
