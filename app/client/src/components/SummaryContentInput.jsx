import React, { Component } from 'react'
import connectState from './../services/ConnectState'
import * as actionCreators from "./../redux/actions/MakerActionCreator.js"

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
    let width
    switch(this.state.width){
      case "20%":
        width = "40%"
        break;
      case "40%":
        width = "60%"
        break;
      case "60%":
        width = "80%"
        break;
      case "80%":
        width = "100%"
        break;
      case "100%":
        width = "20%"
        break;
    }
    this.setState({
      width: width
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
        <section className="content-buttons">
          <button className="tile hover-tile" onClick={this.onClickAlterWidth}>Alter Width</button>
        </section>
      </div>
    )
  }
}

export default connectState(SummaryContentInput, actionCreators, (state) => {
  return state.maker
});
