import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from "./../redux/actions/CurrentPageActionCreator.js"

import TextContent from "./../Components/TextContent"

import css from './Viewer.scss'

class Viewer extends Component {

  componentWillMount(){
    this.props.getCurrentPageByTitle("example page 1");
  }

  render() {
    const contents = this.props.currentPage.data.content;

    let contentAsJsx = [];
    let key = 0;
    for(let content of contents){
      if(content.type === "text"){
        contentAsJsx.push(<TextContent key={key++} title={content.title} />);
      }
    }

    return (
      <div>
        {contentAsJsx}
      </div>
    )
  }
}

function mapStateToProps(state, router) {
   return Object.assign({}, state)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
