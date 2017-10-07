import React, { Component } from 'react'
import { Link } from "react-router-dom"
import connectState from './../../services/ConnectState'
import * as actionCreators from "./../../redux/actions/MakerActionCreator.js"

import Page from "./../../../../server_src/models/Page.js"

import css from "./MakerNav.scss"

class MakerNav extends Component {

  constructor(props){
    super(props);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onClickSave(){
    this.props.postNewPage(this.props);
  }

  render() {
    return (
      <div className="maker-nav">
        <section>
          <Link to="/">
            <button className="tile hover-tile" onClick={this.onClickSave}>Save</button>
          </Link>
          <Link to="/">
            <button className="tile hover-tile">Return</button>
          </Link>
        </section>
      </div>
    )
  }
}

export default connectState(MakerNav, actionCreators, (state) => {
  return state.maker.page;
});
