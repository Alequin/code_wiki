import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as actionCreators from "./../redux/actions/PageSummariesActionCreator.js"

import PageSummary from "./../components/PageSummary.jsx"

import css from "./Maker.scss"

class Maker extends Component {

  render() {
    return (
      <div className="maker">

        <nav>
          <input type="text" placeholder="Enter Page Title" size="1"/>
        </nav>

        <section className="maker-content">

        </section>

      </div>
    )
  }
}

// function mapStateToProps(state, router) {
//    return Object.assign({}, state.summaries)
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Maker);
export default Maker;
