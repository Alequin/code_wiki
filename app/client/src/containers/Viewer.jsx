import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from "./../redux/actions/CurrentPageActionCreator.js"

import TextContent from "./../components/TextContent.jsx"

import css from './Viewer.scss'

class Viewer extends Component {

  render() {
    const page = this.props.currentPage.data
    const contents = page.content;

    let contentAsJsx = [];
    let key = 0;
    for(let content of contents){
      if(content.type === "text"){
        contentAsJsx.push(<TextContent key={key++} title={content.title} content={content.value}/>);
      }
    }

    return (
      <div className="viewer">

        <nav>
          <h2>{page.title}</h2>
        </nav>

        <section className="viewer-content">
          <TextContent title="Summary" content={page.summary} />
          {contentAsJsx}
        </section>

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
