import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Link } from "react-router-dom"
import connectState from './../../services/ConnectState'
import * as actionCreators from "./../../redux/actions/MakerActionCreator.js"

import Page from "./../../../../server_src/models/Page.js"

import css from "./MakerNav.scss"

class MakerNav extends Component {

  constructor(props){
    super(props);
    this.onClickSave = this.onClickSave.bind(this);
    this.state = {
      saveSuccess: false
    }
  }

  onClickSave(){
    const page = Page.newPageFromHash(this.props)
    if(page.isPageValid()){
      this.props.postNewPage(this.props);
      this.setState({
        saveSuccess: true
      });
    }else{
      console.log("Page is not valid");
    }
  }

  render() {

    if (this.state.saveSuccess) {
      return <Redirect push to="/" />;
    }

    return (
      <div className="maker-nav">
        <section>
          <button className="tile hover-tile" onClick={this.onClickSave}>Save</button>
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
