import React, { Component } from 'react'
import { Link } from "react-router-dom"
import connectState from './../../services/ConnectState'
import * as actionCreators from "./../../redux/actions/CurrentPageActionCreator.js"

import css from "./ViewerNav.scss"

class ViewerNav extends Component {
  render() {
    return (
      <div className="viewer-nav">
        <Link to="/">
          <button className="tile hover-tile">Delete Page</button>
        </Link>
        <Link to="/">
          <button className="tile hover-tile">Return</button>
        </Link>
      </div>
    )
  }
}

export default connectState(ViewerNav, actionCreators, (state) => {
  return state.maker.page;
});
