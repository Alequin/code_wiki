import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from "./../redux/actions/PageSummariesActionCreator.js"

import PageSummary from "./../components/PageSummary.jsx"

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

    let title = this.props.summaries.data[0].title ? this.props.summaries.data[0].title : "";
    let summary = this.props.summaries.data[0].summary ? this.props.summaries.data[0].summary : "";

    return (
      <div className="index">
        <section className="summary-row">
          <PageSummary title={title} summary={summary}/>
          <PageSummary title={title} summary={summary}/>
          <PageSummary title={title} summary={summary}/>
          <PageSummary title={title} summary={summary}/>
        </section>
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
