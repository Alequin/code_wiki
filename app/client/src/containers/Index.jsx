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
  }

  onClickPageSummary(title){
    return (title) => {
      this.props.setCurrentPageTitle(title);
      console.log("out");
    }
  }

  componentWillMount(){
    this.props.getPageSummaries();
  }

  render() {

    let title = this.props.summaries.data[0].title ? this.props.summaries.data[0].title : "";
    let summary = this.props.summaries.data[0].summary ? this.props.summaries.data[0].summary : "";
    let tags = this.props.summaries.data[0].tags ? this.props.summaries.data[0].tags : "";

    return (
      <div className="index">
        <section className="summary-column">
          <Link to="/view" onClick={this.onClickPageSummary(title)}>
            <PageSummary title={title} summary={summary} tags={tags}/>
          </Link>
        </section>
        <section className="summary-column">
          <PageSummary title={title} summary={summary} tags={tags}/>
        </section>
        <section className="summary-column">
          <PageSummary title={title} summary={summary} tags={tags}/>
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
