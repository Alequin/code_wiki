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

    const summaries =  this.props.data;
    const columnCount = 3;
    const columns = [];

    for(let j=0; j<columnCount; j++){
      const column = [];
      for(let k=j; k<summaries.length; k+=columnCount){
        column.push(
          <PageSummary
            key={k} route="/view" onClickSummary={this.onClickPageSummary}
            title={summaries[k].title} summary={summaries[k].summary} tags={summaries[k].tags}
          />
        );
      }
      columns.push(<section className="summary-column" key={j}>{column}</section>);
    }

    return (
      <div className="index">
        {columns}
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
