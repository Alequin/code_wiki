import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from "./../redux/actions/PageSummariesActionCreator.js"

import PageSummary from "./../components/PageSummary.jsx"

import css from "./Index.scss"

class Index extends Component {

  constructor(){
    super();
    this.onClickPageSummary = this.onClickPageSummary.bind(this);
  }

  onClickPageSummary(title){
    this.props.setSelectedPage(title);
  }

  componentWillMount(){
    this.props.getPageSummaries();
  }

  render() {

    let title = this.props.data[0].title ? this.props.data[0].title : "";
    let summary = this.props.data[0].summary ? this.props.data[0].summary : "";
    let tags = this.props.data[0].tags ? this.props.data[0].tags : "";

    return (
      <div className="index">
        <section className="summary-column">
          <PageSummary route="/view" onClickSummary={this.onClickPageSummary} title={title} summary={summary} tags={tags}/>
        </section>
        <section className="summary-column">
          <PageSummary route="/view" title={title} summary={summary} tags={tags}/>
        </section>
        <section className="summary-column">
          <PageSummary route="/view" title={title} summary={summary} tags={tags}/>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state, router) {
   return Object.assign({}, state.summaries)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
