import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from "./../redux/actions/MakerActionCreator.js"

import css from "./SummaryContentInput.scss"

class SummaryContentInput extends Component {

  constructor(props){
    super(props);
    this.onEditSummary = this.onEditSummary.bind(this)
  }

  onEditSummary(event){
    this.props.editPageSummary(event.target.value);
  }

  render() {
    return (
      <div className="content-container">
        <h3>Summary</h3>
        <textarea className="tile" type="textarea" placeholder={this.props.content}
          onChange={this.onEditSummary} value={this.props.summary}
        />
        <section className="content-buttons">
          <button className="tile">Alter Width</button>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state, router) {
   return Object.assign({}, state.maker)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryContentInput);
