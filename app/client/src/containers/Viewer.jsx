import React, { Component } from 'react'
import { Link } from "react-router-dom"
import connectState from './../services/ConnectState'
import * as actionCreators from "./../redux/actions/CurrentPageActionCreator.js"

import TextContent from "./../components/TextContent.jsx"

import css from './Viewer.scss'

class Viewer extends Component {

  componentWillMount(){
    this.props.getCurrentPageByTitle(this.props.selectedPage);
  }

  render() {
    const page = this.props.page
    const contents = page.content;
    console.log(this.props);

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

export default connectState(Viewer, actionCreators, (state) => {
  return [state.currentPage, {selectedPage: state.indexPage.selectedPage}]
});
