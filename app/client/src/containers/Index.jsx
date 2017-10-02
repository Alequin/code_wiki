import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from "./../redux/actions/PageSummariesActionCreator.js"

import css from "./Index.scss"

class Index extends Component {

  constructor(){
    super();

    this.hoverTest = () => {
      console.log("hover");
    }

  }

  componentWillMount(){
    this.props.getPageSummaries();
  }

  render() {

    return (
      <div className="index">
        <h1 onMouseEnter={this.hoverTest}>App</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);
