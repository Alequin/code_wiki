import React, { Component } from 'react'
import connectState from './../services/ConnectState'
import * as actionCreators from "./../redux/actions/MakerActionCreator.js"

import ContentInputButtons from './ContentInputButtons'

import calcWidth from './../services/CalcWidth'

import css from "./SummaryContentInput.scss"

class SummaryContentInput extends Component {

  constructor(props){
    super(props);
    this.onEditSummary = this.onEditSummary.bind(this)
    this.onClickAlterWidth = this.onClickAlterWidth.bind(this)
    this.state = {
      width: "40%"
    }
  }

  onEditSummary(event){
    this.props.editPageSummary(event.target.value);
  }

  onClickAlterWidth(){
    this.setState({
      width: calcWidth(this.state.width)
    })
  }

  render() {
    return (
      <div className="content-container">
        <h3>Summary</h3>
        <textarea className="tile" type="textarea" placeholder={this.props.content}
          onChange={this.onEditSummary} value={this.props.summary}
          style={this.state}
        />
        <ContentInputButtons onClickAlterWidth={this.onClickAlterWidth}/>
      </div>
    )
  }
}

export default connectState(SummaryContentInput, actionCreators, (state) => {
  return state.maker.page
});
