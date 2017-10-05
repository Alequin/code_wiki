import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from "./../redux/actions/MakerActionCreator.js"

import PageSummary from "./../components/PageSummary.jsx"

import css from "./Maker.scss"

class Maker extends Component {

  constructor(){
    super()
    this.editTitle = this.editTitle.bind(this);
  }

  editTitle(event){
    this.props.editPageTitle(event.target.value);
  }

  render() {
    return (
      <div className="maker">

        <nav>
          <input type="text" placeholder="Enter Page Title" size="1" onKeyUp={this.editTitle}/>
        </nav>

        <section className="maker-content">

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

export default connect(mapStateToProps, mapDispatchToProps)(Maker);
