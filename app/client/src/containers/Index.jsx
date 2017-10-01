import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from "./../redux/actions/PageSummariesActionCreator.js"

class Index extends Component {

  componentWillMount(){
    this.props.getPageSummaries();
  }

  render() {

    console.log("summaries holds: ", this.props.summaries.data);

    return (
      <div>
        <h1>App</h1>
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
