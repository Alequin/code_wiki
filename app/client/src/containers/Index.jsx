import React, { Component } from 'react'
import connectState from './../services/ConnectState'
import * as actionCreators from "./../redux/actions/indexPageActionCreator.js"

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

export default connectState(Index, actionCreators, (state) => {
  return state.indexPage
});
